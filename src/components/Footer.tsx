import { Instagram, Smartphone, Mail, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
const Footer = () => {
  return (
    <footer className="bg-mma-gray-dark border-t border-mma-gray py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-2xl font-bold text-mma-white mb-4">
              Die <span className="text-mma-red">Fantastischen Vier</span>
            </div>
            <p className="text-mma-gray-light leading-relaxed">
              Deutschlands führendes Team für ehrliche MMA-Gym Reviews. 
              Wir testen, bewerten und teilen unsere Erfahrungen auf TikTok.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-mma-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-mma-gray-light hover:text-mma-red transition-colors">Home</a></li>
              <li><a href="#about" className="text-mma-gray-light hover:text-mma-red transition-colors">Über Uns</a></li>
              <li><a href="#reviews" className="text-mma-gray-light hover:text-mma-red transition-colors">Gym Reviews</a></li>
              <li><a href="#tiktok" className="text-mma-gray-light hover:text-mma-red transition-colors">TikTok</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-mma-white font-semibold mb-4">Folge uns</h3>
            <div className="space-y-3">
              <Button 
                variant="outline" 
                size="sm" 
                className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white w-full justify-start"
              >
                <Smartphone className="mr-2" size={16} />
                @die_fantastic4
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white w-full justify-start"
              >
                <Instagram className="mr-2" size={16} />
                @die_fantastic4
              </Button>
              <Button 
                variant="outline" 
                size="sm" 
                className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white w-full justify-start"
              >
                <Mail className="mr-2" size={16} />
                mma@diefantastischen4.me
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-mma-gray pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-mma-gray-light text-sm mb-4 md:mb-0">
              © 2024 Die Fantastischen Vier. Alle Rechte vorbehalten.
            </p>
            <p className="text-mma-gray-light text-sm flex items-center">
              Made with <Heart className="text-mma-red mx-1" size={14} fill="currentColor" /> for the MMA Community
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;