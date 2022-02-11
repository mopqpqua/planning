<template>
    <button class="a-button">{{ label }}</button>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'a-button',
    props: {
        primary: Boolean,
        label: {
            type: String,
            default: 'click',
        },
    },
});
</script>
