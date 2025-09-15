import React from "react";
import {
  Calendar,
  RefreshCw,
  Bell,
  LineChart,
  Users,
  Smartphone,
  GraduationCap,
  CheckCircle,
  Play,
  ArrowRight,
  Twitter,
  Instagram,
  Linkedin,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navbar */}
      <header className="sticky top-0 z-40 w-full border-b bg-background/70 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
          <a href="#home" className="flex items-center gap-2 font-semibold">
            <Calendar className="h-5 w-5" />
            <span>Timora</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm md:flex">
            <a
              href="#features"
              className="text-muted-foreground hover:text-foreground"
            >
              Features
            </a>
            <a
              href="#testimonials"
              className="text-muted-foreground hover:text-foreground"
            >
              Testimonials
            </a>
            <a
              href="#contact"
              className="text-muted-foreground hover:text-foreground"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <Button
              asChild={true}
              size="sm"
              className="hidden sm:inline-flex hover:cursor-pointer"
            >
              <Link to="/login">Get Started</Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section id="home" className="border-b">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 md:grid-cols-2 md:gap-12 md:px-6 md:py-24">
          <div>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl">
              Plan smarter with <span className="text-primary">Timora</span>
            </h1>
            <p className="mt-4 max-w-xl text-muted-foreground">
              The smart student-friendly calendar that integrates with Google
              Calendar to help you organize your academic life effortlessly.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button asChild={true} size="lg" className="hover:cursor-pointer">
                <Link to="/login">
                  {" "}
                  <ArrowRight className="ml-1 h-4 w-4" />
                  Start Free Trial
                </Link>
              </Button>
              <Button
                asChild={true}
                variant="outline"
                size="lg"
                className="hover:cursor-pointer"
              >
                <Link to="/demo">
                  <Play className="mr-2 h-4 w-4" /> Watch Demo
                </Link>
              </Button>
            </div>
            <ul className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-muted-foreground">
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" /> Free 14-day
                trial
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-primary" /> No credit card
                required
              </li>
            </ul>
          </div>

          {/* Schedule card 
           ## TODO : Make an Animation for the schedule card
          */}
          <div className="mx-auto w-full max-w-md">
            <div className="rounded-xl border bg-card p-5 shadow-sm">
              <div className="mb-4 flex items-center justify-between">
                <p className="font-medium">Today's Schedule</p>
                <Calendar
                  className="h-4 w-4 text-muted-foreground"
                  aria-hidden
                />
              </div>
              <div className="space-y-3">
                <ScheduleItem
                  title="Mathematics Lecture"
                  time="9:00 AM - 10:30 AM"
                />
                <ScheduleItem title="Study Group" time="2:00 PM - 4:00 PM" />
                <ScheduleItem title="Assignment Due" time="11:59 PM" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b bg-muted/30">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Everything you need to stay organized
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Powerful features designed specifically for students to manage
              their academic schedule and deadlines.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<RefreshCw className="h-5 w-5" />}
              title="Google Calendar Sync"
              description="Seamlessly integrate with your existing Google Calendar for unified schedule management."
            />
            <FeatureCard
              icon={<Bell className="h-5 w-5" />}
              title="Smart Reminders"
              description="Never miss a deadline with intelligent notifications and assignment tracking."
            />
            <FeatureCard
              icon={<LineChart className="h-5 w-5" />}
              title="Study Analytics"
              description="Track your productivity and study patterns to optimize your learning schedule."
            />

            <FeatureCard
              icon={<Users className="h-5 w-5" />}
              title="Study Groups"
              description="Coordinate with classmates and schedule group study sessions effortlessly."
            />
            <FeatureCard
              icon={<Smartphone className="h-5 w-5" />}
              title="Mobile Ready"
              description="Access your schedule anywhere with our responsive web app and mobile notifications."
            />
            <FeatureCard
              icon={<GraduationCap className="h-5 w-5" />}
              title="Academic Focus"
              description="Purpose-built for students with semester planning, course tracking, and GPA goals."
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-16 md:px-6 md:py-20">
          <div className="text-center">
            <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
              Loved by students everywhere
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
              Join thousands of students who've transformed their academic
              planning.
            </p>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Chen"
              role="Computer Science, MIT"
              quote="Timora completely changed how I manage my coursework. The Google Calendar integration is seamless!"
            />
            <TestimonialCard
              name="Marcus Johnson"
              role="Business, Stanford"
              quote="Finally, a calendar app that understands student life. The deadline tracking is a game-changer."
            />
            <TestimonialCard
              name="Emma Rodriguez"
              role="Pre-Med, Harvard"
              quote="The study analytics help me stay on track with my goals. I can't imagine college without Timora now."
            />
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-slate-900 py-16 text-white md:py-24">
        <div className="mx-auto max-w-5xl px-4 text-center md:px-6">
          <h2 className="text-balance text-3xl font-semibold sm:text-4xl">
            Ready to transform your academic planning?
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-white/70">
            Join thousands of students who've already improved their
            productivity with Timora.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Button
              asChild={true}
              size="lg"
              className="bg-white text-slate-900 hover:bg-white/90 hover:cursor-pointer"
            >
              <Link to="/login"> Start Free Trial</Link>
            </Button>
          </div>
          <p className="mt-4 text-sm text-white/70">
            14-day free trial • No credit card required • Cancel anytime
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-card">
        <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-semibold">
                <Calendar className="h-5 w-5" /> <span>Timora</span>
              </div>
              <p className="mt-3 max-w-xs text-sm text-muted-foreground">
                Smart calendar planning for students.
              </p>
            </div>

            <div>
              <p className="text-sm font-semibold">Product</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#features" className="hover:text-foreground">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Integrations
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Company</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="text-sm font-semibold">Support</p>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="#" className="hover:text-foreground">
                    Help Center
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Contact
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-foreground">
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex items-center justify-between border-t pt-6">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Timora. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-muted-foreground">
              <a
                href="#"
                aria-label="Twitter"
                className="hover:text-foreground"
              >
                <Twitter className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="hover:text-foreground"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function ScheduleItem({ title, time }: { title: string; time: string }) {
  return (
    <div className="flex items-center justify-between rounded-lg border bg-muted/30 p-3">
      <div className="flex items-center gap-3">
        <span className="h-2.5 w-2.5 rounded-full bg-foreground/70" />
        <div>
          <p className="text-sm font-medium leading-none">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{time}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="h-8 px-2 text-xs">
        Details
      </Button>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary">
          {icon}
        </div>
        <p className="font-medium">{title}</p>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">{description}</p>
    </div>
  );
}

function TestimonialCard({
  name,
  role,
  quote,
}: {
  name: string;
  role: string;
  quote: string;
}) {
  return (
    <div className="rounded-xl border bg-card p-5 shadow-sm">
      <div className="flex items-center gap-3">
        <div className="grid h-10 w-10 place-items-center rounded-full bg-muted text-muted-foreground">
          {/* Simple avatar placeholder */}
          <span className="text-sm">🙂</span>
        </div>
        <div>
          <p className="text-sm font-medium leading-none">{name}</p>
          <p className="text-xs text-muted-foreground">{role}</p>
        </div>
      </div>
      <p className="mt-3 text-sm text-muted-foreground">“{quote}”</p>
    </div>
  );
}

export default Home;
