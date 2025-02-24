import { useEffect, useState } from "react";
import { Facebook, Twitter, Instagram, Youtube, Linkedin, PinIcon as Pinterest } from "lucide-react";

const iconMap = {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Pinterest,
  Linkedin,
};

const Footer = () => {
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    fetch("/footer.json")
      .then((res) => res.json())
      .then((data) => setFooterData(data))
      .catch((error) => console.error("Error fetching footer data:", error));
  }, []);

  if (!footerData) {
    return <p className="text-center text-zinc-400 py-8">Loading footer...</p>;
  }

  return (
    <footer className="bg-zinc-900 text-zinc-400 py-12">
      <div className="container mx-auto px-6">
        {/* Main Footer Sections */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-10 mb-12">
          {footerData.footerData.map((category, index) => (
            <div key={index}>
              <h3 className="text-white font-semibold mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links &&
                  category.links.map((link, i) => (
                    <li key={i}>
                      <a href="#" className="text-sm hover:text-white transition duration-200">
                        {link}
                      </a>
                    </li>
                  ))}
              </ul>

              {/* Social Icons */}
              {category.icons && (
                <div className="flex flex-wrap gap-3 mt-4">
                  {category.icons.map((icon, i) => {
                    const IconComponent = iconMap[icon];
                    return (
                      <a
                        key={i}
                        href="#"
                        className="p-2 bg-zinc-800 hover:bg-white hover:text-zinc-900 transition rounded-lg"
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-zinc-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            {/* Copyright & Footer Links */}
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm">
              <p className="text-gray-400">{footerData.copyright}</p>
              <div className="flex flex-wrap justify-center gap-4">
                {footerData.footerData.find((item) => item.title === "FOOTER LINKS")?.links.map((text, i) => (
                  <a key={i} href="#" className="hover:text-white transition">
                    {text}
                  </a>
                ))}
              </div>
            </div>

            {/* Payment Methods */}
            <div className="flex gap-4 items-center p-3 bg-zinc-800 rounded-lg shadow-md">
              {footerData.footerData.find((item) => item.title === "PAYMENT METHODS")?.methods.map((alt, i) => (
                <img
                  key={i}
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-24%20151747-ZhMUvRkTZ9flPRg44pYvcAnBkO2JZj.png"
                  alt={alt}
                  width={40}
                  height={25}
                  className="grayscale opacity-75"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
