<template>
  <header class="welcome-page">
    <div class="max-w-screen-md pt-8 px-6 lg:px-24 min-h-screen">
      <h1 class="font-serif font-semibold text-left text-4xl leading-10 md:text-6xl md:leading-extra-loose">
        I'm Joey Langley, a user interface professional based in Columbus, Ohio.
      </h1>
      <h3 class="mt-6 text-left text-gray-600 text-xl leading-8">
        Experienced Designer/Developer focused on exceptional front-end and UI development.
      </h3>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  components: {},
  props: {},
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.welcome-page {
    background-image: url(/images/header-image.jpeg);
    background-color: #e2e8f0;
    background-size: cover;
}
.background-tint {
    background-color: rgba(81, 73, 85, 0.6);
    background-blend-mode: multiply;
}
</style>
