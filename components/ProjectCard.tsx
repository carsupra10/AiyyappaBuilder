'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  location: string;
  description: string;
  category: string;
  imageUrl: string;
  date: string;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  description,
  category,
  imageUrl,
  date,
  index,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8 }}
      className="bg-white rounded-xl shadow-lg overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-medium">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
          {title}
        </h3>
        
        <div className="flex items-center text-gray-600 mb-2">
          <MapPin className="h-4 w-4 mr-1" />
          <span className="text-sm">{location}</span>
        </div>
        
        <div className="flex items-center text-gray-600 mb-3">
          <Calendar className="h-4 w-4 mr-1" />
          <span className="text-sm">{date}</span>
        </div>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ProjectCard;