<template>
    <div class="m-multi-menu">
        <div v-for="(options, index) of optionsArray" :key="`options${index}`" class="m-multi-menu__submenu">
            <MMenu :options="options"/>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import MMenu from '@molecules/m-menu';

export default defineComponent({
    name: 'MMultiMenu',
    components: { MMenu },
    props: {
        optionsArray: {
            type: Array,
            default: () => ([]),
        },
    },
    setup() {
    },
});
</script>

<style src="./m-multi-menu.css"/>
