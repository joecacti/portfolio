<template>
  <div>
    <app-navigation />
    <main class="flex flex-col">
      <section class="mt-16">
        <app-header />
      </section>
      <section id="workflow" class="mb-6">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-gray-900 flex-col items-center">
          <h1 class="max-w-screen-lg text-gray-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            The question is not what you look at, but what you see.
          </h1>
          <h3 class="text-gray-500 text-center text-xl leading-8 max-w-screen-md">
            I use a purpose driven iterative approach to solve complex digital problems. While using an Agile-esque methodology I prefer a more collaboarative open approach to design, development, and implementation.
          </h3>
        </div>
      </section>
      <section id="portfolio">
        <portfolio-section />
      </section>
      <section id="about" class="mb-6">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-blue-400 flex-col items-center">
          <h1 class="max-w-screen-lg text-gray-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            It's not what you look at that matters, it's what you see.
          </h1>
          <h3 class="text-gray-200 text-center text-xl leading-8 max-w-screen-md">
            I use a purpose driven iterative approach to solve complex digital problems. While using an Agile-esque methodology I prefer a more collaboarative open approach to design, development, and implementation.
          </h3>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import AppNavigation from '~/components/AppNavigation.vue'
import AppHeader from '~/components/AppHeader.vue'
import PortfolioSection from '~/components/PortfolioSection.vue'

export default {
  components: {
    AppNavigation,
    AppHeader,
    PortfolioSection
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
