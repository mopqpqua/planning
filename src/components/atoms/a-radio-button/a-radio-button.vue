<template>
    <label class="a-radio-button">
        <input
            class="visually-hidden a-radio-button__hidden-input"
            type="radio"
            :checked="checked"
            :disabled="disabled"
        />
        <span
            :class="[
                'a-radio-button__radio-button',
                {'a-radio-button__radio-button--checked': checked},
            ]"
        >
        </span>
    </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ARadioButton',
    props: {
        checked: Boolean,
        disabled: Boolean,
    },
});
</script>

<style src="./a-radio-button.css"/>
