<template>
    <div class="app-view">
        <view-view></view-view>
        <flash-messages></flash-messages>
        <modal-component></modal-component>
        <action-bar></action-bar>
        <grid-grid></grid-grid>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import '@enhavo/app/assets/styles/view.scss'

@Component()
export default class AppView extends Vue {

}
</script>
