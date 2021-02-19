<template>
  <div v-if="isActive && !!iconType"
       class="action"
       :class="isClickable && 'clickable'"
       @click="clickEmit(iconType)">
    <div class="action__icon" :type="iconType"></div>
    <span v-if="!!text" class="action__text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ActionIconTypes } from '../../types/types';

@Component({})
export default class Action extends Vue {
  @Prop({ required: true }) icon!: ActionIconTypes

  @Prop() text!: string

  @Prop({ default: false }) isClickable!: boolean

  @Prop({ default: true }) isActive!: boolean

  get iconType() {
    return Object.values(ActionIconTypes).includes(this.icon) ? this.icon : '';
  }

  public clickEmit(iconType: ActionIconTypes) {
    this.$emit('click', iconType);
  }
}
</script>

<style lang="scss" src="./Action.scss" scoped />
