<template>
  <b-modal id="hs" size="lg" hide-footer no-enforce-focus title="High Score">
    <b-table :items="items"></b-table>
  </b-modal>
</template>

<script>
const items = [
  { "": 1, name: "First", score: 1000 },
  { "": 2, name: "Second", score: 900 },
  { "": 3, name: "Third", score: 800 },
  { "": 4, name: "Fourth", score: 700 },
  { "": 5, name: "Fifth", score: 600 }
];
export default {
  data() {
    return {
      items: items
    };
  }
};
</script>

<style>
@import '../assets/css/modal.css';
</style>
