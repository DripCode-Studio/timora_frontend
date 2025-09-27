import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  HelpCircle,
  FileText,
  MessageSquare,
  Phone,
  Mail,
  MapPin,
  Shield,
  Cookie,
  Github,
  Twitter,
  Facebook,
  Instagram,
  Info,
  BookOpen,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import SettingItem from "@/components/SettingItems";

function Setting() {
  const navigate = useNavigate();
  const [shouldShowMobile, setShouldShowMobile] = React.useState<
    boolean | undefined
  >(undefined);

  // Enhanced mobile detection
  useEffect(() => {
    const detectMobile = () => {
      // Check multiple factors for mobile detection
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobileUA =
        /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(
          userAgent
        );
      const isTablet = /ipad|android(?!.*mobile)/i.test(userAgent);
      const screenWidth = window.innerWidth;
      const isTouchDevice =
        "ontouchstart" in window || navigator.maxTouchPoints > 0;

      // Consider it mobile if:
      // 1. User agent indicates mobile device
      // 2. Screen width is mobile-sized (including Chrome mobile simulation)
      // 3. Touch device with small screen
      const isMobileDevice =
        isMobileUA ||
        screenWidth < 768 ||
        (isTouchDevice && screenWidth < 1024 && !isTablet);

      return isMobileDevice;
    };

    const checkMobile = () => {
      const detected = detectMobile();
      setShouldShowMobile(detected);

      // Redirect to profile if on desktop (not mobile)
      if (!detected) {
        navigate("/app/profile", { replace: true });
      }
    };

    // Initial check
    checkMobile();

    // Listen for window resize (helpful for Chrome mobile simulation)
    const handleResize = () => {
      checkMobile();
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [navigate]);

  // Show loading while checking mobile status
  if (shouldShowMobile === undefined) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#4CD964]"></div>
      </div>
    );
  }

  // Only render on mobile
  if (!shouldShowMobile) {
    return null;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-md mx-auto space-y-6">
        {/* Header */}
        <div className="text-center py-6">
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Settings</h1>
          <p className="text-gray-600">Manage your account and preferences</p>
        </div>

        {/* Quick Links Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Quick Links</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <SettingItem
              icon={<BookOpen className="h-5 w-5" />}
              title="Calendar"
              description="View your academic calendar"
              onClick={() => navigate("/app")}
            />
            <SettingItem
              icon={<Info className="h-5 w-5" />}
              title="Events"
              description="Manage your events and assignments"
              onClick={() => navigate("/app/events")}
            />
          </CardContent>
        </Card>

        {/* Help & Support Section */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Help & Support</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <SettingItem
              icon={<HelpCircle className="h-5 w-5" />}
              title="FAQs"
              description="Find answers to common questions"
              href="https://timora.com/faq"
              external
            />
            <SettingItem
              icon={<FileText className="h-5 w-5" />}
              title="Documentation"
              description="Learn how to use Timora effectively"
              href="https://docs.timora.com"
              external
            />
            <SettingItem
              icon={<MessageSquare className="h-5 w-5" />}
              title="Support Center"
              description="Get help from our support team"
              href="https://support.timora.com"
              external
            />
            <SettingItem
              icon={<Mail className="h-5 w-5" />}
              title="Contact Us"
              description="Send us a message"
              href="mailto:support@timora.com"
              external
            />
          </CardContent>
        </Card>

        {/* Contact Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Contact Information</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <MapPin className="h-5 w-5 text-[#4CD964]" />
              <div>
                <div className="font-medium">Address</div>
                <div className="text-sm text-gray-600">
                  123 Education St, Learning City
                </div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Phone className="h-5 w-5 text-[#4CD964]" />
              <div>
                <div className="font-medium">Phone</div>
                <div className="text-sm text-gray-600">+1 234 567 890</div>
              </div>
            </div>
            <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
              <Mail className="h-5 w-5 text-[#4CD964]" />
              <div>
                <div className="font-medium">Email</div>
                <div className="text-sm text-gray-600">support@timora.com</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Legal & Privacy */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Legal & Privacy</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <SettingItem
              icon={<Shield className="h-5 w-5" />}
              title="Privacy Policy"
              description="How we protect your data"
              href="https://timora.com/privacy"
              external
            />
            <SettingItem
              icon={<FileText className="h-5 w-5" />}
              title="Terms of Service"
              description="Our terms and conditions"
              href="https://timora.com/terms"
              external
            />
            <SettingItem
              icon={<Cookie className="h-5 w-5" />}
              title="Cookie Policy"
              description="How we use cookies"
              href="https://timora.com/cookies"
              external
            />
          </CardContent>
        </Card>

        {/* Social Media */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Follow Us</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 gap-3">
              <Button
                variant="outline"
                className="flex items-center gap-2 justify-center"
                onClick={() =>
                  window.open("https://twitter.com/timora", "_blank")
                }
              >
                <Twitter className="h-4 w-4" />
                Twitter
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 justify-center"
                onClick={() =>
                  window.open("https://facebook.com/timora", "_blank")
                }
              >
                <Facebook className="h-4 w-4" />
                Facebook
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 justify-center"
                onClick={() =>
                  window.open("https://instagram.com/timora", "_blank")
                }
              >
                <Instagram className="h-4 w-4" />
                Instagram
              </Button>
              <Button
                variant="outline"
                className="flex items-center gap-2 justify-center"
                onClick={() =>
                  window.open("https://github.com/timora", "_blank")
                }
              >
                <Github className="h-4 w-4" />
                GitHub
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* App Information */}
        <Card>
          <CardHeader>
            <CardTitle className="text-lg">About Timora</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center space-y-2">
              <p className="text-sm text-gray-600">
                Your ultimate student companion for managing assignments,
                deadlines, and academic success.
              </p>
              <Separator className="my-4" />
              <p className="text-xs text-gray-500">
                &copy; {new Date().getFullYear()} Timora. All rights reserved.
              </p>
              <p className="text-xs text-gray-500">Version 1.0.0</p>
            </div>
          </CardContent>
        </Card>

        {/* Bottom padding for mobile navigation */}
        <div className="h-20"></div>
      </div>
    </div>
  );
}

export default Setting;
