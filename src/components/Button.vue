<template>
    <button
        class="grid place-items-center ring-blue-400 transition-colors duration-300 focus:outline-none focus-visible:ring-2"
        :class="{
            'h-[64px] w-[300px] md:h-[82px] md:w-[360px] text-[28px] leading-[34px] rounded-[24px]':
                size === 'base',
            'py-2.5 px-[50px] rounded-2xl leading-[26px]': size === 'sm',
            'bg-white hover:bg-zinc-100 active:bg-zinc-200 shadow-[0_0_40px_0_rgba(0,0,0,0.1)]':
                variant === 'white',
            'bg-black text-white hover:bg-zinc-700 active:bg-zinc-800':
                variant === 'black',
        }"
    >
        <slot />
    </button>
</template>

<script setup lang="ts">
import { PropType } from 'vue';

defineProps({
    size: {
        type: String as PropType<'base' | 'sm'>,
        default: 'base',
    },
    variant: {
        type: String as PropType<'white' | 'black'>,
        default: 'white',
    },
});
</script>
