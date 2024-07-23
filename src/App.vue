<template>
    <div
        class="font-sans bg-[#CCCCCC] px-5 lg:px-10 w-screen h-screen grid place-items-center"
    >
        <Button @click="openDialog"> Open Dialog </Button>
        <Dialog
            v-model="open"
            :dialogTitle="content.dialogTitle"
            :dialogText="content.dialogText"
        />
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import Button from './components/Button.vue';
import Dialog from './components/Dialog.vue';

const content = {
    dialogTitle: 'Lorem Ipsum',
    dialogText:
        'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. ',
};

const open = ref(false);

const openDialog = () => {
    setTimeout(() => {
        open.value = true;
    }, 10);
};
</script>
