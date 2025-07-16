import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Filter, MapPin, Calendar, Users, SlidersHorizontal } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { Header } from '@/components/Header';
import { PropertyCard } from '@/components/PropertyCard';
import { Footer } from '@/components/Footer';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import property5 from '@/assets/property-5.jpg';
import property6 from '@/assets/property-6.jpg';

const mockProperties = [
  {
    id: '1',
    title: 'Cozy Mountain Cabin with Lake View',
    location: 'Lake Tahoe, California',
    price: 189,
    rating: 4.8,
    reviewCount: 124,
    image: property1,
    host: 'Sarah',
    type: 'Cabin',
    features: ['WiFi', 'Kitchen', 'Fireplace', 'Lake View', 'Pets allowed']
  },
  {
    id: '2',
    title: 'Luxury Beachfront Villa',
    location: 'Malibu, California',
    price: 450,
    rating: 4.9,
    reviewCount: 89,
    image: property2,
    host: 'Michael',
    type: 'Villa',
    features: ['Pool', 'Beach Access', 'WiFi', 'Kitchen', 'Hot Tub']
  },
  {
    id: '3',
    title: 'Modern City Apartment',
    location: 'New York, NY',
    price: 125,
    rating: 4.7,
    reviewCount: 203,
    image: property3,
    host: 'Emma',
    type: 'Apartment',
    features: ['WiFi', 'Kitchen', 'City View', 'Gym', 'Parking']
  },
  {
    id: '4',
    title: 'Rustic Countryside Cottage',
    location: 'Cotswolds, England',
    price: 95,
    rating: 4.6,
    reviewCount: 156,
    image: property4,
    host: 'James',
    type: 'Cottage',
    features: ['Garden', 'Fireplace', 'WiFi', 'Pets allowed', 'Hiking']
  },
  {
    id: '5',
    title: 'Unique Treehouse Experience',
    location: 'Costa Rica',
    price: 220,
    rating: 4.9,
    reviewCount: 67,
    image: property5,
    host: 'Sofia',
    type: 'Treehouse',
    features: ['Jungle View', 'Eco-friendly', 'WiFi', 'Adventure', 'Unique']
  },
  {
    id: '6',
    title: 'Desert Glamping Experience',
    location: 'Sedona, Arizona',
    price: 175,
    rating: 4.8,
    reviewCount: 91,
    image: property6,
    host: 'David',
    type: 'Glamping',
    features: ['Stargazing', 'Luxury Tent', 'WiFi', 'Adventure', 'Spa']
  }
];

const propertyTypes = ['Cabin', 'Villa', 'Apartment', 'Cottage', 'Treehouse', 'Glamping'];
const amenities = ['WiFi', 'Kitchen', 'Pool', 'Fireplace', 'Pets allowed', 'Parking', 'Hot Tub', 'Gym'];

export default function SearchResults() {
  const [searchParams] = useSearchParams();
  const [filters, setFilters] = useState({
    priceRange: [0, 500],
    propertyTypes: [] as string[],
    amenities: [] as string[],
  });

  const location = searchParams.get('location') || 'Anywhere';
  const checkIn = searchParams.get('checkIn') || '';
  const checkOut = searchParams.get('checkOut') || '';
  const guests = searchParams.get('guests') || '1 guest';

  const handlePropertyTypeChange = (type: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      propertyTypes: checked 
        ? [...prev.propertyTypes, type]
        : prev.propertyTypes.filter(t => t !== type)
    }));
  };

  const handleAmenityChange = (amenity: string, checked: boolean) => {
    setFilters(prev => ({
      ...prev,
      amenities: checked 
        ? [...prev.amenities, amenity]
        : prev.amenities.filter(a => a !== amenity)
    }));
  };

  const filteredProperties = mockProperties.filter(property => {
    const matchesPrice = property.price >= filters.priceRange[0] && property.price <= filters.priceRange[1];
    const matchesType = filters.propertyTypes.length === 0 || filters.propertyTypes.includes(property.type);
    const matchesAmenities = filters.amenities.length === 0 || 
      filters.amenities.some(amenity => property.features.includes(amenity));
    
    return matchesPrice && matchesType && matchesAmenities;
  });

  const FilterContent = () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">Price range</h3>
        <div className="space-y-4">
          <Slider
            value={filters.priceRange}
            onValueChange={(value) => setFilters(prev => ({ ...prev, priceRange: value }))}
            max={500}
            min={0}
            step={10}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-muted-foreground">
            <span>${filters.priceRange[0]}</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Property type</h3>
        <div className="space-y-3">
          {propertyTypes.map(type => (
            <div key={type} className="flex items-center space-x-2">
              <Checkbox
                id={type}
                checked={filters.propertyTypes.includes(type)}
                onCheckedChange={(checked) => handlePropertyTypeChange(type, checked as boolean)}
              />
              <Label htmlFor={type} className="text-sm">{type}</Label>
            </div>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4">Amenities</h3>
        <div className="space-y-3">
          {amenities.map(amenity => (
            <div key={amenity} className="flex items-center space-x-2">
              <Checkbox
                id={amenity}
                checked={filters.amenities.includes(amenity)}
                onCheckedChange={(checked) => handleAmenityChange(amenity, checked as boolean)}
              />
              <Label htmlFor={amenity} className="text-sm">{amenity}</Label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Summary */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Stays in {location}
          </h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4" />
              <span>{location}</span>
            </div>
            {checkIn && (
              <div className="flex items-center space-x-1">
                <Calendar className="w-4 h-4" />
                <span>{checkIn} - {checkOut}</span>
              </div>
            )}
            <div className="flex items-center space-x-1">
              <Users className="w-4 h-4" />
              <span>{guests}</span>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Desktop Filters */}
          <div className="hidden lg:block w-80 flex-shrink-0">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Filter className="w-5 h-5" />
                  <h2 className="text-xl font-semibold">Filters</h2>
                </div>
                <FilterContent />
              </CardContent>
            </Card>
          </div>

          {/* Mobile Filters */}
          <div className="lg:hidden mb-6">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" className="w-full md:w-auto">
                  <SlidersHorizontal className="w-4 h-4 mr-2" />
                  Filters
                </Button>
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[90vh]">
                <SheetHeader>
                  <SheetTitle>Filters</SheetTitle>
                  <SheetDescription>
                    Refine your search results
                  </SheetDescription>
                </SheetHeader>
                <div className="mt-6 overflow-y-auto">
                  <FilterContent />
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Results */}
          <div className="flex-1">
            <div className="mb-6">
              <p className="text-muted-foreground">
                {filteredProperties.length} stays found
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProperties.map(property => (
                <PropertyCard key={property.id} {...property} />
              ))}
            </div>

            {filteredProperties.length === 0 && (
              <div className="text-center py-12">
                <p className="text-lg text-muted-foreground mb-4">
                  No properties match your current filters
                </p>
                <Button 
                  variant="outline" 
                  onClick={() => setFilters({ priceRange: [0, 500], propertyTypes: [], amenities: [] })}
                >
                  Clear filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}