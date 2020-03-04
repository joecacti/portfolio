<template>
  <section class="max-w-screen-lg items-center justify-center">
    <article class="ml-auto mr-auto max-w-screen-lg">
      <div class="hover:shadow-image h-auto overflow-hidden mb-6 transition-all duration-150 cursor-pointer">
        <nuxt-link to="/portfolio/workflow" class="cursor-pointer" aria-label="Link to portfolio page for my workflow project">
          <img src="~/assets/portfolio-project-workflow-main.jpg" class="h-auto w-full transition-all duration-700" alt="workflow app on macbook">
        </nuxt-link>
      </div>
    </article>
    <div class="flex justify-between">
      <article class="small-image">
        <div class="hover:shadow-image h-auto overflow-hidden mb-6 transition-all duration-150 cursor-pointer">
          <nuxt-link to="/portfolio/temperature-monitoring-app" class="cursor-pointer">
            <img src="~/assets/portfolio-project-stat-temp-app.png" class="h-auto transition-all duration-700" alt="workflow app on macbook">
          </nuxt-link>
        </div>
      </article>
      <article class="small-image">
        <div class="hover:shadow-image h-auto overflow-hidden mb-6 transition-all duration-150 cursor-pointer">
          <nuxt-link to="/portfolio/ui-library" class="cursor-pointer">
            <img src="~/assets/portfolio-project-ui-library.png" class="h-auto transition-all duration-700" alt="workflow app on macbook">
          </nuxt-link>
        </div>
      </article>
    </div>
    <article class="ml-auto mr-auto max-w-screen-lg mb-8">
      <div class="relative bg-gray-800">
        <div class="h-56 bg-indigo-600 sm:h-72 md:absolute md:left-0 md:h-full md:w-1/2 portfolio-thinking background-tint" />
        <div class="relative max-w-screen-xl mx-auto px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
          <div class="md:ml-auto md:w-1/2 md:pl-10">
            <div class="text-base leading-6 font-semibold uppercase tracking-wider text-gray-300">
              Tech Savvy, Designer & Developer
            </div>
            <h2 class="mt-2 text-white text-3xl leading-9 font-extrabold tracking-tight sm:text-4xl sm:leading-10">
              How can I help?
            </h2>
            <p class="mt-3 text-lg leading-7 text-gray-300">
              By employing Adobe Creative Suite (primarily Photoshop, Illustrator, InDesign, and XD), Sketch, HTML, CSS, and Javascript, I'm able to efficiently and quickly deliver a custom design and user experience for each project. I'm also adept at working with Angular.js, Vue.js, and PHP for added project versitility. My experience in Wordpress, Joomla!, Drupal, and Jekyll knowledge will add value to any team that needs to manage a site without HTML knowledge.
            </p>
            <div class="mt-8">
              <div class="inline-flex rounded-md shadow">
                <a href="https://joeylangley.com" target="_blank" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-gray-900 bg-white hover:text-gray-600 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                  Visit my other site
                  <svg class="-mr-1 ml-3 h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5zM5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" clip-rule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </article>
  </section>
</template>

<script>
export default {
  name: 'PortfolioSection',
  components: {},
  props: {},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
article>div>a:hover>img {
    -webkit-transform: scale(1.02) translateZ(0);
    transform: scale(1.02) translateZ(0);
    opacity: .9;
}
.small-image {
  max-width: 500px;
  }
  .portfolio-thinking {
    background-image: url(/images/joey-langley-coconut.png);
    background-color: #4a5f7c;
    background-size: cover;
}

.background-tint {
    background-color: rgba(81, 73, 85, 0.6);
    background-blend-mode: multiply;
}
</style>
