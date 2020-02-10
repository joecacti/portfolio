<template>
  <div>
    <header>
      <navigation />
    </header>
    <main class="container flex flex-col">
      <section class="mt-16">
        <h2 class="subtitle">
          my personal site
        </h2>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green"
          >
            Documentation
          </a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey"
          >
            GitHub
          </a>
        </div>
      </section>
      <section class="mt-16 text-left">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer malesuada lacus eu faucibus venenatis. Nunc in neque at felis volutpat rutrum. Duis venenatis nec lacus at accumsan. Donec ultrices orci nec aliquam elementum. Vestibulum tempus eros eget justo imperdiet, eu vulputate augue pharetra. Phasellus hendrerit eros turpis, et sagittis est dignissim sit amet. Morbi vitae suscipit augue. Ut et eros lectus. Vivamus sem lorem, luctus a purus sit amet, sodales tincidunt magna. Maecenas accumsan mattis ligula. Ut at luctus dui. Pellentesque fringilla fermentum purus eget viverra. Maecenas non purus risus. Aenean non vulputate purus. Suspendisse quis sapien nisl. Vestibulum non pulvinar magna.</p>
        <br>
        <p>Vestibulum lacus massa, consectetur sed varius non, vulputate id nulla. Nulla in massa ac est dictum convallis vitae sit amet magna. Praesent eget libero ac orci euismod aliquet. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Etiam condimentum urna quis mi convallis, at molestie urna faucibus. Curabitur et tortor id arcu lacinia suscipit. Sed tincidunt hendrerit orci, et pellentesque neque egestas at. Nam ultricies sem quis purus interdum facilisis. Aliquam erat volutpat. Maecenas malesuada semper vulputate. Fusce eget imperdiet magna. Curabitur condimentum elementum dictum.</p>
        <br>
        <p>Praesent id volutpat lacus. Vivamus scelerisque nisi vel commodo rutrum. Aliquam erat volutpat. Pellentesque eros justo, pulvinar eget elit eget, ullamcorper suscipit leo. Duis et hendrerit velit, sed porta urna. Vestibulum ultricies nibh sed justo facilisis, eu fringilla ex ultricies. Etiam congue, risus sed bibendum congue, libero velit ultricies magna, quis dapibus enim tortor eget arcu. Proin finibus scelerisque ante, vel condimentum diam tempor quis. Aliquam tincidunt orci dui. Etiam metus mauris, consectetur vel placerat ac, blandit et mi. Cras ac bibendum lacus, sit amet consectetur felis. Quisque sagittis lacinia pretium. Curabitur fringilla accumsan sem ac convallis. Ut rhoncus libero eget ex aliquam, mattis lacinia sem varius. Donec fermentum dictum lectus in tincidunt. Phasellus malesuada dui sed urna sodales, sed hendrerit dui iaculis.</p>
        <br>
        <p>Praesent varius convallis mi, eu volutpat dui laoreet sit amet. Nulla vitae condimentum est. In vel lectus in metus imperdiet sagittis. Donec bibendum pretium purus. Quisque mauris lorem, sodales a maximus id, imperdiet fermentum justo. Aenean sagittis nisl ut velit venenatis, placerat feugiat metus vehicula. Morbi eu cursus ex, at commodo ipsum. Sed suscipit nisi metus, ut porta dui condimentum sed. Vestibulum faucibus arcu vel gravida eleifend. Etiam placerat magna libero, et dapibus elit euismod vel. Interdum et malesuada fames ac ante ipsum primis in faucibus. Aliquam interdum nulla quis erat lacinia sodales.</p>
        <br>
        <p>Curabitur at ultricies justo. In scelerisque dignissim neque non varius. Nunc facilisis rhoncus nunc, quis ultricies mi mollis ac. Donec a nisi id ex sollicitudin porta. Vivamus non lorem a nisl fermentum ornare. Mauris leo arcu, bibendum quis fringilla eget, venenatis a est. Sed auctor varius massa id fermentum.</p>
      </section>
    </main>
  </div>
</template>

<script>
import Navigation from '~/components/Navigation.vue'

export default {
  components: {
    Navigation
  }
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
  @apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
