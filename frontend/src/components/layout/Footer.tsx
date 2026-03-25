import { Link } from "react-router-dom";
import logo from "@/assets/logo.png";
import { Mail, Phone, MapPin, Facebook, Youtube, Instagram, Linkedin } from "lucide-react";

const footerLinks = {
  phases: [
    { name: "Saṅkalpa", href: "/before-jnv" },
    { name: "Pravṛtti", href: "/during-jnv" },
    { name: "Utkarsh", href: "/after-jnv" },
  ],
  resources: [
    { name: "Events", href: "/events" },
    { name: "Study Materials", href: "/before-jnv#materials" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Volunteer", href: "/volunteer" },
  ],
};

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "https://www.facebook.com/share/1ESRF1TJVH/" },
  { name: "YouTube", icon: Youtube, href: "https://www.youtube.com/channel/UCU4CxcTKGPf8HLt6o32jHsw" },
  { name: "Instagram", icon: Instagram, href: "https://www.instagram.com/velevateu_jnv_official?igsh=MW44MnE2YzFtdWx1Zw==" },
  { name: "LinkedIn", icon: Linkedin, href: "https://www.linkedin.com/in/velevateu-navodaya-581b563b6" },
];

export function Footer() {
  return (
    <footer className="bg-secondary text-gray-300 border-t border-accent/40">
      
      <div className="container py-12 md:py-16">

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                alt="Navodaya Elevate Logo"
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="text-sm text-gray-400">
              Empowering Navodaya students at every stage of their journey through
              volunteer-driven support and community.
            </p>

            {/* Social Icons */}
            <div className="flex gap-3 pt-2">
              {socialLinks.map((social) => {
                const isDisabled = social.href === "#";

                return (
                  <a
                    key={social.name}
                    href={isDisabled ? undefined : social.href}
                    target={isDisabled ? undefined : "_blank"}
                    rel={isDisabled ? undefined : "noopener noreferrer"}
                    aria-label={`Visit our ${social.name}`}
                    className={`flex h-9 w-9 items-center justify-center rounded-full transition-all duration-300 
                    ${
                      isDisabled
                        ? "bg-white/10 text-white/30 cursor-not-allowed"
                        : "bg-white/10 text-white hover:bg-accent hover:text-primary hover:scale-110"
                    }`}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Phases */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Phases</h3>
            <ul className="space-y-2">
              {footerLinks.phases.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-accent"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-white">Contact</h3>

            <ul className="space-y-3">

              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>velevateunavodaya@gmail.com</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-400">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>+91 8892662603</span>
              </li>

              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                <span>Bengaluru, Karnataka, India</span>
              </li>

            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">

          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Navodaya Elevate. All rights reserved.
          </p>

          <div className="flex gap-4">
            <Link
              to="/privacy"
              className="text-sm text-gray-400 hover:text-accent"
            >
              Privacy Policy
            </Link>

            <Link
              to="/terms"
              className="text-sm text-gray-400 hover:text-accent"
            >
              Terms of Service
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
