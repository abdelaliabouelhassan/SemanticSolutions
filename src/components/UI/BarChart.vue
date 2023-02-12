<template>
    <Vue3Lottie :animationData="AstronautJSON" class=" w-full h-full" />
</template>


<script>
import Chart from '../../assets/lottie/chart1.json'
export default {
    data() {
        return {
            AstronautJSON: Chart
        }
    }
}
</script>