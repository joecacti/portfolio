<template>
  <div>
    <app-navigation />
    <main class="flex flex-col">
      <header class="flex min-h-screen justify-center items-center px-6 lg:px-40">
        <article class="text-center">
          <h1 class="font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose">
            Workflow
          </h1>
          <h3 class="mt-6 text-gray-700 text-xl leading-8">
            Workflows is a tool which can be included in home grown applications to help the user create processes and actions based on their specific system without being a developer.
          </h3>
        </article>
      </header>
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
        <article class="text-center">
          <h1 class="font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose">
            Issues solved
          </h1>
          <h3 class="mt-6 text-gray-600 text-xl leading-8">
            Initially, certain system settings, events, and actions required the expertise of a developer or at the very least a lengthy phone call or possibly an onsite visit from an experienced installation specialist to reach the full potential of the application.  To put this power back into the hands of the users, a simple to use UI was designed and developed. Users now have the ability to select the event and choose conditional operators leading to specific actions all from an easy to use canvas which features real time building.
          </h3>
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
      <section class="flex flex-col min-h-screen justify-center px-6 lg:px-40">
        <article class="text-center">
          <h1 class="font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose">
            How it was built
          </h1>
          <h3 class="mt-6 text-gray-600 text-xl leading-8">
            This project was accomplished by creating several reusable Vue.js components which communicate through the apps API built in Laravel.  I used a config file which contains objects for the event selected.  Once the user selects their desired event to manipulate the object inside, then the config file is loaded which exposes it’s object and helps to build out the components needed on the front end.  Utilizing dynamic components I was able to maintain a DRY method when determining which component or field type to show when and also which options are made available to the user.  The main component utilizes a recursive component allowing a user endless possibilities and can literally contain an infinite amount of conditions and actions to perform.
          </h3>
        </article>
        <aside class="w-full mt-6">
          <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul>
              <li>
                <div class="flex items-center px-4 py-4 sm:px-6">
                  <div class="flex-shrink-0 self-start mr-4">
                    <img class="h-16 w-16 rounded-full" src="https://res.cloudinary.com/dbtnrdylc/image/upload/v1582913706/joey-langley-pic_y1wfsg.jpg" alt="">
                  </div>
                  <div class="flex flex-col">
                    <div class="text-sm leading-5 font-medium text-orange-600">
                      My Responsibilities
                    </div>
                    <div class="text-sm leading-5 text-gray-500 mb-2">
                      <span>I worked on this project as a lead designer and the lead UI developer.</span>
                    </div>
                    <div
                      v-for="item in responsibilities"
                      :key="item"
                      class="mt-2 flex items-center text-sm leading-5 text-gray-500"
                    >
                      <svg class="flex-shrink-0 mr-2 h-5 w-5 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                      </svg>
                      {{ item }}
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </aside>
      </section>
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

#joey-workflow .graph div.step {
    position: relative;
    z-index: 1;
    display: inline-block;
    width: 124px;
    text-align: center;
}
#joey-workflow .graph p {
    margin-bottom: -8px;
    font-family: Roboto;
    color: #fff;
    font-size: 26px;
    line-height: 31px;
    letter-spacing: -.4px;
}
.homepage #joey-workflow h4, .homepage #joey-workflow p {
    max-width: 670px;
    margin-left: auto;
    margin-right: auto;
    color: #979797;
}
#joey-workflow .graph span {
    display: block;
    margin-bottom: 4px;
    font-family: Roboto;
    color: #979797;
    font-size: 14px;
    line-height: 28px;
    letter-spacing: -.2px;
}
#joey-workflow .graph .circle {
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
#joey-workflow .graph .circle .central {
    height: 10px;
    width: 10px;
    border: 1px solid #fff;
    border-radius: 10px;
}
#joey-workflow .graph .central, #joey-workflow .graph .circle {
    display: flex;
    justify-content: center;
    align-items: center;
}
#joey-workflow .graph .circle .central .inner {
    height: 2px;
    width: 2px;
    border-radius: 2px;
    background-color: #fff;
}
#joey-workflow .graph .path {
    position: absolute;
    right: -82px;
    bottom: 63px;
    z-index: 0;
    height: 6px;
}
</style>
