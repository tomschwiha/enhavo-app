<template>
    <div class="view-table-filter-search">
        <div class="checkbox-container">
            <input type="checkbox" v-on:change="change" :checked="data.value" />
            <span></span>
            <div class="label">{{ data.label }}</div>
        </div>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop, Watch } from "vue-property-decorator";
    import AbstractFilter from "@enhavo/app/Grid/Filter/Model/AbstractFilter";

    @Component
    export default class FilterCheckboxComponent extends Vue {
        name: string = 'filter-checkbox';

        @Prop()
        data: AbstractFilter;

        change() {
            this.data.value = !this.data.value;
        }
    }
</script>







