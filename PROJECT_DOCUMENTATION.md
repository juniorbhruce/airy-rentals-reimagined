# Airbnb Clone Project Documentation

## Project Overview
This is an Airbnb-like property rental platform with real-time functionality powered by Supabase. The application allows users to browse properties, make bookings, leave reviews, and manage their listings.

## Tech Stack
- **Frontend**: React, TypeScript, Vite
- **UI Components**: shadcn/ui, Tailwind CSS
- **Backend & Database**: Supabase (PostgreSQL)
- **State Management**: React Query
- **Routing**: React Router
- **Authentication**: Supabase Auth
- **Theming**: Light/dark mode with persistent preferences

## Database Schema

### Tables
1. **profiles** - User profile information
   - id (UUID, PK)
   - user_id (UUID, references auth.users)
   - username (text)
   - avatar_url (text)
   - bio (text)
   - created_at (timestamp)
   - updated_at (timestamp)

2. **properties** - Property listings
   - id (UUID, PK)
   - owner_id (UUID, references auth.users)
   - title (text)
   - description (text)
   - address (text)
   - city (text)
   - state (text)
   - country (text)
   - price_per_night (numeric)
   - image_urls (text[])
   - amenities (text[])
   - property_type (text)
   - max_guests (integer)
   - bedrooms (integer)
   - beds (integer)
   - baths (integer)
   - latitude (numeric)
   - longitude (numeric)
   - created_at (timestamp)
   - updated_at (timestamp)

3. **bookings** - Property bookings
   - id (UUID, PK)
   - property_id (UUID, references properties)
   - guest_id (UUID, references auth.users)
   - start_date (date)
   - end_date (date)
   - total_price (numeric)
   - status (text: 'pending', 'confirmed', 'canceled', 'completed')
   - created_at (timestamp)
   - updated_at (timestamp)

4. **reviews** - Property reviews
   - id (UUID, PK)
   - property_id (UUID, references properties)
   - reviewer_id (UUID, references auth.users)
   - booking_id (UUID, references bookings)
   - rating (integer, 1-5)
   - comment (text)
   - created_at (timestamp)
   - updated_at (timestamp)

5. **wishlists** - User wishlist items
   - id (UUID, PK)
   - user_id (UUID, references auth.users)
   - property_id (UUID, references properties)
   - created_at (timestamp)

## Real-time Features
- Real-time property updates using Supabase Realtime
- Instant booking confirmation
- Live chat (to be implemented)
- Real-time notifications (to be implemented)
- Custom useRealtime hook for subscribing to database changes

## Authentication
- Email/password login using Supabase Auth
- Social login (Google, Facebook)
- Forgot password functionality
- AuthContext provider for managing auth state across the app
- Protected routes for authenticated users

## Current Application Pages
1. **Home (/)** - Landing page with featured properties
2. **Property Detail (/property/:id)** - Detailed view of a property
3. **Search Results (/search)** - Property search results
4. **Login (/login)** - User login page
5. **Signup (/signup)** - New user registration
6. **Host (/host)** - Page for property owners to manage listings
7. **Not Found (*)** - 404 page

## Key Components
- **Header** - Navigation and user menu
- **Hero** - Hero section on landing page
- **PropertyGrid** - Grid display of properties
- **PropertyCard** - Card component for individual properties
- **CategoryFilter** - Filter properties by category
- **Footer** - Site footer with links

## Upcoming Features To Implement
1. **User Profile Page** - Allow users to view and edit their profile
2. **Booking Management** - View and manage bookings
3. **Messaging System** - Communication between hosts and guests
4. **Review System** - Leave and view property reviews
5. **Payment Integration** - Process rental payments
6. **Advanced Search/Filters** - More detailed property search
7. **Map Integration** - View properties on a map
8. **Host Dashboard** - Detailed analytics for property owners
9. **Notifications** - Real-time system notifications

## Database RLS (Row Level Security) Policies
- Appropriate security policies are in place to ensure users can only access their own data
- Properties are publicly viewable but can only be modified by their owners
- Bookings can only be viewed and managed by the property owner and the guest
- Reviews are public but can only be created by users who have completed a booking

## Authentication Flow
1. User signs up/logs in via email or social provider
2. Authentication handled by Supabase Auth
3. On successful auth, profile record is created or updated
4. User session managed via Supabase client

## File Structure
- `/src/components/` - Reusable UI components
- `/src/components/ui/` - shadcn UI components
- `/src/pages/` - Page components for routes
- `/src/hooks/` - Custom React hooks
  - `useRealtime.ts` - Hook for Supabase Realtime subscriptions
  - `use-mobile.tsx` - Hook for responsive mobile detection
- `/src/contexts/` - React context providers
  - `AuthContext.tsx` - Authentication state and methods
  - `ThemeContext.tsx` - Theme management (light/dark)
- `/src/lib/` - Utility functions
- `/src/integrations/supabase/` - Supabase client and types
- `/public/` - Static assets

## Development Notes
- All new database changes should be done through the Supabase migration tool
- UI components should use the design system tokens from index.css and tailwind.config.ts
- Follow the established pattern for real-time subscriptions
- Maintain RLS policies for security when modifying database schema

## Getting Started for Developers
1. Clone the repository
2. Install dependencies with `npm install`
3. Run the development server with `npm run dev`
4. Access the application at `http://localhost:5173/`

## Next Priority Tasks
1. ✅ Implement the authentication logic with Supabase - COMPLETED
2. ✅ Add light/dark theme functionality - COMPLETED
3. ✅ Add real-time functionality with Supabase Realtime - COMPLETED
4. Connect property listings to the database
5. Build the booking system
6. Develop the review functionality
7. Create user profiles and dashboards