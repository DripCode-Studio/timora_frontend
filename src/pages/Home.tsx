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
  BookOpen,
  Clock,
  Target,
  Zap,
  Star,
  Shield,
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
      <section id="home" className="relative overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 md:grid-cols-2 md:gap-12 md:px-6 md:py-32">
          <div className="text-center md:text-left">
            <div className="inline-flex items-center rounded-full border bg-background/80 px-3 py-1 text-xs font-medium backdrop-blur-sm">
              <Zap className="mr-1 h-3 w-3 text-primary" />
              New: AI-powered study scheduling
            </div>
            
            <h1 className="mt-6 text-balance text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Your Academic
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                {" "}Success
              </span>{" "}
              Starts Here
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Timora transforms how students manage their academic life. Seamlessly integrate 
              schedules, track assignments, and boost productivity with our intelligent calendar system.
            </p>
            
            <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center md:justify-start">
              <Button asChild size="lg" className="group h-12 px-8 text-base hover:cursor-pointer">
                <Link to="/login">
                  Get Started Free
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-12 px-8 text-base hover:cursor-pointer"
              >
                <Link to="/events">
                  <Play className="mr-2 h-4 w-4" />
                  View Demo
                </Link>
              </Button>
            </div>

            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-muted-foreground md:justify-start">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-500" />
                <span>Free forever</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-500" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-orange-500" />
                <span>Setup in 2 mins</span>
              </div>
            </div>
          </div>

          {/* Enhanced Dashboard Preview */}
          <div className="relative mx-auto w-full max-w-lg">
            {/* Floating cards effect */}
            <div className="absolute -top-4 -left-4 h-20 w-20 rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 opacity-20 blur-xl" />
            <div className="absolute -bottom-4 -right-4 h-24 w-24 rounded-2xl bg-gradient-to-r from-purple-500 to-pink-500 opacity-20 blur-xl" />
            
            <div className="relative space-y-4">
              {/* Main schedule card */}
              <div className="rounded-2xl border bg-card/80 p-6 shadow-2xl backdrop-blur-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Today's Schedule</h3>
                    <p className="text-sm text-muted-foreground">Friday, Oct 3</p>
                  </div>
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Calendar className="h-5 w-5 text-primary" />
                  </div>
                </div>
                
                <div className="space-y-4">
                  <ScheduleItem
                    title="Advanced Mathematics"
                    time="9:00 AM - 10:30 AM"
                    status="upcoming"
                  />
                  <ScheduleItem
                    title="Study Group - Physics"
                    time="2:00 PM - 4:00 PM"
                    status="scheduled"
                  />
                  <ScheduleItem
                    title="Assignment: CS Algorithm"
                    time="Due 11:59 PM"
                    status="urgent"
                  />
                </div>
              </div>

              {/* Stats cards */}
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-xl border bg-card/60 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <Target className="h-4 w-4 text-green-500" />
                    <span className="text-sm font-medium">Goals</span>
                  </div>
                  <p className="mt-1 text-2xl font-bold">8/10</p>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
                
                <div className="rounded-xl border bg-card/60 p-4 backdrop-blur-sm">
                  <div className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4 text-blue-500" />
                    <span className="text-sm font-medium">Study Hours</span>
                  </div>
                  <p className="mt-1 text-2xl font-bold">24h</p>
                  <p className="text-xs text-muted-foreground">This week</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-b bg-gradient-to-b from-muted/30 to-background">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium">
              <Star className="mr-2 h-4 w-4 text-primary" />
              Why Choose Timora
            </div>
            
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Everything you need for
              <span className="text-primary"> academic success</span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              Powerful, student-focused features that transform how you manage your academic life. 
              From smart scheduling to performance tracking, we've got you covered.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <FeatureCard
              icon={<RefreshCw className="h-6 w-6" />}
              title="Google Calendar Sync"
              description="Seamlessly integrate with your existing Google Calendar. Two-way sync ensures you're always up to date across all platforms."
              highlight="Most Popular"
            />
            <FeatureCard
              icon={<Bell className="h-6 w-6" />}
              title="Smart Reminders"
              description="AI-powered notifications that learn your habits. Get reminded at the perfect time, every time."
            />
            <FeatureCard
              icon={<LineChart className="h-6 w-6" />}
              title="Study Analytics"
              description="Detailed insights into your study patterns, productivity trends, and goal achievement."
            />
            <FeatureCard
              icon={<Users className="h-6 w-6" />}
              title="Collaborative Planning"
              description="Coordinate with classmates, share schedules, and plan group study sessions effortlessly."
            />
            <FeatureCard
              icon={<Smartphone className="h-6 w-6" />}
              title="Mobile Optimized"
              description="Access your schedule anywhere with our responsive design and progressive web app features."
            />
            <FeatureCard
              icon={<GraduationCap className="h-6 w-6" />}
              title="Academic Focus"
              description="Purpose-built for students with semester planning, GPA tracking, and course management."
              highlight="Student Favorite"
            />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="border-b bg-muted/20">
        <div className="mx-auto max-w-7xl px-4 py-20 md:px-6 md:py-24">
          <div className="text-center">
            <div className="inline-flex items-center rounded-full border bg-background px-4 py-2 text-sm font-medium">
              <Users className="mr-2 h-4 w-4 text-primary" />
              25,000+ Happy Students
            </div>
            
            <h2 className="mt-6 text-4xl font-bold tracking-tight sm:text-5xl">
              Loved by students at
              <span className="text-primary"> top universities</span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
              See how Timora is helping students across the globe achieve their academic goals 
              and maintain better work-life balance.
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <TestimonialCard
              name="Sarah Chen"
              role="Computer Science • MIT"
              quote="Timora completely transformed my productivity. The Google Calendar sync and smart reminders mean I never miss a deadline. My GPA improved by 0.4 points this semester!"
            />
            <TestimonialCard
              name="Marcus Johnson"
              role="Business Administration • Stanford"
              quote="As someone juggling internships and coursework, Timora's analytics showed me where I was wasting time. The study group coordination feature is incredible."
            />
            <TestimonialCard
              name="Emma Rodriguez"
              role="Pre-Med • Harvard"
              quote="The academic focus features are exactly what pre-med students need. Semester planning and goal tracking keep me motivated and on track for med school."
            />
          </div>
          
          {/* University logos */}
          <div className="mt-16 text-center">
            <p className="text-sm font-medium text-muted-foreground mb-8">Trusted by students at</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-2xl font-bold">MIT</div>
              <div className="text-2xl font-bold">Stanford</div>
              <div className="text-2xl font-bold">Harvard</div>
              <div className="text-2xl font-bold">Berkeley</div>
              <div className="text-2xl font-bold">NYU</div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative overflow-hidden bg-gradient-to-r from-slate-900 via-purple-900 to-slate-900 py-20 text-white md:py-32">
        {/* Background effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-purple-500/20 blur-3xl" />
          <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        </div>
        
        <div className="relative mx-auto max-w-6xl px-4 text-center md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-5xl font-bold tracking-tight sm:text-6xl">
              Ready to ace your
              <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                {" "}academic life?
              </span>
            </h2>
            
            <p className="mx-auto mt-6 text-xl leading-8 text-white/80">
              Join over 25,000 students who've transformed their productivity and academic success with Timora. 
              Start your journey to better grades and less stress today.
            </p>
            
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button
                asChild
                size="lg"
                className="group h-14 px-10 text-lg font-semibold bg-white text-slate-900 hover:bg-gray-100 hover:cursor-pointer"
              >
                <Link to="/login">
                  Get Started Free
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="lg"
                className="h-14 px-10 text-lg border-white/20 bg-white/10 text-white hover:bg-white/20 hover:cursor-pointer backdrop-blur-sm"
              >
                <Link to="/events">
                  <Calendar className="mr-2 h-5 w-5" />
                  Try Demo
                </Link>
              </Button>
            </div>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Always free to start</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="h-4 w-4 text-blue-400" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Users className="h-4 w-4 text-purple-400" />
                <span>25,000+ active users</span>
              </div>
            </div>
          </div>
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

function ScheduleItem({ title, time, status }: { title: string; time: string; status?: string }) {
  const getStatusColor = (status?: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-500';
      case 'scheduled': return 'bg-green-500';
      case 'urgent': return 'bg-red-500';
      default: return 'bg-foreground/70';
    }
  };

  const getStatusBg = (status?: string) => {
    switch (status) {
      case 'upcoming': return 'bg-blue-50 border-blue-200';
      case 'scheduled': return 'bg-green-50 border-green-200';
      case 'urgent': return 'bg-red-50 border-red-200';
      default: return 'bg-muted/30';
    }
  };

  return (
    <div className={`flex items-center justify-between rounded-xl border p-4 transition-all hover:shadow-sm ${getStatusBg(status)}`}>
      <div className="flex items-center gap-3">
        <span className={`h-3 w-3 rounded-full ${getStatusColor(status)}`} />
        <div>
          <p className="text-sm font-semibold leading-none">{title}</p>
          <p className="mt-1 text-xs text-muted-foreground">{time}</p>
        </div>
      </div>
      <Button variant="ghost" size="sm" className="h-8 px-3 text-xs font-medium">
        View
      </Button>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
  highlight,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  highlight?: string;
}) {
  return (
    <div className="group relative rounded-2xl border bg-card p-6 shadow-sm transition-all hover:shadow-lg hover:-translate-y-1">
      {highlight && (
        <div className="absolute -top-3 left-4 rounded-full bg-gradient-to-r from-primary to-secondary px-3 py-1 text-xs font-semibold text-white">
          {highlight}
        </div>
      )}
      
      <div className="mb-4">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-primary/10 to-secondary/10 text-primary transition-colors group-hover:from-primary/20 group-hover:to-secondary/20">
          {icon}
        </div>
      </div>
      
      <h3 className="text-lg font-semibold">{title}</h3>
      <p className="mt-2 text-muted-foreground leading-relaxed">{description}</p>
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
