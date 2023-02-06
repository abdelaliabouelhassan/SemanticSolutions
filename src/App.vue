<template>
  <MainLayout>
    <FirstSection />
    <SecondSection />
    <ThirdSection />
    <FourthSection />
  </MainLayout>
</template>


<script>
import MainLayout from './components/layouts/MainLayout.vue'
import FirstSection from './components/sections/FirstSection.vue'
import SecondSection from './components/sections/SecondSection.vue'
import ThirdSection from './components/sections/ThirdSection.vue'
import FourthSection from './components/sections/FourthSection.vue'
export default {
  name: 'App',
  components: {
    MainLayout,
    FirstSection,
    SecondSection,
    ThirdSection,
    FourthSection
  }
  
}
</script>