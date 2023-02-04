<template>
    <div class=" w-full bg-tertiary">
        <Header />
        <div class="w-full h-full">
            <slot></slot>
        </div>
    </div>
</template>


<script>
import Header from '../Header.vue'

export default {
    components: {
        Header
    },
}
</script>