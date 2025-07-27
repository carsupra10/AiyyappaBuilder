"use client";

import React from "react";
import { motion } from "framer-motion";
import { Linkedin, Mail } from "lucide-react";

interface TeamCardProps {
  name: string;
  position: string;
  imageUrl: string;
  description: string;
  linkedin?: string;
  email?: string;
  index: number;
}

const TeamCard: React.FC<TeamCardProps> = ({
  name,
  position,
  imageUrl,
  description,
  linkedin,
  email,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -5 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group"
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
          <div className="flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {linkedin && (
              <motion.a
                href={linkedin}
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </motion.a>
            )}
            {email && (
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.1 }}
                className="bg-white/20 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/30 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </motion.a>
            )}
          </div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-1">{name}</h3>
        <p className="text-amber-600 font-medium mb-3">{position}</p>
        <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
      </div>
    </motion.div>
  );
};

export default TeamCard;
