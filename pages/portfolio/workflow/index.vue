<template>
  <div class="workflow">
    <app-navigation />
    <main class="flex flex-col">
      <header class="flex min-h-screen justify-center items-center px-6 lg:px-40" />
      <section id="workflow-story">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center flex-col items-center">
          <h1 class="max-w-screen-lg font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            Workflow
          </h1>
          <h3 class="text-gray-600 text-center text-xl leading-8 max-w-screen-md">
            Workflow is a tool which can be included in home grown applications to help the user create processes and actions based on their specific system without being a developer.
          </h3>
          <div class="w-auto">
            <img src="/images/notebook-workflow.png" title="Image of notebook with workflow">
          </div>
          <section class="flex flex-wrap justify-center mt-8">
            <div class="py-4 px-4" style="max-width: 500px">
              <h3 class="text-center">
                Quickly create new Workflows
              </h3>
              <img src="/images/create-new-workflow.gif" title="Animated gif of user creating new workflow">
            </div>
            <div class="py-4 px-4 w-1/2" style="max-width: 500px">
              <h3 class="text-center">
                Add conditional statements
              </h3>
              <img src="/images/create-workflow-condition.gif" title="Animated gif of user creating condition">
            </div>
            <div class="py-4 px-4 w-1/2" style="max-width: 500px">
              <h3 class="text-center">
                Add action events if condition is true
              </h3>
              <img src="/images/action-workflow-true.gif" title="Animated gif of user adding action if true">
            </div>
            <div class="py-4 px-4 w-1/2" style="max-width: 500px">
              <h3 class="text-center">
                Add action events if condition is false
              </h3>
              <img src="/images/action-workflow-false.gif" title="Animated gif of user adding action if false">
            </div>
          </section>
        </div>
      </section>
      <section id="workflow-story">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-red-400 flex-col items-center">
          <h1 class="max-w-screen-lg text-red-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            Objectives and Obstacles
          </h1>
          <h3 class="text-red-100 text-center text-xl leading-8 max-w-screen-md">
            The main goal for this tool was to give our Stat Solutions users an easy to use UI to invoke certain actions for system events based off of their specific conditional criteria.  Any user with the proper editing credentials now has access to determine how their application interacts with the data, devices, and events within their specific environment.
          </h3>
        </div>
      </section>
      <section class="flex min-h-screen justify-center items-center px-6 lg:px-40">
        <article class="max-w-screen-lg py-10 lg:py-40">
          <h1 class="font-serif text-center font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose">
            Issues solved
          </h1>
          <h3 class="mt-6 text-center text-gray-600 text-xl leading-8">
            Initially, certain system settings, events, and actions required the expertise of a developer or at the very least a lengthy phone call or possibly an onsite visit from an experienced installation specialist to reach the full potential of the application.  To put this power back into the hands of the users, a simple to use UI was designed and developed. Users now have the ability to select the event and choose conditional operators leading to specific actions all from an easy to use canvas which features real time building.
          </h3>
          <div class="mt-8 bg-white pb-16 sm:mt-12 sm:pb-20 lg:pb-28">
            <div class="relative">
              <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="max-w-lg mx-auto rounded-lg shadow-lg overflow-hidden lg:max-w-none lg:flex">
                  <div class="bg-white px-6 py-8 lg:flex-shrink-1 lg:p-12">
                    <h3 class="text-2xl leading-8 font-extrabold text-gray-800 sm:text-3xl sm:leading-9">
                      Option Cards
                    </h3>
                    <p class="mt-6 text-base leading-6 text-gray-500">
                      By utilizing option cards instead of drop down selects anytime options where a single choice from a possibility of 3-5 options I greatly simplified and improved the overall user experience.
                    </p>
                    <div class="mt-8">
                      <div class="flex items-center">
                        <h4 class="flex-shrink-0 pr-4 bg-white text-sm leading-5 tracking-wider font-semibold uppercase text-orange-600">
                          How this helped
                        </h4>
                        <div class="flex-1 border-t-2 border-gray-200" />
                      </div>
                      <ul class="mt-8 lg:grid lg:grid-cols-2 lg:col-gap-8 lg:row-gap-5">
                        <li class="flex items-start lg:col-span-1">
                          <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-5 text-gray-700">
                            User is immediately aware of all possible options.
                          </p>
                        </li>
                        <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                          <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-5 text-gray-700">
                            Larger touch points
                          </p>
                        </li>
                        <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                          <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-5 text-gray-700">
                            Easily identifiable icons
                          </p>
                        </li>
                        <li class="mt-5 flex items-start lg:col-span-1 lg:mt-0">
                          <div class="flex-shrink-0">
                            <svg class="h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                            </svg>
                          </div>
                          <p class="ml-3 text-sm leading-5 text-gray-700">
                            Less clicks
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div class="py-8 px-6 text-center bg-gray-50 lg:flex-shrink-0 lg:flex lg:flex-col lg:justify-center lg:p-12">
                    <img src="/images/workflow-select-options-screen.png" style="width:300px">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>
      </section>
      <section id="workflow-outcomes">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-teal-400 flex-col items-center">
          <h1 class="max-w-screen-lg text-red-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            Conclusions and Reactions
          </h1>
          <h3 class="text-red-100 text-center text-xl leading-8 max-w-screen-md">
            After the launch the internal sales team quickly realized the potential this application add-on offered their clients and no other competing application on the market offered this solution to the user.
          </h3>
        </div>
      </section>
      <section class="flex flex-col min-h-screen items-center py-10 lg:py-40 justify-center">
        <article class="text-center max-w-screen-lg">
          <h1 class="font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose">
            How it was built
          </h1>
          <h3 class="mt-6 text-gray-600 text-xl leading-8">
            This project was accomplished by creating several reusable Vue.js components which communicate through the apps API built in Laravel.  I used a config file which contains objects for the event selected.  Once the user selects their desired event to manipulate the object inside, then the config file is loaded which exposes it’s object and helps to build out the components needed on the front end.  Utilizing dynamic components I was able to maintain a DRY method when determining which component or field type to show when and also which options are made available to the user.  The main component utilizes a recursive component allowing a user endless possibilities and can literally contain an infinite amount of conditions and actions to perform.
          </h3>
        </article>
        <aside class="mt-10">
          <div class="bg-gray-100 shadow rounded-lg">
            <div class="flex items-center px-4 py-4 sm:px-6">
              <div class="flex-shrink-0 self-start mr-4">
                <img class="h-16 w-16 rounded-full" src="https://res.cloudinary.com/dbtnrdylc/image/upload/v1582913706/joey-langley-pic_y1wfsg.jpg" alt="">
              </div>
              <div class="flex flex-col">
                <div class="h-18 mb-4">
                  <h3 class="text-base leading-5 font-medium text-orange-600 mb-1">
                    My Responsibilities
                  </h3>
                  <h4 class="text-sm leading-5 text-gray-600 mb-0">
                    I worked on this project as a lead designer and the lead UI developer.
                  </h4>
                </div>
                <div
                  v-for="item in responsibilities"
                  :key="item"
                  class="mt-2 flex items-center text-sm leading-5 text-gray-600"
                >
                  <svg class="flex-shrink-0 mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                  </svg>
                  {{ item }}
                </div>
              </div>
            </div>
          </div>
        </aside>
      </section>
      <div class="bg-gray-50">
        <div class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
          <h2 class="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
            Next Project
            <br>
            <span class="text-orange-600">godogsafe.com site</span>
          </h2>
          <div class="mt-8 flex lg:flex-shrink-0 lg:mt-0">
            <div class="inline-flex rounded-md shadow">
              <a href="/" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-orange-600 hover:bg-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Back to the homepage
              </a>
            </div>
            <div class="ml-3 inline-flex rounded-md shadow">
              <nuxt-link to="/portfolio/godogsafe-site" class="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-orange-600 bg-white hover:text-orange-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                Visit next project <fa :icon="fas.faChevronRight" class="ml-2 h-3" />
              </nuxt-link>
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
    background-image: url(/images/portfolio-project-workflow-main.jpg);
    background-color: #4a5f7c;
    background-size: cover;
}
</style>
