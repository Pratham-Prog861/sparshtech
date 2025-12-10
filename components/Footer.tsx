import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-secondary/30 border-t border-border pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold bg-clip-text text-black bg-linear-to-r from-primary to-primary/60">
              SparshTech
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Empowering businesses with modern web solutions, mobile apps, and
              intelligent software. We build the future of digital interaction.
            </p>
            <div className="flex space-x-4">
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Mobile Apps
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Custom Software
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  AI & Chatbots
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-foreground">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span>
                  123 Innovation Drive,
                  <br />
                  Tech City, TC 90210
                </span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="h-5 w-5 shrink-0" />
                <span>+91 7383474707</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="h-5 w-5 shrink-0" />
                <span>info@sparshtech.in</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-left">
            © {new Date().getFullYear()} Sparsh Tech. All rights reserved.
            <br />
            We are MSME certified — UDYAM-GJ-24-0168714
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground">
            <Link
              href="/terms-of-services-and-privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-services-and-privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
