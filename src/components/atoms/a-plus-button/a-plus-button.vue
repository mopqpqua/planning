<template>
    <button
        class="a-plus-button"
        :disabled="disabled"
    >
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'a-plus-button',
    props: {
        big: Boolean,
        disabled: Boolean,
    },
});
</script>

<style src="./a-plus-button.css">
</style>
