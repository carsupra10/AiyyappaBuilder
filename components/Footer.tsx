"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

const Footer = () => {
  const socialLinks = [{ icon: Instagram, href: "#", label: "Instagram" }];

  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/projects", label: "Our Projects" },
    { href: "/contact", label: "Contact" },
  ];

  const services = [
    "Residential Construction",
    "Commercial Building",
    "Renovat  ion Services",
    "Interior Design",
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="Aiyyappa Builders Logo"
                className="h-12 w-12 object-contain invert"
                style={{ filter: "invert(1)" }}
              />
              <span className="text-xl font-bold">
                Aiyyappa <span className="text-amber-500">Builders</span>
              </span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Building dreams with quality craftsmanship, innovative design, and
              reliable service for over a decade.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-gray-400 hover:text-amber-500 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-amber-500 transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Our Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-400">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-amber-500 flex-shrink-0 mt-1" />
                <div className="text-gray-400 text-sm">
                  <div>
                    <span className="font-semibold">Permanent address:</span>
                    <br />
                    7 Pandimankovil street. Pon.Puduppatti,
                    <br />
                    Ponnamaravathy Taluk. Pudukkottai dist
                  </div>
                  <div className="mt-2">
                    <span className="font-semibold">
                      Communication Address:
                    </span>
                    <br />
                    36/2 Annapoorani Illam, AV, ARM street.
                    <br />
                    Magernombutal Thidal. Karaikudi 630001
                  </div>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400">+91 98420 69078</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-amber-500 flex-shrink-0" />
                <span className="text-gray-400">info@aiyappabuilders.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="border-t border-gray-800 mt-8 pt-8 text-center"
        >
          <p className="text-gray-400">
            © 2024 Aiyyappa Builders. All rights reserved. Developed by
            @strucureo
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
