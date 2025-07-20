import { Button } from "@/components/ui/button";
import { Play, Users, Star } from "lucide-react";
import heroImage from "@/assets/Layer.png";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-mma-black/70 via-mma-black/50 to-mma-black/80"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold text-mma-white mb-6 leading-tight">
            Die <span className="text-mma-red animate-pulse-red">Fantastischen Vier</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-mma-gray-light mb-8 leading-relaxed">
            Wir besuchen und bewerten MMA-Gyms in ganz Deutschland und teilen unsere 
            Erlebnisse auf TikTok! Folge uns bei unserer Reise durch die besten 
            Kampfsport-Studios.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button size="lg" className="bg-mma-red hover:bg-mma-red-dark text-mma-white px-8 py-4 text-lg shadow-red-glow">
              <Play className="mr-2" size={20} />
              Neueste Reviews
            </Button>
            
            <Button 
              variant="outline" 
              size="lg" 
              className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white px-8 py-4 text-lg"
            >
              <Users className="mr-2" size={20} />
              Das Team
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center animate-slide-up">
              <div className="text-3xl font-bold text-mma-red mb-2">25+</div>
              <div className="text-mma-gray-light">Besuchte Gyms</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-mma-red mb-2">100K+</div>
              <div className="text-mma-gray-light">TikTok Views</div>
            </div>
            <div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
              <div className="text-3xl font-bold text-mma-red mb-2">4.8</div>
              <div className="text-mma-gray-light flex items-center justify-center">
                <Star className="text-mma-red mr-1" size={16} fill="currentColor" />
                Durchschnitt
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-mma-red rounded-full flex justify-center">
          <div className="w-1 h-3 bg-mma-red rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;