import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Instagram, Smartphone } from "lucide-react";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Amir",
      role: "Lead Explorer & Content Creator",
      description: "Experte für Striking-Techniken und Video-Produktion. Bringt 4 Jahre MMA-Erfahrung mit.",
      image: "https://media.discordapp.net/attachments/1368074431196303490/1396260557568610356/image.png?ex=687d707a&is=687c1efa&hm=6f6316e8a9c031e53e0be6690de6147f055ff3b7011d853d1f832d4b64f684b1&=&format=webp&quality=lossless",
      instagram: "https://www.instagram.com/amir.pali65/",
    },
    {
      name: "Amir",
      role: "Lead Explorer & Content Creator",
      description: "Experte für Striking-Techniken und Video-Produktion. Bringt 4 Jahre MMA-Erfahrung mit.",
      image: "https://media.discordapp.net/attachments/1368074431196303490/1396260557568610356/image.png?ex=687d707a&is=687c1efa&hm=6f6316e8a9c031e53e0be6690de6147f055ff3b7011d853d1f832d4b64f684b1&=&format=webp&quality=lossless",
      instagram: "https://www.instagram.com/amir.pali65/"
    },
    {
      name: "Amir",
      role: "Lead Explorer & Content Creator",
      description: "Experte für Striking-Techniken und Video-Produktion. Bringt 4 Jahre MMA-Erfahrung mit.",
      image: "https://media.discordapp.net/attachments/1368074431196303490/1396260557568610356/image.png?ex=687d707a&is=687c1efa&hm=6f6316e8a9c031e53e0be6690de6147f055ff3b7011d853d1f832d4b64f684b1&=&format=webp&quality=lossless",
      instagram: "https://www.instagram.com/amir.pali65/",
    },
    {
      name: "Amir",
      role: "Lead Explorer & Content Creator",
      description: "Experte für Striking-Techniken und Video-Produktion. Bringt 4 Jahre MMA-Erfahrung mit.",
      image: "https://media.discordapp.net/attachments/1368074431196303490/1396260557568610356/image.png?ex=687d707a&is=687c1efa&hm=6f6316e8a9c031e53e0be6690de6147f055ff3b7011d853d1f832d4b64f684b1&=&format=webp&quality=lossless",
      instagram: "https://www.instagram.com/amir.pali65/",
    }
  ];

  return (
    <section id="about" className="py-20 bg-mma-gray-dark">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mma-white mb-6">
            Das <span className="text-mma-red">Team</span>
          </h2>
          <p className="text-xl text-mma-gray-light max-w-3xl mx-auto">
            Vier leidenschaftliche Kämpfer mit unterschiedlichen Stärken, 
            vereint durch die Liebe zum MMA und den Wunsch, die besten Gyms zu finden.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card 
              key={member.name}
              className="bg-mma-gray border-mma-gray-light hover:border-mma-red transition-all duration-300 hover:shadow-red-glow animate-fade-in group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="relative mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-mma-red group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                
                <h3 className="text-2xl font-bold text-mma-white mb-2">{member.name}</h3>
                <p className="text-mma-red font-semibold mb-4">{member.role}</p>
                <p className="text-mma-gray-light mb-6 leading-relaxed">{member.description}</p>
                
                <div className="flex justify-center space-x-4">
                  <Button variant="outline" size="sm" className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white p-2">
                    <Instagram size={20} />
                  </Button>
                  <Button variant="outline" size="sm" className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white p-2">
                    <Smartphone size={20} />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;