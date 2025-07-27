"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ProjectCard from "@/components/ProjectCard";
import { sanityClient } from "@/lib/sanity.client";

const filterTabs = ["All", "Residential", "Commercial", "Renovation"];

const fetchProjects = async () => {
  const query = `*[_type == "project"]|order(date desc){
    _id,
    title,
    location,
    description,
    category,
    date,
    "imageUrl": image.asset->url
  }`;
  return await sanityClient.fetch(query);
};

const ProjectsPage = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchProjects().then((data) => {
      setProjects(data);
      setLoading(false);
    });
  }, []);

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project: any) => project.category === activeFilter);

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/1105766/pexels-photo-1105766.jpeg"
            alt="Our Projects"
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
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto">
            Showcasing excellence in construction and design
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Filter Tabs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === tab
                    ? "bg-amber-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab}
                {activeFilter === tab && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-amber-600 rounded-full -z-10"
                  />
                )}
              </button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          {loading ? (
            <div className="text-center py-20 text-xl text-gray-500">
              Loading projects...
            </div>
          ) : (
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredProjects.map((project: any, index: number) => (
                <ProjectCard
                  key={project._id || `${project.title}-${activeFilter}`}
                  {...project}
                  index={index}
                />
              ))}
            </motion.div>
          )}

          {!loading && filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-20"
            >
              <p className="text-xl text-gray-600">
                No projects found for the selected category.
              </p>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
