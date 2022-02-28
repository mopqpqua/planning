<template>
    <li
        :class="[
            'm-option',
            {'m-option--active': active}
        ]"
        @click="$emit('option-chosen', option)"
    >
        <slot name="image"></slot>
        {{ label }}
    </li>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'AOption',
    props: {
        label: String,
        active: Boolean,
        option: [String, Number, Object, Array],
    },
    emits: ['option-chosen'],
});
</script>

<style src="./m-option.css"/>
