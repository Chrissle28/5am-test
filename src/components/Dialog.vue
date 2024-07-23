<template>
    <Transition
        enter-from-class="opacity-0 scale-90"
        enter-to-class="opacity-100 scale-100"
        leave-from-class="opacity-100 scale-100"
        leave-to-class="opacity-0 scale-90"
    >
        <div
            v-if="modelValue"
            v-click-outside="closeDialog"
            @click="closeDialog()"
            class="fixed [width:calc(100%-40px)] lg:w-[800px] top-1/2 left-1/2 z-50 p-6 bg-white shadow-[0_0_40px_0_rgba(0,0,0,0.1)] transition duration-300 -translate-x-1/2 -translate-y-1/2 rounded-[24px]"
        >
            <div class="flex justify-between items-center">
                <div class="font-bold text-[28px] leading-[34px]">
                    {{ dialogTitle }}
                </div>
                <ButtonClose />
            </div>
            <p class="mt-4 font-medium text-black/50 max-w-[600px]">
                {{ dialogText }}
            </p>
            <div class="my-6 w-full h-px bg-black/20"></div>
            <Button
                @click.stop="toggleAlert()"
                size="sm"
                variant="black"
                class="ml-auto"
            >
                Let's Go!
            </Button>
        </div>
    </Transition>
</template>

<script setup lang="ts">
import Button from './Button.vue';
import ButtonClose from './ButtonClose.vue';

const emit = defineEmits(['update:modelValue']);

const props = defineProps({
    dialogTitle: {
        type: String,
        required: true,
    },
    dialogText: {
        type: String,
        required: true,
    },
    modelValue: {
        type: Boolean,
        default: false,
    },
});

const closeDialog = () => {
    if (props.modelValue) {
        emit('update:modelValue', false);
    }
};

const toggleAlert = () => {
    alert("Let's go!");
};
</script>
