"use client"
import { motion } from "framer-motion"
import { experienceList } from "@/appData/experience"
import { Briefcase } from "lucide-react"

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12">
      <h2 className="text-3xl text-primary-content font-bold mb-8 text-center">Work Experience</h2>
      <div className="relative border-l-2 text-secondary-content max-w-3xl mx-auto">
        {experienceList.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.2 }}
            className="mb-10 ml-6"
          >
            <span className="absolute -left-4 flex items-center justify-center w-8 h-8  text-secondary-content rounded-full shadow-md bg-secondary">
              <Briefcase size={16} />
            </span>
            <div className="bg-secondary p-4 rounded-2xl shadow-sm">
              <h3 className="text-xl font-semibold text-secondary-content">{exp.role}</h3>
              <p className="text-sm text-primary-content">{exp.company} • {exp.duration}</p>
              <ul className="list-disc list-inside mt-2 p-4 rounded-2xl space-y-1 bg-primary text-tertiary-content text-xs">
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
