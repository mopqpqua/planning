<template>
    <button
        class="a-plus-button"
        :disabled="disabled"
    >
        <img
            class="a-plus-button__icon"
            src="@assets/icons/icon-plus.svg"
            alt="icon plus"/>
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'a-plus-button',
    props: {
        disabled: Boolean,
    },
});
</script>

<style src="./a-plus-button.css">
</style>
