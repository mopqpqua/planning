<template>
    <label
        class="a-checkbox"
    >
        <input
            class="visually-hidden a-checkbox__hidden-checkbox"
            type="checkbox"
            :checked="checked"
            :disabled="disabled"
        />
        <span class="a-checkbox__checkbox">
            <img
                v-if="checked && !disabled"
                class="a-checkbox__mark"
                src="@assets/icons/icon-checkbox-mark.svg"
                alt="checkbox mark"
            />
            <img
                v-if="checked && disabled"
                class="a-checkbox__mark"
                src="@assets/icons/icon-checkbox-dark-mark.svg"
                alt="checkbox mark"
            />
        </span>
    </label>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ACheckbox',
    props: {
        checked: Boolean,
        disabled: Boolean,
    },
});
</script>

<style src="./a-checkbox.css"/>
