<template>
    <div class="view-table-filter-search">
        <datepicker :typeable="true" :format="data.format" :language="locale" :placeholder="data.labelFrom" :monday-first="true" v-model="data.value.from" @closed="closed"></datepicker>
        <datepicker :typeable="true" :format="data.format" :language="locale" :placeholder="data.labelTo" :monday-first="true" v-model="data.value.to" @closed="closed"></datepicker>
    </div>
</template>

<script lang="ts">
    import { Vue, Component, Prop } from "vue-property-decorator";
    import {en, de} from 'vuejs-datepicker/dist/locale'
    import DateBetweenFilter from "@enhavo/app/Grid/Filter/Model/DateBetweenFilter";

    @Component
    export default class FilterTextComponent extends Vue {
        name: string = 'filter-date-between';

        @Prop()
        data: DateBetweenFilter;

        get locale() {
            if(this.data.locale == 'de') {
                return de
            }
            return en;
        }

        get hasFromValue(): boolean {
            if(this.data.value.from == "") {
                return false;
            } else if(this.data.value.from == null) {
                return false;
            }

            return true;
        }

        get hasToValue(): boolean {
            if(this.data.value.to == "") {
                return false;
            } else if(this.data.value.to == null) {
                return false;
            }

            return true;
        }

        get placeholder(): string {
            return (this.data && this.data['placeholder']) ? this.data['placeholder'] : null;
        }

        keyup(event: Event) {
            if(event.keyCode == 13) {
                this.$emit('apply')
            }
        }

        closed() {
            // Bugfix: The datepicker value sometimes gets lost when losing focus. To fix this we save it, deliberately unfocus and restore it whenever the datepicker closes.
            let valueFrom = this.data.value.from;
            let valueTo = this.data.value.to;
            $(this.$el).find('input').blur();
            this.data.value.from = valueFrom;
            this.data.value.to = valueTo;
        }
    }
</script>





