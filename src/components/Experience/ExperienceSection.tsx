"use client"
import { motion } from "framer-motion"
import { experienceList } from "@/appData/experience"
import { Briefcase } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section className="py-12">
      {/* <h2 className="text-3xl font-bold mb-8 text-center">Experience</h2> */}
      <div className="relative border-l-2 border-gray-300 dark:border-gray-700 max-w-3xl mx-auto">
        {experienceList.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8 bg-blue-600 text-white rounded-full shadow-md">
              <Briefcase size={16} />
            </span>
            <div className="bg-white dark:bg-gray-800 p-4 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-sm text-gray-500">{exp.company} • {exp.duration}</p>
              <ul className="list-disc list-inside mt-2 space-y-1 text-gray-700 dark:text-gray-300">
                {exp.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
