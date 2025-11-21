import { Button } from "@/components/ui/button";
import { MapPin, Phone, Clock } from "lucide-react";
import officeDoorImage from "@/assets/office-door.png";

const Contact = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/96595551072", "_blank");
  };

  const openingHours = [
    { day: "Friday", hours: "Closed" },
    { day: "Saturday", hours: "4:00 PM – 9:00 PM" },
    { day: "Sunday – Thursday", hours: "9:00 AM – 9:00 PM" },
  ];

  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Get In Touch
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to start your UK education journey? Contact us via WhatsApp
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Contact Information */}
          <div className="glass rounded-3xl p-8 space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">WhatsApp / Phone</h3>
                <a
                  href="tel:+96595551072"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  +965 9555 1072
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-2 text-foreground">Address</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Oula Towers<br />
                  Omar Ben Al Khattab St, 7th Floor<br />
                  Kuwait City 15000<br />
                  Kuwait
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-lg mb-3 text-foreground">Opening Hours</h3>
                <div className="space-y-2">
                  {openingHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="text-foreground font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              className="w-full bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary rounded-2xl py-6 text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
            >
              Message Us on WhatsApp
            </Button>
          </div>

          {/* Office Image */}
          <div className="glass rounded-3xl p-2 overflow-hidden">
            <img
              src={officeDoorImage}
              alt="The Tutors Office Door - Oula Towers"
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
