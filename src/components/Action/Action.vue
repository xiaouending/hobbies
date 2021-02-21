<template>
  <div v-if="isActive && !!actionType"
       class="action"
       :class="isClickable && 'clickable'"
       :type="actionType"
       @click="clickEmit(iconType)">
    <div class="action__icon"></div>
    <span v-if="!!text" class="action__text">{{ text }}</span>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { ActionTypes } from '../../types/types';

@Component({})
export default class Action extends Vue {
  @Prop({ required: true }) type!: ActionTypes

  @Prop() text!: string

  @Prop({ default: false }) isClickable!: boolean

  @Prop({ default: true }) isActive!: boolean

  get actionType() {
    return Object.values(ActionTypes).includes(this.type) ? this.type : '';
  }

  public clickEmit(iconType: ActionTypes) {
    this.$emit('click', iconType);
  }
}
</script>

<style lang="scss" src="./Action.scss" scoped />
