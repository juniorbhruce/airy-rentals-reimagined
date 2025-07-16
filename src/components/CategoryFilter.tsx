import { useState } from 'react';
import { Mountain, Waves, Building, TreePine, Tent, Home } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';

const categories = [
  { id: 'all', label: 'All', icon: Home },
  { id: 'cabins', label: 'Cabins', icon: TreePine },
  { id: 'beaches', label: 'Beaches', icon: Waves },
  { id: 'mountains', label: 'Mountains', icon: Mountain },
  { id: 'cities', label: 'Cities', icon: Building },
  { id: 'camping', label: 'Camping', icon: Tent },
];

export const CategoryFilter = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <div className="border-b border-border/40 bg-background/80 backdrop-blur-sm sticky top-16 z-40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollArea className="w-full">
          <div className="flex items-center space-x-2 py-4 min-w-max">
            {categories.map((category) => {
              const Icon = category.icon;
              const isSelected = selectedCategory === category.id;
              
              return (
                <Button
                  key={category.id}
                  variant={isSelected ? "default" : "ghost"}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-200 ${
                    isSelected 
                      ? 'bg-primary text-primary-foreground shadow-card' 
                      : 'hover:bg-muted/50'
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{category.label}</span>
                </Button>
              );
            })}
          </div>
        </ScrollArea>
      </div>
    </div>
  );
};