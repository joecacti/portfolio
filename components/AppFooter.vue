<template>
  <footer>
    <div class="flex py-8 lg:py-8px-6 lg:px-40 justify-center bg-gray-900 flex-col items-center">
      <div class="flex items-center justify-center mb-6">
        <a target="_blank" href="https://github.com/joecacti" aria-label="Link to my github account" rel="noreferrer" class="rounded-full h-10 w-10 flex items-center justify-center bg-orange-400 mx-2 cursor-pointer hover:bg-orange-500 transition-colors duration-300">
          <fa :icon="faGithub" class="text-orange-100 h-6" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/joeylangley/" aria-label="Link to my linked in profile page" rel="noreferrer" class="rounded-full h-10 w-10 flex items-center justify-center bg-orange-400 mx-2 cursor-pointer hover:bg-orange-500 transition-colors duration-300">
          <fa :icon="faLinkedinIn" class="text-orange-100 h-6" />
        </a>
      </div>
      <h5 class="flex mb-3 max-w-screen-lg text-gray-100 text-center flex-wrap justify-center items-center text-base">
        <a href="mailto:solutions@joeylangley.com" aria-label="Link to my email" class="flex mb-4 text-orange-400 hover:text-orange-500 transition-colors duration-300 items-center"><fa :icon="fas.faEnvelope" class="mr-2 h-3" />solutions@joeylangley.com</a>
        <a href="tel:7406061690" aria-label="Link to call my cellphone" class="flex mb-4 text-orange-400 hover:text-orange-500 transition-colors duration-300 items-center"><fa :icon="fas.faPhone" class="mr-2 ml-4 h-3" />740.606.1690</a>
      </h5>
      <h5 class="text-gray-200 flex items-center">
        <a href="https://vuejs.org/" target="_blank" aria-label="Link to Vue.js site" rel="noreferrer" class="hover:text-green-400 transition-colors duration-300 flex items-center">
          <fa :icon="faVuejs" class="h-6 ml-4 mr-2" />
          Vue.js
        </a>
        <a href="https://nuxtjs.org/" target="_blank" aria-label="Link to Nuxt JS site" rel="noreferrer" class="hover:text-green-400 transition-colors duration-300 flex items-center">
          <fa :icon="faVuejs" class="h-6 ml-4 mr-2" />
          NUXTJS
        </a>
        <a href="https://tailwindcss.com/" target="_blank" aria-label="Link to Tailwind css site" rel="noreferrer" class="hover:text-teal-400 transition-colors duration-300 flex items-center">
          <fa :icon="faCss3" class="h-6 ml-4 mr-2" />
          Tailwindcss
        </a>
      </h5>
      <h5 class="text-gray-200 flex items-center">
        <a href="https://www.digitalocean.com/" target="_blank" aria-label="Link to Digital Ocean site" rel="noreferrer" class="hover:text-blue-500 transition-colors duration-300 flex items-center">
          <fa :icon="faDigitalOcean" class="h-6 ml-4 mr-2" />
          Digital Ocean
        </a>
        <a href="https://ubuntu.com/" target="_blank" aria-label="Link to Ubuntu site" rel="noreferrer" class="hover:text-red-600 transition-colors duration-300 flex items-center">
          <fa :icon="faUbuntu" class="h-6 ml-4 mr-2" />
          Ubuntu
        </a>
      </h5>
      <p class="max-w-screen-lg text-gray-500 text-center text-sm">
        &copy; {{ currentYear }} Harry Langley
      </p>
    </div>
  </footer>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedinIn, faVuejs, faDigitalOcean, faUbuntu, faCss3 } from '@fortawesome/free-brands-svg-icons'
export default {
  name: 'AppFooter',
  components: {},
  props: {},
  data () {
    return {
    }
  },
  computed: {
    currentYear () {
      const year = (new Date().getFullYear())
      return year
    },
    fas () {
      return fas
    },
    faGithub () {
      return faGithub
    },
    faLinkedinIn () {
      return faLinkedinIn
    },
    faVuejs () {
      return faVuejs
    },
    faDigitalOcean () {
      return faDigitalOcean
    },
    faUbuntu () {
      return faUbuntu
    },
    faCss3 () {
      return faCss3
    }
  }
}
</script>

<style scoped>

</style>
