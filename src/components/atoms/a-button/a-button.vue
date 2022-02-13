<template>
    <button
        :class="[
            'a-button',
            {'a-button--primary': primary},
            {'a-button--secondary': secondary},
            {'a-button--text': text},
        ]"
        :disabled="disabled"
    >
        {{ label }}
    </button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'a-button',
    props: {
        primary: Boolean,
        secondary: Boolean,
        text: Boolean,
        disabled: Boolean,
        label: {
            type: String,
            default: 'click',
        },
    },
});
</script>

<style src="./a-button.css">
</style>
