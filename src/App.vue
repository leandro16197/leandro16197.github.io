<template>
  <div class="min-h-screen bg-slate-900">
    <Navbar />
    <Hero />
    <About />
    <Experience />
    <Skills />
    <Education />
    <Projects />
    <Contact />
    <main>
      <!-- Add other sections here -->
    </main>
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue'
import Hero from './components/Hero.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Education from './components/Education.vue'
import Projects from './components/Projects.vue'
import Contact from './components/Contact.vue'
import Skills from './components/Skills.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    Hero,
    About,
    Experience,
    Skills,
    Education,
    Projects,
    Contact
  }
}
</script>