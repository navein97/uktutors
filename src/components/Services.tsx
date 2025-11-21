import { Button } from "@/components/ui/button";
import { GraduationCap, School, FileText } from "lucide-react";

const Services = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96595551072", "_blank");
  };

  const services = [
    {
      icon: GraduationCap,
      title: "University Application Guidance",
      description: "Expert support for UK university applications, UCAS preparation, and personal statement crafting.",
    },
    {
      icon: School,
      title: "UK School & Sixth Form Admissions",
      description: "Comprehensive assistance with British school and sixth form applications and entrance exams.",
    },
    {
      icon: FileText,
      title: "Visa & Application Support",
      description: "Complete guidance on student visa applications and all necessary documentation for UK study.",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional education consultancy services tailored to your UK study ambitions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="glass rounded-3xl p-8 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <Button
                  onClick={handleWhatsAppClick}
                  variant="outline"
                  className="w-full rounded-xl border-2 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-300"
                >
                  Contact via WhatsApp
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
