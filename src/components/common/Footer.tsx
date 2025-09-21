import { cn } from "@/lib/utils";

interface FooterProps {
  className?: string;
}

function Footer({ className }: FooterProps) {
  return (
    <footer className={cn("bg-gray-200 text-center p-4", className)}>
      <p>&copy; 2024 My Application</p>
    </footer>
  );
}

export default Footer;
