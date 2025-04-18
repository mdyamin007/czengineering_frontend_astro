import { Button } from "@/components/ui/button";
import { LayoutGridIcon, MenuIcon } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="border-b">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img src="/images/logo.png" alt="Industrie Logo" className="h-12" />
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex items-center space-x-6 text-sm text-muted-foreground">
          <a href="/" className="text-primary font-medium">
            Home
          </a>
          <a href="/about">About</a>
          <a href="/products">Products</a>
          <a href="/projects">Projects</a>
          <a href="/client-list">Client List</a>
          <a href="/contact-us">Contact us</a>
        </nav>

        {/* CTA and Icon */}
        <div className="flex items-center space-x-4">
          <a href="/contact-us">
            <Button className="bg-blue-600 text-white hover:bg-blue-800 hover:cursor-pointer">
              Get In Touch
              <span className="ml-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 1 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                  />
                </svg>
              </span>
            </Button>
          </a>
          <LayoutGridIcon className="w-5 h-5 text-muted-foreground" />
        </div>

        {/* Mobile menu button */}
        <button className="md:hidden" onClick={() => setOpen(!open)}>
          <MenuIcon className="w-6 h-6" />
        </button>
      </div>
    </header>
  );
}
