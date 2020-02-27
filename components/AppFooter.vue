<template>
  <footer>
    <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-gray-900 flex-col items-center">
      <div class="flex items-center justify-center mb-6">
        <a target="_blank" href="https://github.com/joecacti" class="rounded-full h-10 w-10 flex items-center justify-center bg-orange-400 mx-2 cursor-pointer hover:bg-orange-500 transition-colors duration-300">
          <fa :icon="faGithub" class="fa-lg text-gray-100" />
        </a>
        <a target="_blank" href="https://www.linkedin.com/in/joeylangley/" class="rounded-full h-10 w-10 flex items-center justify-center bg-orange-400 mx-2 cursor-pointer hover:bg-orange-500 transition-colors duration-300">
          <fa :icon="faLinkedin" class="fa-lg text-orange-100" />
        </a>
      </div>
      <h5 class="flex mb-6 max-w-screen-lg text-gray-100 text-center flex-wrap justify-center items-center">
        <a href="mailto:solutions@joeylangley.com" class="mb-4 text-orange-400 hover:text-orange-500 transition-colors duration-300"><fa :icon="fas.faEnvelope" class="mr-2" />solutions@joeylangley.com</a>
        <a href="tel:7406061690" class="mb-4 text-orange-400 hover:text-orange-500 transition-colors duration-300"><fa :icon="fas.faPhone" class="mr-2 ml-4" />740.606.1690</a>
      </h5>
      <h5 class="max-w-screen-lg text-gray-100 text-center text-sm">
        &copy; {{ currentYear }} Joey Langley
      </h5>
    </div>
  </footer>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
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
    faLinkedin () {
      return faLinkedin
    }
  }
}
</script>

<style scoped>

</style>
