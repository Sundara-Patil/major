import { useState } from "react";
import logo from "@/assets/logo.png";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

const phases = [
  { name: "Saṅkalpa", href: "/before-jnv", description: "For aspiring students" },
  { name: "Pravṛtti", href: "/during-jnv", description: "For current students" },
  { name: "Utkarsh", href: "/after-jnv", description: "For alumni" },
];

const galleryItems = [
  { name: "Saṅkalpa", href: "/gallery/before-jnv", description: "Pre-admission moments" },
  { name: "Pravṛtti", href: "/gallery/during-jnv", description: "Current Memories at JNV" },
];

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Events", href: "/events" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className="bg-secondary text-gray-300 backdrop-blur-md shadow-md border-b border-white/10 sticky top-0 z-50">
      
      <nav className="container mx-auto flex items-center justify-between py-4">

        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src={logo}
            alt="Navodaya Elevate Logo"
            className="h-20 w-auto object-contain"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 h-12">

          {navItems.slice(0, 1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "flex items-center h-10 text-sm font-medium text-white hover:text-accent transition-colors",
                isActive(item.href) ? "text-accent" : ""
              )}
            >
              {item.name}
            </Link>
          ))}

          {/* Phases Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex items-center h-10 gap-1 px-0 text-sm font-medium text-white hover:text-accent hover:bg-transparent",
                  phases.some((p) => isActive(p.href)) ? "text-accent" : ""
                )}
              >
                Phases
                {/* <ChevronDown className="h-4 w-4" /> */}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="center" className="w-48">
              {phases.map((phase) => (
                <DropdownMenuItem key={phase.name} asChild>
                  <Link to={phase.href} className="flex flex-col items-start">
                    <span className="font-medium">{phase.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {phase.description}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {/* Gallery Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className={cn(
                  "flex items-center h-10 gap-1 px-0 text-sm font-medium text-white hover:text-accent hover:bg-transparent",
                  galleryItems.some((g) => isActive(g.href)) ? "text-accent" : ""
                )}
              >
                Gallery
                {/* <ChevronDown className="h-4 w-4" /> */}
              </Button>
            </DropdownMenuTrigger>

            <DropdownMenuContent align="center" className="w-48">
              {galleryItems.map((item) => (
                <DropdownMenuItem key={item.name} asChild>
                  <Link to={item.href} className="flex flex-col items-start">
                    <span className="font-medium">{item.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {item.description}
                    </span>
                  </Link>
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>

          {navItems.slice(1).map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors text-white hover:text-accent",
                isActive(item.href) ? "text-accent" : ""
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex">
          <Button
            asChild
            className="bg-accent text-primary hover:bg-yellow-400 font-semibold"
          >
            <Link to="/volunteer">Join as Volunteer</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </Button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-white/10 bg-primary md:hidden">
          <div className="container py-4 space-y-2">

            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className={cn(
                  "block px-3 py-2 text-sm font-medium text-white hover:text-accent transition-colors",
                  isActive(item.href) ? "text-accent" : ""
                )}
              >
                {item.name}
              </Link>
            ))}

            {/* Phases */}
            <div className="pt-3 border-t border-white/10">
              <p className="px-3 py-1 text-xs font-semibold uppercase text-white/70">
                Phases
              </p>

              {phases.map((phase) => (
                <Link
                  key={phase.name}
                  to={phase.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block px-3 py-2 text-sm font-medium text-white hover:text-accent",
                    isActive(phase.href) ? "text-accent" : ""
                  )}
                >
                  {phase.name}
                </Link>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <Button
                asChild
                className="w-full bg-accent text-primary hover:bg-yellow-400 font-semibold"
              >
                <Link to="/volunteer" onClick={() => setMobileMenuOpen(false)}>
                  Join as Volunteer
                </Link>
              </Button>
            </div>

          </div>
        </div>
      )}
    </header>
  );
}
