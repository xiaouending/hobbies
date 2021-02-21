<template>
  <div class="hobby">
    <div class="hobby__action-wrapper wrapper--left show-on-hover">
      <action
        v-if="isMyHobby"
        type="close"
        :isClickable="true"
        @click="removeHobbyFromMyHobbies(item)"
      />
      <action
        v-else
        type="add"
        :isClickable="true"
        @click="addHobbyToMyHobbies(item)"
      />
    </div>
    <p class="hobby__text">{{ item.name }}</p>
    <div v-if="!isMyHobby"
          class="hobby__action-wrapper wrapper--right attached show-on-hover">
      <action
        type="warn"
        text="пожаловаться"
        :isClickable="true"
        @click="complainForHobby(item)"
      />
    </div>
    <div v-if="isMyHobby && item.isAdded"
          class="hobby__action-wrapper wrapper--right">
      <action
        type="ok"
        text="добавлено в ваши увлечения"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';
import { mapActions } from 'vuex';
import Action from '../Action/Action.vue';
import { Hobby as IHobby } from '../../types/types';

@Component({
  components: { Action },
  methods: {
    ...mapActions(['addHobbyToMyHobbies', 'removeHobbyFromMyHobbies']),
  },
})
export default class Hobby extends Vue {
  @Prop({ required: true }) item!: IHobby

  @Prop({ required: true }) isMyHobby!: boolean

  public addHobbyToMyHobbies!: (hobby: IHobby) => void

  public removeHobbyFromMyHobbies!: (hobby: IHobby) => void

  // @ts-ignore
  public complainForHobby(hobby: IHobby): void {
    alert(`Вы пожаловались на интерес "${hobby.name}"`);
  }
}
</script>

<style lang="scss" src="./Hobby.scss" scoped />
