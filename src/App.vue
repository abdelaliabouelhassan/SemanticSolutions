<template>
  <MainLayout>
    <FirstSection />
    <SecondSection />
  </MainLayout>
</template>


<script>
import MainLayout from './components/layouts/MainLayout.vue'
import FirstSection from './components/sections/FirstSection.vue'
import SecondSection from './components/sections/SecondSection.vue'
export default {
  name: 'App',
  components: {
    MainLayout,
    FirstSection,
    SecondSection
  }
  
}
</script>