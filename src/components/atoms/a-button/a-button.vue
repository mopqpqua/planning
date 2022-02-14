<template>
    <button
        :class="[
            'a-button',
            {'a-button--primary': primary},
            {'a-button--secondary': secondary},
            {'a-button--text': text},
            {'a-button--big': big},
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
        big: Boolean,
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
