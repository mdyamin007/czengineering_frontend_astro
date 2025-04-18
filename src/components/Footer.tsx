import { Button } from "./ui/button";

export default function Footer() {
  return (
    <footer
      className="relative bg-[#0D80CE] text-white py-8 px-4"
      style={{
        backgroundImage: "url(/images/footer-bg.png)",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay with opacity */}
      <div className="absolute inset-0 bg-[#0D80CE] opacity-40 z-0"></div>

      <div className="relative z-10 max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* About Company Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">About Company</h2>
          <p className="text-sm">
            CZ Engineering is a company which is driven by engineers who are
            reputed in their fields. Our company objective is providing
            alternate forms of energy and power source to industries.
          </p>
          <p className="mt-6 text-4xl font-extralight text-accent-foreground">
            Since 2020
          </p>
        </div>

        {/* Useful Links Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Useful Links</h2>
          <ul className="text-sm space-y-2">
            <li>
              <a href="/" className="hover:underline">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Products
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Refund Policy
              </a>
            </li>
            <li>
              <a href="/" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Office Info Section */}
        <div>
          <h2 className="text-2xl font-bold mb-4">Office Address</h2>
          <p className="text-sm">
            House: 15, Road: 4, Nikunja-2, Dhaka-1229, Bangladesh
          </p>
          <h3 className="text-xl font-semibold mt-6">Phone Number</h3>
          <p className="text-sm">+880-1729-426944</p>
          <p className="text-sm">+880-1641-070465</p>
          <h3 className="text-xl font-semibold mt-6">Email Address</h3>
          <p className="text-sm">info@czengineering.net</p>
        </div>
      </div>

      {/* Social Media Icons */}
      <div className="relative flex justify-center mt-8 z-10">
        <a
          href="https://www.facebook.com/cz.engineering2010"
          className="mr-4 cursor-pointer"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <a
          href="https://www.facebook.com/cz.engineering2010"
          className="mr-4 cursor-pointer"
        >
          <i className="fab fa-facebook"></i>
        </a>
        <a
          href="https://www.facebook.com/cz.engineering2010"
          className="mr-4 cursor-pointer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://www.facebook.com/cz.engineering2010">
          <i className="fab fa-instagram"></i>
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-center text-xs mt-8 text-white">
        &copy; 2025 <span className="font-bold">CZ Engineering</span>. Designed
        by{" "}
        <a
          className="hover:underline relative z-10"
          href="https://mdyamin007.github.io"
        >
          Md. Yamin
        </a>
      </p>
    </footer>
  );
}
