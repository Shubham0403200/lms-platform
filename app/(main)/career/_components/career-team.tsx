"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const teamMembers = [
  {
    id: 1,
    name: "John Doe",
    subject: "IELTS Trainer",
    experience: "10+ years",
    bio: "John is an experienced IELTS trainer who has helped thousands of students achieve Band 9.",
    department: "Education",
    workType: "Full-time",
    photo: "https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    id: 2,
    name: "Jane Smith",
    subject: "English Instructor",
    experience: "8+ years",
    bio: "Jane specializes in teaching advanced English grammar and vocabulary for academic success.",
    department: "Linguistics",
    workType: "Part-time",
    photo: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 3,
    name: "Mark Lee",
    subject: "Speaking Coach",
    experience: "6+ years",
    bio: "Mark focuses on improving students' speaking fluency and confidence for IELTS exams.",
    department: "Speaking",
    workType: "Remote",
    photo: "https://images.pexels.com/photos/678783/pexels-photo-678783.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: 4,
    name: "Sophia Brown",
    subject: "Writing Expert",
    experience: "9+ years",
    bio: "Sophia provides expert guidance on IELTS Writing tasks to maximize scores.",
    department: "Writing",
    workType: "Full-time",
    photo: "https://images.pexels.com/photos/1499327/pexels-photo-1499327.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const CareerTeam: React.FC = () => {
  const [selectedMember, setSelectedMember] = useState<any>(null);

  return (
    <motion.div
      className="container mx-auto px-4 py-12"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Header Section */}
      <div className="text-center mb-8">
        <h2 className="text-h1-clamp font-extrabold text-gray-800">
          Meet Our <span className="text-blue-600"> Team</span>
        </h2>
        <p className="text-h5-clamp text-muted-foreground max-w-2xl mx-auto mt-2">
          Our experts are here to guide you every step of the way. Together, we build success!
        </p>
      </div>

      {/* Team Cards */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {teamMembers.map((member, index) => (
          <motion.div
            key={member.id}
            className="relative group bg-gradient-to-br from-white/80 to-gray-100/90 shadow-lg rounded-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            viewport={{ once: true }}
            onClick={() => setSelectedMember(member)}
            whileHover={{ scale: 1.05 }}
          >
            {/* Image */}
            <div className="relative h-40 sm:h-48 lg:h-56">
              <Image
                src={member.photo}
                alt={member.name}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </div>

            {/* Card Content */}
            <div className="p-4 sm:p-6 text-center">
              <h3 className="text-h4-clamp font-semibold">
                {member.name}
              </h3>
              <p className="text-h6-clamp text-muted-foreground">{member.subject}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedMember && (
          <motion.div
            className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-3xl shadow-2xl w-full max-w-md sm:max-w-2xl flex flex-col sm:flex-row overflow-hidden"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              {/* Left Image Section */}
              <div className="relative w-full sm:w-1/3 bg-gray-100 h-48 sm:h-auto">
                <Image
                  src={selectedMember.photo}
                  alt={selectedMember.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-3xl sm:rounded-none sm:rounded-l-3xl"
                />
              </div>

              {/* Right Content Section */}
              <div className="w-full sm:w-2/3 p-6 relative">
                <button
                  className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-2xl"
                  onClick={() => setSelectedMember(null)}
                >
                  ✕
                </button>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800">
                  {selectedMember.name}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mt-2">
                  {selectedMember.subject}
                </p>
                <p className="text-sm text-gray-500 mt-4">
                  Experience: {selectedMember.experience}
                </p>
                <p className="text-sm text-gray-700 mt-4 leading-relaxed">
                  {selectedMember.bio}
                </p>
                <div className="mt-6 space-y-3">
                  <p className="text-sm">
                    <strong>Department:</strong> {selectedMember.department}
                  </p>
                  <p className="text-sm">
                    <strong>Work Type:</strong> {selectedMember.workType}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default CareerTeam;
