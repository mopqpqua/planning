<template>
    <div
        :class="[
            'a-switch',
            {'a-switch--checked': modelValue},
            {'a-switch--disabled': disabled},
        ]"
        @click="updateValue"
    ></div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ASwitch',
    props: {
        modelValue: Boolean,
        disabled: Boolean,
    },
    emits: ['update:modelValue'],
    methods: {
        updateValue() {
            if (!this.disabled) {
                this.$emit('update:modelValue', !this.modelValue);
            }
        },
    },
});
</script>

<style src="./a-switch.css"/>
