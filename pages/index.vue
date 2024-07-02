<template>
  <div>
    <app-navigation />
    <main class="flex flex-col">
      <section id="header" class="mt-16">
        <app-header />
      </section>
      <section id="joey-workflow" class="mb-6">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-gray-900 flex-col items-center">
          <h1 class="max-w-screen-lg text-gray-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            It's not what you look at that matters, it's what you see.
          </h1>
          <div>
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
        </div>
      </section>
      <section id="joey-portfolio" class="flex justify-center items-center">
        <portfolio-section />
      </section>
      <section id="joey-resume" class="mb-6">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center bg-blue-400 flex-col items-center">
          <h1 class="max-w-screen-lg text-gray-100 font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            Do not hire a man who does your work for money, but him who does it for love of it.
          </h1>
          <h3 class="text-gray-200 text-center text-xl leading-8 max-w-screen-md">
            I have over 20 years experience in <strong>design</strong>, 20 years in <strong>website development</strong>, 6 years specializing in <strong>front-end development</strong>, and 4 years focusing on <strong>UI/UX research and development</strong>.
          </h3>
          <a href="/downloads/harry-langley-resume-2024.pdf" download aria-label="Download my resume in PDF file format" class="flex justify-center items-center mt-8 bg-gray-100 hover:bg-gray-800 hover:text-gray-100 text-gray-800 text-sm font-normal py-1 px-4 rounded-full transition-colors duration-300">
            <fa :icon="fas.faFilePdf" class="mr-2 h-4" /> <span>Download Resume</span>
          </a>
        </div>
      </section>
      <section id="joey-about" class="mb-6">
        <div class="flex py-10 lg:py-40 px-6 lg:px-40 justify-center flex-col items-center">
          <h1 class="max-w-screen-lg font-serif font-semibold text-4xl leading-10 md:text-6xl md:leading-extra-loose text-center">
            A closer look at my skills and methodology.
          </h1>
          <h3 class="text-left text-gray-600 text-xl leading-8 text-center">
            As an experienced problem solver in design and development, my concern is speed to value so my skills and methodology are ever changing.  Not one to get caught up on syntax of a particular language or framework, I'm more concerned with the problem at hand and how I can iteratively provide a solution.
          </h3>
          <aside class="flex flex-wrap justify-around">
            <skills-card
              :skills="['Interview', 'Usability Testing', 'Persona', 'User Stories']"
              image="https://res.cloudinary.com/dbtnrdylc/image/upload/v1582118915/joey-langley-research_brl7qq.jpg"
              heading="Research"
              copy="In the planning phases I'll interview stakeholders, project managers, and users so I can begin creating user epics and stories which can easily be translated into working tasks for the project. "
            />
            <skills-card
              :skills="['Mood Boarding', 'Wireframing', 'Prototyping', 'Branding', 'UI Design']"
              image="https://res.cloudinary.com/dbtnrdylc/image/upload/c_crop,h_234,w_500/v1582062193/joey-langley-sketchbook_jjn2uu.jpg"
              heading="Design"
              copy="Using Adobe Illustrator, Photoshop, and XD I'm able to create reusable images, wireframes, and prototypes."
            />
            <skills-card
              :skills="['Adobe Creative Suite', 'Visual Studio Code', 'Git', 'Linux', 'Windows Servers', 'IIS']"
              image="https://res.cloudinary.com/dbtnrdylc/image/upload/c_crop,h_234,w_500/v1582061556/joey-langley-dev-tools_dbryzk.jpg"
              heading="Tools"
              copy="My toolbox is always growing and evolving. I'm not so much concerned about how familiar I am with the tool as I am about if the tool is right for the job."
            />
            <skills-card
              :skills="['HTML', 'CSS/Less/Sass', 'Javascript/Vue.js', 'PHP/Laravel', 'Drupal', 'Wordpress', 'Joomla!']"
              image="https://res.cloudinary.com/dbtnrdylc/image/upload/c_crop,h_234,w_500/v1582061956/joey-langley-developer_y6qjx2.jpg"
              heading="Development"
              copy="I develop using the DRY method along with an atomic/modular approach. Never getting too attached to frameworks, libraries, or CMS's and I'm always searching for a better solution to an old problem."
            />
          </aside>
        </div>
      </section>
      <app-footer />
    </main>
  </div>
</template>

<script>
import { fas } from '@fortawesome/free-solid-svg-icons'
import AppNavigation from '~/components/AppNavigation.vue'
import AppHeader from '~/components/AppHeader.vue'
import PortfolioSection from '~/components/PortfolioSection.vue'
import SkillsCard from '~/components/SkillsCard.vue'
import AppFooter from '~/components/AppFooter.vue'

export default {
  components: {
    AppNavigation,
    AppHeader,
    PortfolioSection,
    SkillsCard,
    AppFooter
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
