<template>
    <div class="view-component" :style="{order: position, maxWidth: data.width}" :class="{minimized: data.minimize, focused: data.focus}">
        <div class="toolbar">
            <strong v-if="!data.minimize">{{ data.label }}</strong>
            <div class="actions">
                <div @click="open()" v-if="!data.minimize" class="action"><span class="icon icon-open_in_new"></span></div>
                <div @click="close()" v-if="!data.minimize" class="action"><span class="icon icon-close"></span></div>
                <div @click="minimize()" v-if="!data.minimize" class="action minimize"><span class="icon icon-keyboard_arrow_left"></span></div>
                <div @click="maximize()" v-if="data.minimize" class="action maximize"><span class="icon icon-keyboard_arrow_right"></span></div>
            </div>
        </div>
        <div class="view-component-inner" v-show="!data.minimize">
            <overlay-container v-if="!loaded">
                <slot>
                    <loading-screen></loading-screen>
                </slot>
            </overlay-container>
            <component v-bind:is="data.component" v-bind:data="data"></component>
        </div>
        <div class="view-resizer" @click="data.minimize ? maximize() : null">
            <div class="view-label" v-if="data.minimize">{{ data.label }}</div>
        </div>
    </div>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import CloseEvent from  '@enhavo/app/ViewStack/Event/CloseEvent';
import ArrangeEvent from  '@enhavo/app/ViewStack/Event/ArrangeEvent';
import ViewInterface from "@enhavo/app/ViewStack/ViewInterface";
import MinimizeEvent from "@enhavo/app/ViewStack/Event/MinimizeEvent";
import MaximizeEvent from "@enhavo/app/ViewStack/Event/MaximizeEvent";

@Component()
export default class ViewComponent extends Vue
{
    @Prop()
    data: ViewInterface;

    mounted() {
        this.eventDispatcher.dispatch(new ArrangeEvent());
    }

    destroyed() {
        this.eventDispatcher.dispatch(new ArrangeEvent());
    }

    close() {
        this.eventDispatcher.dispatch(new CloseEvent(this.data.id));
    }

    open() {
        let url = this.$stateManager.generateViewUrl(this.data);
        window.open(url, '_blank');
    }

    minimize() {
        this.eventDispatcher.dispatch(new MinimizeEvent(this.data.id, true));
        this.eventDispatcher.dispatch(new ArrangeEvent());
    }

    maximize() {
        this.eventDispatcher.dispatch(new MaximizeEvent(this.data.id, true));
        this.eventDispatcher.dispatch(new ArrangeEvent());
    }

    get position(): number
    {
        return this.data.position;
    }

    get loaded(): boolean
    {
        return this.data.loaded;
    }
}
</script>
