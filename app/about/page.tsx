"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, Target, Heart, Lightbulb } from "lucide-react";
import TeamCard from "@/components/TeamCard";

const AboutPage = () => {
  const values = [
    {
      icon: Award,
      title: "Excellence",
      description:
        "We strive for perfection in every project, ensuring the highest standards of quality and craftsmanship.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Attention to detail and meticulous planning drive our approach to every construction challenge.",
    },
    {
      icon: Heart,
      title: "Integrity",
      description:
        "Honest communication, fair pricing, and ethical business practices guide all our relationships.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We embrace new technologies and methods to deliver cutting-edge construction solutions.",
    },
  ];

  const teamMembers = [
    {
      name: "Michael Rodriguez",
      position: "Founder & CEO",
      imageUrl:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg",
      description:
        "With 20+ years in construction, Michael leads BuildCraft with vision and expertise.",
      linkedin: "#",
      email: "michael@buildcraft.com",
    },
    {
      name: "Sarah Johnson",
      position: "Project Manager",
      imageUrl:
        "https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg",
      description:
        "Sarah ensures every project runs smoothly from conception to completion.",
      linkedin: "#",
      email: "sarah@buildcraft.com",
    },
    {
      name: "David Chen",
      position: "Lead Architect",
      imageUrl:
        "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg",
      description:
        "David brings innovative design solutions to life with technical precision.",
      linkedin: "#",
      email: "david@buildcraft.com",
    },
    {
      name: "Emily Watson",
      position: "Quality Supervisor",
      imageUrl:
        "https://images.pexels.com/photos/3778003/pexels-photo-3778003.jpeg",
      description:
        "Emily maintains our high standards through rigorous quality control processes.",
      linkedin: "#",
      email: "emily@buildcraft.com",
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Banner */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/416322/pexels-photo-416322.jpeg"
            alt="About BuildCraft"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            About BuildCraft
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Building the future with passion, precision, and expertise
          </p>
        </motion.div>
      </section>

      {/* Company History & Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed">
                Founded in 2008 by Michael Rodriguez, BuildCraft began as a
                small residential construction company with a simple mission: to
                build homes that families could be proud of for generations.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Over the years, we've grown into a full-service construction
                company, taking on commercial projects, renovations, and custom
                builds. Despite our growth, we've never lost sight of our core
                values: quality, integrity, and customer satisfaction.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Today, BuildCraft is recognized as one of the leading
                construction companies in the region, with hundreds of
                successful projects and thousands of satisfied clients.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img
                src="https://images.pexels.com/photos/834892/pexels-photo-834892.jpeg"
                alt="BuildCraft history"
                className="rounded-2xl shadow-2xl"
              />
            </motion.div>
          </div>

          {/* Values Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision we make and every project we
              undertake.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center group bg-gray-50 p-8 rounded-2xl hover:bg-amber-50 transition-colors"
              >
                <div className="bg-amber-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-amber-200 transition-colors">
                  <value.icon className="h-8 w-8 text-amber-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The passionate professionals behind every successful BuildCraft
              project.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <TeamCard key={member.name} {...member} index={index} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
