<template>
  <div id="app">
    <preview />
    <hobbies
      title="О себе"
      subtitle="Хобби"
      :isMyHobbies="true"
      :items="myHobbies"
    />
    <hobbies
      title="Интересы друга"
      subtitle="Хобби"
      :isMyHobbies="false"
      :items="friendHobbies"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import { mapActions, mapGetters } from 'vuex';
import Hobbies from './components/Hobbies/Hobbies.vue';
import Preview from './components/Preview/Preview.vue';

@Component({
  components: { Hobbies, Preview },
  computed: {
    ...mapGetters(['myHobbies', 'friendHobbies']),
  },
  methods: {
    ...mapActions(['initializeState']),
  },
})
export default class App extends Vue {
  public myHobbies!: string[]

  public friendHobbies!: string[]

  private initializeState!: () => void

  created() {
    this.initializeState();
  }
}
</script>

<style lang="scss">
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
