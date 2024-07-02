<template>
  <section class="max-w-screen-lg items-center justify-center mt-4">
    <h1 class="max-w-screen-lg font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
      View a few of my completed projects
    </h1>
    <h3 class="text-left text-gray-600 text-xl leading-8 text-center">
      Please click on the images below to view some recent examples of my work. I'm in the process of updating this section, but the examples shown and linked to below is a great introduction of my skills as a designer and develper ranging from enterprise applications to small business websites.
    </h3>
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
          <nuxt-link to="/portfolio/godogsafe-site" class="cursor-pointer">
            <img src="~/assets/portfolio-project-godogsafe.png" class="h-auto transition-all duration-700" alt="godogsafe website on macbook">
          </nuxt-link>
        </div>
      </article>
      <article class="small-image">
        <div class="hover:shadow-image h-auto overflow-hidden mb-6 transition-all duration-150 cursor-pointer">
          <nuxt-link to="/portfolio/joeylangley-site" class="cursor-pointer">
            <img src="~/assets/portfolio-project-joeylangley.png" class="h-auto transition-all duration-700" alt="joelangley website on macbook">
          </nuxt-link>
        </div>
      </article>
    </div>
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
