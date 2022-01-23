<template>
  <div>
    <Hero />
    <Technologies />
    <Projects />
    <Footer />
  </div>
</template>

<script>
import Hero from './components/Hero.vue'
import Technologies from './components/Technologies.vue'
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
export default {
  components: {
    Hero,
    Technologies,
    Projects,
    Footer
  }
}
</script>