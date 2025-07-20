import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Play, Calendar } from "lucide-react";

const GymReviews = () => {
  const reviews = [
    {
      id: 1,
      name: "Spitfire Gym Berlin",
      location: "Berlin, Deutschland",
      rating: 5,
      date: "19. Juli 2025",
      image: "/assets/Layer-DkOBw568.png",
      description: "Modernes Gym mit Top-Equipment und professionellen Trainern. Besonders stark im Striking-Bereich.",
      highlights: ["Modernes Equipment", "Professionelle Trainer", "Saubere Umkleide"],
      tiktokViews: "0K",
      category: "Mixed"
    },
    {
      id: 2,
      name: "Spitfire Gym Berlin",
      location: "Berlin, Deutschland",
      rating: 4.6,
      date: "19. Juli 2025",
      image: "/assets/Layer-DkOBw568.png",
      description: "Traditionsreiches Gym mit starker Community. Perfekt für BJJ und Grappling Training.",
      highlights: ["Starke Community", "Mixed Focus", "Erfahrene Coaches"],
      tiktokViews: "0K",
      category: "Mixed"
    },
    {
      id: 3,
      name: "Spitfire Gym Berlin",
      location: "Berlin, Deutschland",
      rating: 5,
      date: "19. Juli 2025",
      image: "/assets/Layer-DkOBw568.png",
      description: "Premium Gym mit ausgezeichneter Ausstattung. Ideal für Wettkampfvorbereitung.",
      highlights: ["Premium Ausstattung", "Mixed-Focus", "Personal Training"],
      tiktokViews: "0K",
      category: "Mixed"
    },
    {
      id: 4,
      name: "Spitfire Gym Berlin",
      location: "Berlin, Deutschland",
      rating: 4.5,
      date: "19. Juli 2025",
      image: "/assets/Layer-DkOBw568.png",
      description: "Traditionsreiches Gym mit starker Community. Perfekt für Mixed und Grappling Training.",
      highlights: ["Starke Community", "Mixed Focus", "Erfahrene Coaches"],
      tiktokViews: "0K",
      category: "Mixed"
    }
    
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={16}
        className={i < Math.floor(rating) ? "text-mma-red fill-current" : "text-mma-gray-light"}
      />
    ));
  };

  return (
    <section id="reviews" className="py-20 bg-mma-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-mma-white mb-6">
            Gym <span className="text-mma-red">Reviews</span>
          </h2>
          <p className="text-xl text-mma-gray-light max-w-3xl mx-auto">
            Unsere ehrlichen Bewertungen der besten MMA-Gyms. 
            Von Equipment bis Atmosphäre - wir testen alles für euch.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <Card 
              key={review.id}
              className="bg-mma-gray-dark border-mma-gray hover:border-mma-red transition-all duration-300 hover:shadow-elegant animate-fade-in overflow-hidden group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative">
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className="bg-mma-red text-mma-white">{review.category}</Badge>
                </div>
                <div className="absolute bottom-4 left-4">
                  <Button size="sm" className="bg-mma-black/80 hover:bg-mma-red border-mma-red">
                    <Play size={14} className="mr-2" />
                    {review.tiktokViews} Views
                  </Button>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="text-mma-white text-xl">{review.name}</CardTitle>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <MapPin size={16} className="text-mma-red" />
                    <span className="text-mma-gray-light text-sm">{review.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    {renderStars(review.rating)}
                    <span className="text-mma-white ml-2 font-semibold">{review.rating}</span>
                  </div>
                </div>
              </CardHeader>

              <CardContent>
                <p className="text-mma-gray-light mb-4 leading-relaxed">{review.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {review.highlights.map((highlight) => (
                    <Badge 
                      key={highlight}
                      variant="outline"
                      className="border-mma-red text-mma-red"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center text-mma-gray-light text-sm">
                    <Calendar size={14} className="mr-2" />
                    {review.date}
                  </div>
                  <Button variant="outline" size="sm" className="border-mma-red text-mma-red hover:bg-mma-red hover:text-mma-white">
                    Review ansehen
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" className="bg-mma-red hover:bg-mma-red-dark text-mma-white px-8 py-4">
            Alle Reviews ansehen
          </Button>
        </div>
      </div>
    </section>
  );
};

export default GymReviews;
