<template>
    <main>
        <MOption>
            <template #image>
                <img src="@assets/icons/icon-plus.svg"/>
            </template>
        </MOption>
    </main>
</template>

<script>
import MOption from '@molecules/m-option/m-option';

export default {
    name: 'App',
    components: { MOption },
};
</script>
