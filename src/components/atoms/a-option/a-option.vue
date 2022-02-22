<template>
    <li
        :class="[
            'a-option',
            {'a-option--active': active}
        ]"
        @click="$emit('option-chosen', option)"
    >
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

<style src="./a-option.css"/>
