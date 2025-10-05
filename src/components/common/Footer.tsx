import {
  Calendar,
  Facebook,
  Github,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-black text-gray-300", className)}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid sm:grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-6 w-6 text-[#4CD964]" />
              <span className="text-xl font-bold text-white">Timora</span>
            </div>
            <p className="text-sm">
              Your ultimate student companion for managing assignments,
              deadlines, and academic success.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Calendar
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Settings
                </a>
              </li>
            </ul>
          </div>

          {/* Help & Support */}
          <div>
            <h3 className="text-white font-semibold mb-4">Help & Support</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[#4CD964] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">Contact Info</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-[#4CD964]" />
                <span>123 Education St, Learning City</span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[#4CD964]" />
                <span>+1 234 567 890</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[#4CD964]" />
                <span>support@timora.com</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Timora. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                Terms of Service
              </a>
              <a href="#" className="hover:text-[#4CD964] transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
