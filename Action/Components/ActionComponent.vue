<template>
    <div @click="execute($event)" class="action">
        <div class="action-icon">
            <i v-bind:class="['icon', icon]" aria-hidden="true"></i>
        </div>
        <div class="label">{{ data.label }}</div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import ActionInterface from "@enhavo/app/Action/ActionInterface";

    @Component
    export default class ActionComponent extends Vue {
        name: 'action-component';
        @Prop()
        data: ActionInterface;
        @Prop()
        clickStop: boolean;

        get icon(): string {
            return (this.data && this.data.icon) ? 'icon-' + this.data.icon : '';
        }

        execute($event) {
            if(this.clickStop) {
                $event.stopPropagation();
            }
            this.data.execute()
        }
    }
</script>