import { Link } from 'react-router-dom';
import { Globe, Facebook, Twitter, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  const footerSections = [
    {
      title: 'Support',
      links: [
        { label: 'Help Center', href: '/help' },
        { label: 'Safety information', href: '/safety' },
        { label: 'Cancellation options', href: '/cancellation' },
        { label: 'Our COVID-19 Response', href: '/covid' },
        { label: 'Supporting people with disabilities', href: '/accessibility' },
        { label: 'Report a neighborhood concern', href: '/report' }
      ]
    },
    {
      title: 'Community',
      links: [
        { label: 'Airbnb.org: disaster relief housing', href: '/disaster-relief' },
        { label: 'Support Afghan refugees', href: '/refugees' },
        { label: 'Combating discrimination', href: '/discrimination' },
        { label: 'Diversity & belonging', href: '/diversity' },
        { label: 'Airbnb Associates', href: '/associates' }
      ]
    },
    {
      title: 'Hosting',
      links: [
        { label: 'Try hosting', href: '/host' },
        { label: 'AirCover for Hosts', href: '/aircover' },
        { label: 'Explore hosting resources', href: '/hosting-resources' },
        { label: 'Visit our community forum', href: '/forum' },
        { label: 'How to host responsibly', href: '/responsible-hosting' }
      ]
    },
    {
      title: 'About',
      links: [
        { label: 'Newsroom', href: '/newsroom' },
        { label: 'Learn about new features', href: '/features' },
        { label: 'Letter from our founders', href: '/founders' },
        { label: 'Careers', href: '/careers' },
        { label: 'Investors', href: '/investors' },
        { label: 'Airbnb Luxe', href: '/luxe' }
      ]
    }
  ];

  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="text-sm font-semibold text-foreground">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        to={link.href} 
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-border/40 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Left side */}
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>© 2024 Airbnb, Inc.</span>
              <Link to="/privacy" className="hover:text-foreground transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="hover:text-foreground transition-colors">
                Terms
              </Link>
              <Link to="/sitemap" className="hover:text-foreground transition-colors">
                Sitemap
              </Link>
            </div>

            {/* Right side */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-foreground">
                <Globe className="w-4 h-4 mr-2" />
                English (US)
              </Button>

              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm">
                  <Facebook className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Twitter className="w-4 h-4" />
                </Button>
                <Button variant="ghost" size="sm">
                  <Instagram className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};