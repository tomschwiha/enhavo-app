<template>
    <div class="flash-message" :class="message.type">
        {{ message.message }}
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import Message from "@enhavo/app/FlashMessage/Message";

    @Component()
    export default class AppView extends Vue {
        name = 'flash-message';

        @Prop()
        message: Message;
    }
</script>