import { skillList } from '@/appData'
import AboutSection from '@/components/AboutSection/AboutSection'
import ContactSection from '@/components/Contact/ContactSection'
import ExperienceSection from '@/components/Experience/ExperienceSection'
import Hero from '@/components/Hero/Hero'
import ProjectSection from '@/components/Projects/ProjectSection'
import ServiceSection from '@/components/Services/ServiceSection'
import Skills from '@/components/Skills/Skills'
import { getAllProjects } from '@/services'

export default async function Home() {
  const projects = await getAllProjects()

  return (
    <main>
      <Hero />
      <Skills skills={skillList} />
      <AboutSection />
      <div className="mx-auto my-8 max-w-[1200px] px-4 md:my-[3.75rem]">
        <ProjectSection projects={projects} />
        <ServiceSection />
        {/* <TestimonialSection testimonials={testimonials} /> */}
        <ExperienceSection />
        <ContactSection />
      </div>
    </main>
  )
}
