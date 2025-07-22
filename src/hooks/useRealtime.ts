import { useEffect, useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { toast } from "@/components/ui/use-toast";

export function useRealtime(
  table: string,
  initialData: any[] = [],
  filters?: Record<string, any>
) {
  const [data, setData] = useState<any[]>(initialData);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  // Initial fetch
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        
        // @ts-ignore - This works, but TypeScript doesn't know about the table names dynamically
        let query = supabase.from(table).select('*');
        
        // Apply any filters if provided
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            // @ts-ignore - Using dynamic query filters
            query = query.eq(key, value);
          });
        }
        
        const { data, error } = await query;
        
        if (error) throw error;
        
        setData(data);
      } catch (err) {
        setError(err as Error);
        toast({
          title: "Error fetching data",
          description: (err as Error).message,
          variant: "destructive",
        });
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [table, JSON.stringify(filters)]);

  // Set up realtime subscription
  useEffect(() => {
    const channel = supabase
      .channel('public:' + table)
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table },
        (payload) => {
          const { eventType, new: newRecord, old: oldRecord } = payload;

          // Update local state based on event type
          if (eventType === 'INSERT') {
            // Check if the new record matches our filters
            let matches = true;
            if (filters) {
              Object.entries(filters).forEach(([key, value]) => {
                if (newRecord[key] !== value) {
                  matches = false;
                }
              });
            }
            
            if (matches) {
              setData((current) => [...current, newRecord]);
            }
          } else if (eventType === 'UPDATE') {
            setData((current) =>
              current.map((item) => {
                if (item.id === newRecord.id) {
                  return newRecord;
                }
                return item;
              })
            );
          } else if (eventType === 'DELETE') {
            setData((current) =>
              current.filter((item) => item.id !== oldRecord.id)
            );
          }
        }
      )
      .subscribe();

    // Cleanup subscription on unmount
    return () => {
      supabase.removeChannel(channel);
    };
  }, [table, JSON.stringify(filters)]);

  return { data, loading, error };
}