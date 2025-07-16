import { useState } from 'react';
import { PropertyCard } from './PropertyCard';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import property5 from '@/assets/property-5.jpg';
import property6 from '@/assets/property-6.jpg';

const properties = [
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

export const PropertyGrid = () => {
  const [wishlistedProperties, setWishlistedProperties] = useState<string[]>([]);

  const handleWishlistToggle = (propertyId: string) => {
    setWishlistedProperties(prev => 
      prev.includes(propertyId) 
        ? prev.filter(id => id !== propertyId)
        : [...prev, propertyId]
    );
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-foreground mb-4">
          Explore unique places to stay
        </h2>
        <p className="text-muted-foreground text-lg">
          Discover amazing homes and experiences around the world
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {properties.map((property) => (
          <div key={property.id} className="animate-fade-in">
            <PropertyCard
              {...property}
              isWishlisted={wishlistedProperties.includes(property.id)}
              onWishlistToggle={handleWishlistToggle}
            />
          </div>
        ))}
      </div>
    </div>
  );
};