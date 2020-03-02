<template>
  <div class="workflow">
    <app-navigation />
    <main class="flex flex-col">
      <header class="flex min-h-screen justify-center items-center px-6 lg:px-40 background-tint" />
      <section id="workflow-story">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center flex-col items-center">
          <h1 class="max-w-screen-lg font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            UI Library - Vue.js & Tailwind.css
          </h1>
          <h3 class="text-gray-600 text-center text-xl leading-8 max-w-screen-md">
            Thank you for wanting to check out my work.  This UI library was created to help speed up our dev process and make for a more consistent experience across all of our applications.  I wireframed and prototyped the elements and components using Adobe XD.  I developed the UI library using an atomic approach using Vue.js and tailwind.css. I'm making a concerted effort in making this the best experience possible. I'll be consistantly updating my portfolio section.
          </h3>
        </div>
      </section>
      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Next Project
            <br>
            <span class="text-orange-600">Older stuff and other freelance projects</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <a href="/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Back to the homepage
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <a href="https://joeylangley.com" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-600 bg-white hover:text-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Visit next project <fa :icon="fas.faChevronRight" class="ml-2 h-3" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <app-footer />
    </main>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import AppNavigation from '~/components/AppNavigation.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavigation,
    AppFooter
  },
  data () {
    return {
      responsibilities: [
        'UX analysis (flows and personas)',
        'Design (Wireframing and Prototyping)',
        'Front-end development (HTML, SASS, Javascript, Vue.js)'
      ]
    }
  },
  computed: {
    fas () {
      return fas
    }
  }
}
</script>

<style>
.workflow header {
    background-image: url(/images/portfolio-project-ui-library.png);
    background-color: #4a5f7c;
    background-size: cover;
}

.background-tint {
    background-color: rgba(81, 73, 85, 0.6);
    background-blend-mode: multiply;
}
</style>
