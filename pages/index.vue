<template>
  <div>
    <app-navigation />
    <main class="flex flex-col">
      <section id="header" class="mt-16">
        <app-header />
      </section>
      <section id="workflow" class="mb-6">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-gray-900 flex-col items-center">
          <h1 class="max-w-screen-lg text-gray-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            It's not what you look at that matters, it's what you see.
          </h1>
          <h3 class="text-gray-500 text-center text-xl leading-8 max-w-screen-md">
            I use a purpose driven iterative approach to solve complex digital problems. While using an Agile-esque methodology I prefer a more collaboarative open approach to design, development, and implementation.
          </h3>
          <aside class="flex mt-12 justify-evenly w-full flex-wrap">
            <div class="graph m-4">
              <div class="step">
                <div class="labels" style="opacity: 1;">
                  <p>Discover</p><span>and Plan</span>
                </div><div class="circle" style="transform: matrix(1, 0, 0, 1, 0, 0);">
                  <div class="central">
                    <div class="inner" />
                  </div>
                </div>
                <div class="path" style="opacity: 1;" />
              </div>
            </div>
            <div class="graph m-4">
              <div class="step">
                <div class="labels" style="opacity: 1;">
                  <p>Design</p><span>and Develop</span>
                </div><div class="circle" style="transform: matrix(1, 0, 0, 1, 0, 0);">
                  <div class="central">
                    <div class="inner" />
                  </div>
                </div>
                <div class="path" style="opacity: 1;" />
              </div>
            </div>
            <div class="graph m-4">
              <div class="step">
                <div class="labels" style="opacity: 1;">
                  <p>Push</p><span>and Test</span>
                </div><div class="circle" style="transform: matrix(1, 0, 0, 1, 0, 0);">
                  <div class="central">
                    <div class="inner" />
                  </div>
                </div>
                <div class="path" style="opacity: 1;" />
              </div>
            </div>
            <div class="graph m-4">
              <div class="step">
                <div class="labels" style="opacity: 1;">
                  <p>Learn</p><span>and Document</span>
                </div><div class="circle" style="transform: matrix(1, 0, 0, 1, 0, 0);">
                  <div class="central">
                    <div class="inner" />
                  </div>
                </div>
                <div class="path" style="opacity: 1;" />
              </div>
            </div>
          </aside>
          <h3 class="text-gray-500 text-center text-xl leading-8 max-w-screen-md my-8">
            All of my projects are as unique and important as the people I'm working with and for. Different assumptions can be made and talents to be gleaned. The above graph is merely a starting point, but in reality it's not the road taken that is important but the destination.
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
            I use a purpose driven iterative approach to solve complex digital problems. While using an Agile-esque methodology, I prefer a more collaboarative open approach to design, development, and implementation.
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

#workflow .graph div.step {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 124px;
    text-align: center;
}
#workflow .graph p {
    margin-bottom: -8px;
    font-family: Roboto;
    color: #fff;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: -.4px;
}
.homepage #workflow h4, .homepage #workflow p {
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    color: #979797;
}
#workflow .graph span {
    display: block;
    margin-bottom: 4px;
    font-family: Roboto;
    color: #979797;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -.2px;
}
#workflow .graph .circle {
    position: relative;
    z-index: 1;
    height: 132px;
    width: 132px;
    border: 1px dashed #fff;
    border-radius: 132px;
    background-color: #212938;
}
.graph .circle {
    display: flex;
    justify-content: center;
    align-items: center;
}
#workflow .graph .circle .central {
    height: 10px;
    width: 10px;
    border: 1px solid #fff;
    border-radius: 10px;
}
#workflow .graph .central, #workflow .graph .circle {
    display: flex;
    justify-content: center;
    align-items: center;
}
#workflow .graph .circle .central .inner {
    height: 2px;
    width: 2px;
    border-radius: 2px;
    background-color: #fff;
}
#workflow .graph .path {
    position: absolute;
    right: -82px;
    bottom: 63px;
    z-index: 0;
    height: 6px;
}
</style>
