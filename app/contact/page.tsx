import ContactForm from "@/components/ContactForm";
import { Mail, MapPin, Phone } from "lucide-react";

export default function ContactPage() {
  return (
    <main className="pt-32 pb-20 min-h-screen bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? We’d love to hear from you. Let’s discuss
            how we can help your business grow.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="bg-secondary/20 p-8 rounded-xl border border-border">
              <h2 className="text-2xl font-semibold mb-6">
                Contact Information
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-primary mt-1" />
                  <div>
                    <h3 className="font-medium">Our Office</h3>
                    <p className="text-muted-foreground">
                      123 Innovation Drive,
                      <br />
                      Tech City, TC 90210
                    </p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Phone</h3>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="h-6 w-6 text-primary" />
                  <div>
                    <h3 className="font-medium">Email</h3>
                    <p className="text-muted-foreground">
                      hello@sparshtech.com
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-primary text-primary-foreground p-8 rounded-xl">
              <h2 className="text-2xl font-semibold mb-4">Join Our Team</h2>
              <p className="mb-6 opacity-90">
                We are always looking for talented individuals to join our
                growing team. Check out our open positions.
              </p>
              <a
                href="#"
                className="font-medium underline underline-offset-4 hover:opacity-80"
              >
                View Careers &rarr;
              </a>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
            <h2 className="text-2xl font-semibold mb-6">Send us a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </main>
  );
}
