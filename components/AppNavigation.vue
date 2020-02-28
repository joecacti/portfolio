<template>
  <nav :class="{ 'navbar--hidden': !showNavbar }" class="navbar site-nav">
    <div class="flex site-nav-container justify-between">
      <div class="brand-container flex items-center">
        <a v-scroll-to="{el:'#header', offset: -80}" href="/#header" aria-label="Link back to the top of the home page">
          <svg
            id="Layer_1"
            class="brand-logo group"
            data-name="Layer 1"
            viewBox="0 0 1331.83 135.59"
          >
            <g class="group">
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M61.48,91.66a71.48,71.48,0,0,1-2.55,19.9,41.25,41.25,0,0,1-7.52,14.85,33,33,0,0,1-12.24,9.31A40.65,40.65,0,0,1,22.47,139,62.29,62.29,0,0,1,5,136.36c.11-1.78.26-3.56.43-5.32s.32-3.5.43-5.23A4.29,4.29,0,0,1,7,123.27a3.66,3.66,0,0,1,2.81-1,14,14,0,0,1,4.11.83,23,23,0,0,0,6.87.83A26.51,26.51,0,0,0,31,122.11a18.05,18.05,0,0,0,7.52-5.74,27.43,27.43,0,0,0,4.63-10A56.74,56.74,0,0,0,44.7,92V4.84H61.48Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M226.26,71.21a81.42,81.42,0,0,1-4.41,27.35A63.47,63.47,0,0,1,209.4,120a55.61,55.61,0,0,1-19.34,13.93,65.25,65.25,0,0,1-49.86,0A55.6,55.6,0,0,1,120.91,120a63.33,63.33,0,0,1-12.46-21.42A81.42,81.42,0,0,1,104,71.21a81.38,81.38,0,0,1,4.41-27.35,63.9,63.9,0,0,1,12.46-21.48,56,56,0,0,1,19.29-14,64.65,64.65,0,0,1,49.86,0,56,56,0,0,1,19.34,14,64,64,0,0,1,12.45,21.48A81.38,81.38,0,0,1,226.26,71.21Zm-17.21,0a71.94,71.94,0,0,0-3.11-21.94,47.34,47.34,0,0,0-8.83-16.43,38.41,38.41,0,0,0-13.84-10.32,47.28,47.28,0,0,0-36.24,0,38.81,38.81,0,0,0-13.88,10.32,46.91,46.91,0,0,0-8.87,16.43,71.64,71.64,0,0,0-3.11,21.94,71.1,71.1,0,0,0,3.11,21.88,47,47,0,0,0,8.87,16.39A38.22,38.22,0,0,0,147,119.75a47.89,47.89,0,0,0,36.24,0,37.83,37.83,0,0,0,13.84-10.27,47.41,47.41,0,0,0,8.83-16.39A71.41,71.41,0,0,0,209.05,71.21Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M346.58,122.85l-.08,14.62H270.12V4.84H346.5V19.47H286.9V63.52h48.27V77.59H286.9v45.26Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M436.46,84.63v52.84H419.68V84.63L461.37,9a10,10,0,0,1,2.16-2.87,5,5,0,0,1,3.55-1.3h14.79Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M588.09,122.39v15.08H517.77V4.84h16.69V122.39Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M727.27,137.47h-13a5.33,5.33,0,0,1-3.63-1.2,7.41,7.41,0,0,1-2.08-3.05l-11.59-32H641.37l-11.59,32a6.52,6.52,0,0,1-2,3,5.31,5.31,0,0,1-3.63,1.29h-13L660.75,4.84h17ZM692.32,88.24l-19.46-54q-.87-2.41-1.82-5.6t-1.82-6.81a105.42,105.42,0,0,1-3.72,12.5L646,88.24Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M863.93,4.84V137.47h-8.39a6.78,6.78,0,0,1-3.33-.74,8.53,8.53,0,0,1-2.63-2.49l-71.71-100c.11,1.54.2,3,.26,4.53s.08,2.87.08,4.17v94.49h-14.7V4.84h8.65a11.28,11.28,0,0,1,1.9.14,4.4,4.4,0,0,1,1.38.47,5.14,5.14,0,0,1,1.22.92A13.85,13.85,0,0,1,778,7.9l71.71,99.86c-.12-1.6-.21-3.16-.3-4.67s-.13-3-.13-4.3V4.84Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M1016.17,73.7v50.91a67.74,67.74,0,0,1-19.94,10.78A72.3,72.3,0,0,1,973,139a70.13,70.13,0,0,1-27-5,58.94,58.94,0,0,1-20.54-13.88,61.13,61.13,0,0,1-13.11-21.43,79.15,79.15,0,0,1-4.58-27.48,82,82,0,0,1,4.45-27.68A62,62,0,0,1,924.91,22.1a56.1,56.1,0,0,1,20-13.83,67.67,67.67,0,0,1,26.29-4.91,76.06,76.06,0,0,1,13.67,1.16,59.6,59.6,0,0,1,11.68,3.33,53.49,53.49,0,0,1,9.94,5.28,61.57,61.57,0,0,1,8.57,7l-4.76,8.14a5,5,0,0,1-2.9,2.36,4.75,4.75,0,0,1-3.93-.88c-1.39-.86-3-1.91-4.76-3.15A41.11,41.11,0,0,0,992.17,23a50.31,50.31,0,0,0-9.08-2.91,55.56,55.56,0,0,0-12.42-1.21,47.29,47.29,0,0,0-18.94,3.66A40.08,40.08,0,0,0,937.28,33a46.86,46.86,0,0,0-9.16,16.47,68.69,68.69,0,0,0-3.21,21.71,69.64,69.64,0,0,0,3.33,22.35,47.58,47.58,0,0,0,9.52,16.75,40.23,40.23,0,0,0,15,10.5,56.81,56.81,0,0,0,35.16,1.53,63.89,63.89,0,0,0,13.1-5.78V87.4H981.75a3.51,3.51,0,0,1-2.64-1,3.39,3.39,0,0,1-1-2.49V73.7Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M1132.08,122.39v15.08h-70.32V4.84h16.69V122.39Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M1247,122.85l-.08,14.62h-76.38V4.84h76.38V19.47h-59.6V63.52h48.26V77.59h-48.26v45.26Z" transform="translate(-5 -3.36)" />
              <path class="fill-current text-gray-800 group-hover:text-orange-500 transition-colors duration-300" d="M1336.83,84.63v52.84H1320V84.63L1274.63,4.84h14.71A5.12,5.12,0,0,1,1292.88,6a10,10,0,0,1,2.25,3Z" transform="translate(-5 -3.36)" />
            </g>
          </svg>
        </a>
      </div>
      <div class="user-action-buttons">
        <a v-scroll-to="'#joey-workflow'" href="/" class="px-4 text-sm font-semibold text-gray-800 hover:text-orange-500 hidden md:inline-flex transition-colors duration-300">Workflow</a>
        <a v-scroll-to="{el:'#joey-portfolio', offset: -100}" href="/#joey-portfolio" class="px-4 text-sm font-semibold text-gray-800 hover:text-orange-500 hidden md:inline-flex transition-colors duration-300">Portfolio</a>
        <a v-scroll-to="'#joey-resume'" href="/#joey-resume" class="px-4 text-sm font-semibold text-gray-800 hover:text-orange-500 hidden md:inline-flex transition-colors duration-300">Resume</a>
        <a v-scroll-to="'#joey-about'" href="/#joey-about" class="px-4 text-sm font-semibold text-gray-800 hover:text-orange-500 hidden md:inline-flex transition-colors duration-300">About</a>
        <a href="mailto:solutions@joeylangley.com" aria-label="Link to my email" class="ml-4 border border-orange-500 bg-transparent hover:bg-orange-500 hover:text-orange-100 text-orange-500 text-sm font-normal py-1 px-4 rounded-full transition-colors duration-300">
          Contact
        </a>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',
  components: {},
  props: {},
  data () {
    return {
      showNavbar: false
    }
  },
  mounted () {
    window.addEventListener('scroll', this.onScroll)
    /*
    if (window.$nuxt.$route.hash) {
      this.scrollToHash()
    }
    */
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll () {
      const currentScrollPosition = window.pageYOffset || document.documentElement.scrollTop
      if (currentScrollPosition === 0) {
        this.showNavbar = false
      }
      if (currentScrollPosition > 60) {
        this.showNavbar = true
      }
    }
  }
}
</script>

<style scoped>
.site-nav {
    position: fixed;
    width: 100%;
    top: 0;
    background-color: white;
    z-index: 9999;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.18);
    transition: 0.1s all ease-out;
}
.brand-container .brand-logo {
    position: inherit;
    top: inherit;
    left: inherit;
}
@media all and (max-width: 320px){
   .brand-logo {
       width: 120px;
   }
}
@media all and (max-width: 767px){
   .site-nav {
    padding: .5rem 1rem .5rem 1rem
   }
   .site-nav svg {
    width: 80%;
    }
}
@media all and (min-width: 768px){
    nav {
        padding: 1.5rem 6rem 1.5rem 6rem;
    }
   .site-nav svg {
        width: 9rem;
    }
}
@media all and(-ms-high-contrast: active), (-ms-high-contrast: none) {
  /**
   * IE11 Fix image auto height
   * https://github.com/philipwalton/flexbugs/issues/75
   */
  .site-nav {
    min-height: 1px;
  }
  .brand-container {
      height: 3rem;
  }
}
.site-nav.navbar--hidden {
    background-color: none;
    background: inherit;
    box-shadow: none;
}
</style>
