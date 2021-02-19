<template>
  <div class="preview">
    <img class="preview__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/9/95/Vue.js_Logo_2.svg"
          alt="Vue logo">
    <h1 class="preview__title">Hobbies app</h1>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class Preview extends Vue {}
</script>

<style lang="scss" src="./Preview.scss" scoped />
