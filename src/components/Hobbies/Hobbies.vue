<template>
  <div class="hobbies">
    <h1 class="hobbies__title">{{ title }}</h1>
    <hr class="hobbies__divider">
    <h2 class="hobbies__subtitle">{{ subtitle }}</h2>
    <form v-if="isMyHobbies" @submit="submitForm">
      <input type="text" class="hobbies__input" v-model="inputValue">
    </form>
    <div class="hobbies__items-list">
      <template v-for="item in (isItemsListExpanded ? items : itemsShortList)">
        <hobby
          :key="item.id"
          :item="item"
          :isMyHobby="isMyHobbies"
        />
      </template>
      <button
        v-if="!isItemsListExpanded && itemsCountRemainedToExpand > 0"
        class="hobbies__more-btn"
        @click="isItemsListExpanded = true">
        Еще {{ itemsCountRemainedToExpand }} интереса
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Hobby from '../Hobby/Hobby.vue';
import { Hobby as IHobby } from '../../types/types';

@Component({
  components: { Hobby },
  methods: {
    ...mapActions(['addNewHobby']),
  },
})
export default class Hobbies extends Vue {
  @Prop({ default: 'О себе' }) title!: string

  @Prop({ default: 'Хобби' }) subtitle!: string

  @Prop({ default: false }) isMyHobbies!: boolean

  @Prop({ required: true }) items!: IHobby[]

  private shortListItemsCount = 2;

  public isItemsListExpanded = false

  public inputValue = ''

  private addNewHobby!: (hobbyName: string) => void

  public submitForm($event: Event): void {
    $event.preventDefault();

    if (this.inputValue) {
      this.addNewHobby(this.inputValue);
      this.inputValue = '';
    }
  }

  get itemsShortList() {
    return this.items.slice(0, this.shortListItemsCount);
  }

  get itemsCountRemainedToExpand() {
    return this.items.length - this.itemsShortList.length;
  }
}
</script>

<style lang="scss" src="./Hobbies.scss" scoped />
