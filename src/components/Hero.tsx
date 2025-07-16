import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, Calendar, Users } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import heroImage from '@/assets/hero-image.jpg';

export const Hero = () => {
  const navigate = useNavigate();
  const [searchData, setSearchData] = useState({
    location: '',
    checkIn: '',
    checkOut: '',
    guests: '1 guest'
  });

  const handleSearch = () => {
    const searchParams = new URLSearchParams({
      location: searchData.location || 'Anywhere',
      checkIn: searchData.checkIn,
      checkOut: searchData.checkOut,
      guests: searchData.guests
    });
    navigate(`/search?${searchParams.toString()}`);
  };

  return (
    <div className="relative min-h-[600px] lg:min-h-[700px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Beautiful vacation home"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center min-h-[600px] lg:min-h-[700px]">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 animate-fade-in-up">
              Find your next{' '}
              <span className="bg-gradient-to-r from-coral-light to-accent bg-clip-text text-transparent">
                adventure
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 animate-fade-in-up">
              Discover unique places to stay around the world
            </p>

            {/* Search Form */}
            <Card className="max-w-4xl mx-auto p-4 bg-background/95 backdrop-blur-sm shadow-modal animate-fade-in-up">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                {/* Location */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Where</label>
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      placeholder="Search destinations"
                      value={searchData.location}
                      onChange={(e) => setSearchData({...searchData, location: e.target.value})}
                      className="pl-10 border-border/40 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Check-in */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Check in</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="date"
                      value={searchData.checkIn}
                      onChange={(e) => setSearchData({...searchData, checkIn: e.target.value})}
                      className="pl-10 border-border/40 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Check-out */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Check out</label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      type="date"
                      value={searchData.checkOut}
                      onChange={(e) => setSearchData({...searchData, checkOut: e.target.value})}
                      className="pl-10 border-border/40 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Guests */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">Who</label>
                  <div className="relative">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <select
                      value={searchData.guests}
                      onChange={(e) => setSearchData({...searchData, guests: e.target.value})}
                      className="w-full pl-10 pr-3 py-2 border border-border/40 rounded-md bg-background focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
                    >
                      <option value="1 guest">1 guest</option>
                      <option value="2 guests">2 guests</option>
                      <option value="3 guests">3 guests</option>
                      <option value="4 guests">4 guests</option>
                      <option value="5+ guests">5+ guests</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex justify-center">
                <Button
                  onClick={handleSearch}
                  className="bg-gradient-hero hover:opacity-90 px-8 py-3 text-lg font-medium shadow-card-hover transition-all duration-300 transform hover:scale-105"
                >
                  <Search className="w-5 h-5 mr-2" />
                  Search
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};