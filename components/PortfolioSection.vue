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
          <a href="#" class="cursor-pointer">
            <img src="~/assets/portfolio-project-stat-temp-app.png" class="h-auto transition-all duration-700" alt="workflow app on macbook">
          </a>
        </div>
      </article>
      <article class="small-image">
        <div class="hover:shadow-image h-auto overflow-hidden mb-6 transition-all duration-150 cursor-pointer">
          <a href="#" class="cursor-pointer">
            <img src="~/assets/portfolio-project-ui-library.png" class="h-auto transition-all duration-700" alt="workflow app on macbook">
          </a>
        </div>
      </article>
    </div>
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
</style>
