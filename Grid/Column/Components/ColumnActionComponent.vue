<template>
    <div class="view-table-col-text">
        <component class="action-container" v-bind:is="getAction().component" v-bind:data="getAction()" :click-stop="true"></component>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import ActionColumn from "@enhavo/app/Grid/Column/Model/ActionColumn";
    import ActionInterface from "@enhavo/app/Action/ActionInterface";

    @Component()
    export default class ColumnActionComponent extends Vue {
        name: string = 'column-action';

        @Prop()
        data: string;

        @Prop()
        column: ActionColumn;

        action: ActionInterface = null;

        getAction() {
            if(this.action == null) {
                this.action = this.column.getAction(this.data);
            }
            return this.action;
        }
    }
</script>
