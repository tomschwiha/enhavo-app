<template>
    <div class="menu-dropdown">
        <div class="menu-dropdown-child menu-dropdown-input">
            <v-select :clearable="false" @input="change" label="label" :placeholder="data.label" :value="data.value" :options="data.choices" :searchable="false"></v-select>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import MenuDropdown from '@enhavo/app/Menu/Model/MenuDropdown';

@Component()
export default class MenuDropdownComponent extends Vue {
    name: string = 'menu-dropdown';

    @Prop()
    data: MenuDropdown;

    change(value): any {
        this.data.change(value);
    }
}
</script>