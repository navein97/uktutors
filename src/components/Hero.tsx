import { Button } from "@/components/ui/button";
import buildingImage from "@/assets/building.png";
import logoImage from "@/assets/logo.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96595551072", "_blank");
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${buildingImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/85 to-background/95" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass-strong">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <img src={logoImage} alt="The Tutors Logo" className="h-12 w-auto" />
            <div className="flex gap-8 items-center">
              <button
                onClick={() => scrollToSection("home")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-foreground hover:text-primary transition-colors font-medium"
              >
                Contact
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div id="home" className="relative z-10 container mx-auto px-6 text-center animate-fade-in">
        <div className="glass-strong rounded-3xl p-12 md:p-16 max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            The Tutors
          </h1>
          <p className="text-2xl md:text-3xl text-muted-foreground mb-8 font-light">
            UK Education Consultants
          </p>
          <p className="text-lg md:text-xl text-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed">
            Expert guidance for UK university applications, school admissions, and visa support in Kuwait
          </p>
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-lg px-8 py-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Contact via WhatsApp
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <button
          onClick={() => scrollToSection("services")}
          className="text-muted-foreground hover:text-primary transition-colors"
          aria-label="Scroll to services"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default Hero;
