<template>
    <label
        class="a-checkbox"
    >
        <input
            class="visually-hidden"
            type="checkbox"
            :checked="checked"
            :disabled="disabled"
        />
        <span class="a-checkbox__checkbox">
            <img
                v-if="checked"
                :class="[
                    'a-checkbox__mark',
                    {'a-checkbox__mark--disabled': disabled},
                ]"
                src="@assets/icons/icon-checkbox-mark.svg"
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
    methods: {
        check() {
            this.checked = !this.checked;
        },
    },
});
</script>

<style src="./a-checkbox.css"/>
