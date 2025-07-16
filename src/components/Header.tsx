import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Search, Menu, User, Globe } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-hero rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">A</span>
            </div>
            <span className="text-xl font-bold text-foreground hidden sm:block">
              Airbnb
            </span>
          </Link>

          {/* Desktop Search Bar */}
          <div className="hidden md:flex items-center max-w-lg mx-4 flex-1">
            <div className="relative w-full">
              <div className="flex items-center bg-background border border-border rounded-full shadow-card hover:shadow-card-hover transition-shadow">
                <button className="flex items-center px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 rounded-l-full transition-colors">
                  Anywhere
                </button>
                <div className="w-px h-6 bg-border"></div>
                <button className="flex items-center px-6 py-3 text-sm font-medium text-foreground hover:bg-muted/50 transition-colors">
                  Any week
                </button>
                <div className="w-px h-6 bg-border"></div>
                <button className="flex items-center px-6 py-3 text-sm font-medium text-muted-foreground hover:bg-muted/50 transition-colors">
                  Add guests
                </button>
                <button className="p-2 m-1 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-colors">
                  <Search className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Search Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="sm" className="rounded-full">
              <Search className="w-4 h-4" />
            </Button>
          </div>

          {/* Right Side */}
          <div className="flex items-center space-x-4">
            <Link
              to="/host"
              className="hidden lg:block text-sm font-medium text-foreground hover:text-primary transition-colors"
            >
              Become a host
            </Link>
            
            <Button variant="ghost" size="sm" className="rounded-full">
              <Globe className="w-4 h-4" />
            </Button>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="rounded-full border border-border p-2">
                  <div className="flex items-center space-x-2">
                    <Menu className="w-4 h-4" />
                    <div className="w-6 h-6 bg-muted rounded-full flex items-center justify-center">
                      <User className="w-3 h-3" />
                    </div>
                  </div>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-48">
                <DropdownMenuItem>
                  <Link to="/signup" className="w-full">Sign up</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/login" className="w-full">Log in</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/host" className="w-full">Host your home</Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Link to="/help" className="w-full">Help</Link>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>

      {/* Mobile Search Bar */}
      <div className="md:hidden border-t border-border/40 p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <Input
            placeholder="Where to?"
            className="pl-10 rounded-full bg-background border-border"
          />
        </div>
      </div>
    </header>
  );
};