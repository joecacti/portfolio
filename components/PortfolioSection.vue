<template>
  <article class="ml-auto mr-auto max-w-screen-lg">
    <div class="hover:shadow-image h-auto overflow-hidden mb-6 transition-all duration-150">
      <a href="#">
        <img src="~/assets/portfolio-project-workflow-main.jpg" class="h-auto w-full transition-all duration-700" alt="workflow app on macbook">
      </a>
    </div>
  </article>
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
</style>
