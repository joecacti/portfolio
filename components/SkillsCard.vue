<template>
  <div class="max-w-sm m-4 rounded overflow-hidden shadow-lg">
    <img
      class="w-full"
      :src= image
      alt="Sunset in the mountains"
    />
    <div class="px-6 py-4">
      <div class="font-bold text-xl mb-2">{{ heading }}</div>
      <p
        class="text-gray-700 text-base"
      >
      {{ copy }}
      </p>
    </div>
    <div class="px-6 py-4">
      <span
        v-for="skill in skills"
        class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 m-2"
      >#{{ skill }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SkillsCard',
  components: {},
  props: {
    image: {},
    skills: {},
    heading: {},
    copy: {}
  },
  data () {
    return {}
  }
}
</script>

<style scoped>
</style>
