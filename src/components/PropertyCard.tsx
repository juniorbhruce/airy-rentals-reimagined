import { Heart, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface PropertyCardProps {
  id: string;
  title: string;
  location: string;
  price: number;
  rating: number;
  reviewCount: number;
  image: string;
  host: string;
  type: string;
  features: string[];
  isWishlisted?: boolean;
  onWishlistToggle?: (id: string) => void;
}

export const PropertyCard = ({
  id,
  title,
  location,
  price,
  rating,
  reviewCount,
  image,
  host,
  type,
  features,
  isWishlisted = false,
  onWishlistToggle
}: PropertyCardProps) => {
  const handleWishlistClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onWishlistToggle?.(id);
  };

  return (
    <Link to={`/property/${id}`} className="block">
      <Card className="group overflow-hidden border-0 shadow-card hover:shadow-card-hover transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
        <div className="relative">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        
        {/* Wishlist Button */}
        <Button
          variant="ghost"
          size="sm"
          className="absolute top-3 right-3 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 p-2"
          onClick={handleWishlistClick}
        >
          <Heart 
            className={`w-4 h-4 ${isWishlisted ? 'fill-primary text-primary' : 'text-foreground'}`} 
          />
        </Button>

        {/* Property Type Badge */}
        <Badge className="absolute top-3 left-3 bg-background/90 text-foreground backdrop-blur-sm">
          {type}
        </Badge>
      </div>

      <CardContent className="p-4">
        <div className="space-y-2">
          {/* Location and Rating */}
          <div className="flex items-center justify-between">
            <p className="text-sm font-medium text-muted-foreground">{location}</p>
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-warning text-warning" />
              <span className="text-sm font-medium">{rating}</span>
              <span className="text-sm text-muted-foreground">({reviewCount})</span>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground line-clamp-2">{title}</h3>

          {/* Host */}
          <p className="text-sm text-muted-foreground">Hosted by {host}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-1">
            {features.slice(0, 3).map((feature, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {feature}
              </Badge>
            ))}
            {features.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{features.length - 3} more
              </Badge>
            )}
          </div>

          {/* Price */}
          <div className="flex items-center justify-between mt-3">
            <div>
              <span className="text-lg font-bold text-foreground">${price}</span>
              <span className="text-sm text-muted-foreground"> / night</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
    </Link>
  );
};