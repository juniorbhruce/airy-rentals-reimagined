import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Heart, Share, Star, MapPin, Calendar, Users, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import property1 from '@/assets/property-1.jpg';
import property2 from '@/assets/property-2.jpg';
import property3 from '@/assets/property-3.jpg';
import property4 from '@/assets/property-4.jpg';
import property5 from '@/assets/property-5.jpg';
import property6 from '@/assets/property-6.jpg';

// Mock data - in real app would come from API
const mockProperty = {
  id: '1',
  title: 'Cozy Mountain Cabin with Lake View',
  location: 'Lake Tahoe, California',
  price: 189,
  rating: 4.8,
  reviewCount: 124,
  host: {
    name: 'Sarah',
    avatar: '',
    joinedDate: '2019',
    isVerified: true
  },
  type: 'Cabin',
  features: ['WiFi', 'Kitchen', 'Fireplace', 'Lake View', 'Pets allowed'],
  description: 'Experience the perfect mountain getaway in this cozy cabin overlooking pristine Lake Tahoe. Wake up to breathtaking views and enjoy peaceful mornings on the private deck. The cabin features a fully equipped kitchen, comfortable living area with fireplace, and all modern amenities while maintaining its rustic charm.',
  amenities: [
    'WiFi',
    'Kitchen',
    'Fireplace',
    'Lake View',
    'Pets allowed',
    'Parking',
    'Hot Tub',
    'Mountain View',
    'Deck',
    'Hiking nearby'
  ],
  images: [
    property1,
    property2,
    property3,
    property4,
    property5
  ],
  reviews: [
    {
      id: '1',
      author: 'John',
      avatar: '',
      date: '2024-01-15',
      rating: 5,
      comment: 'Amazing place! The view was absolutely stunning and the cabin was very clean and comfortable.'
    },
    {
      id: '2',
      author: 'Emily',
      avatar: '',
      date: '2024-01-10',
      rating: 4,
      comment: 'Great location and beautiful property. Sarah was very responsive and helpful.'
    }
  ]
};

export default function PropertyDetail() {
  const { id } = useParams();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);

  const property = mockProperty; // In real app, fetch by id

  const nextImage = () => {
    setCurrentImageIndex((prev) => 
      prev === property.images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => 
      prev === 0 ? property.images.length - 1 : prev - 1
    );
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut) return 0;
    const nights = Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24));
    return nights * property.price;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Property Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-foreground mb-2">{property.title}</h1>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 fill-warning text-warning" />
                <span className="font-medium">{property.rating}</span>
                <span className="text-muted-foreground">({property.reviewCount} reviews)</span>
              </div>
              <div className="flex items-center space-x-1 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>{property.location}</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm">
                <Share className="w-4 h-4 mr-2" />
                Share
              </Button>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={() => setIsWishlisted(!isWishlisted)}
              >
                <Heart className={`w-4 h-4 mr-2 ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                Save
              </Button>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="mb-8">
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
            <img
              src={property.images[currentImageIndex]}
              alt={property.title}
              className="w-full h-full object-cover"
            />
            {property.images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={prevImage}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="ghost"
                  size="sm"
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 rounded-full bg-background/80 backdrop-blur-sm"
                  onClick={nextImage}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
              </>
            )}
          </div>
          
          {/* Image thumbnails */}
          <div className="flex space-x-2 mt-4 overflow-x-auto">
            {property.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentImageIndex(index)}
                className={`flex-shrink-0 w-20 h-20 rounded-lg overflow-hidden border-2 ${
                  index === currentImageIndex ? 'border-primary' : 'border-transparent'
                }`}
              >
                <img
                  src={image}
                  alt={`View ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h2 className="text-xl font-semibold">{property.type} hosted by {property.host.name}</h2>
                    <p className="text-muted-foreground">Up to {guests} guests</p>
                  </div>
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={property.host.avatar} />
                    <AvatarFallback>{property.host.name[0]}</AvatarFallback>
                  </Avatar>
                </div>
                
                <div className="space-y-4">
                  <p className="text-foreground">{property.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {property.amenities.map((amenity, index) => (
                      <Badge key={index} variant="secondary">{amenity}</Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Reviews */}
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <Star className="w-5 h-5 fill-warning text-warning" />
                  <h3 className="text-xl font-semibold">{property.rating} · {property.reviewCount} reviews</h3>
                </div>
                
                <div className="space-y-4">
                  {property.reviews.map((review) => (
                    <div key={review.id} className="border-b border-border/40 pb-4 last:border-b-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <Avatar className="w-10 h-10">
                          <AvatarImage src={review.avatar} />
                          <AvatarFallback>{review.author[0]}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-medium">{review.author}</p>
                          <p className="text-sm text-muted-foreground">
                            {new Date(review.date).toLocaleDateString()}
                          </p>
                        </div>
                      </div>
                      <p className="text-foreground">{review.comment}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardContent className="p-6">
                <div className="mb-6">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">${property.price}</span>
                    <span className="text-muted-foreground">per night</span>
                  </div>
                  <div className="flex items-center space-x-1 mt-2">
                    <Star className="w-4 h-4 fill-warning text-warning" />
                    <span className="font-medium">{property.rating}</span>
                    <span className="text-muted-foreground">({property.reviewCount} reviews)</span>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Check-in</label>
                      <Input
                        type="date"
                        value={checkIn}
                        onChange={(e) => setCheckIn(e.target.value)}
                      />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-foreground mb-1 block">Check-out</label>
                      <Input
                        type="date"
                        value={checkOut}
                        onChange={(e) => setCheckOut(e.target.value)}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-medium text-foreground mb-1 block">Guests</label>
                    <select
                      value={guests}
                      onChange={(e) => setGuests(Number(e.target.value))}
                      className="w-full p-2 border border-border rounded-md bg-background"
                    >
                      {[1, 2, 3, 4, 5, 6].map(num => (
                        <option key={num} value={num}>{num} guest{num > 1 ? 's' : ''}</option>
                      ))}
                    </select>
                  </div>

                  <Button className="w-full bg-gradient-hero hover:opacity-90 text-lg py-3">
                    Reserve
                  </Button>

                  <p className="text-sm text-muted-foreground text-center">
                    You won't be charged yet
                  </p>

                  {checkIn && checkOut && (
                    <div className="border-t border-border/40 pt-4 space-y-2">
                      <div className="flex justify-between">
                        <span>${property.price} × {Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))} nights</span>
                        <span>${calculateTotal()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Service fee</span>
                        <span>${Math.round(calculateTotal() * 0.1)}</span>
                      </div>
                      <div className="flex justify-between font-bold border-t border-border/40 pt-2">
                        <span>Total</span>
                        <span>${calculateTotal() + Math.round(calculateTotal() * 0.1)}</span>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}