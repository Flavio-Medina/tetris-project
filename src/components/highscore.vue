<template>
  <div>
    <b-button @click="showModal" class="col align-self-center btn btn-primary">
      <p class="btnFont">High Score</p>
    </b-button>
    <b-modal ref="myModalRef" size="lg" hide-footer title="High Score">
      <b-table :items="items"></b-table>
    </b-modal>
  </div>
</template>

<script>
const items = [
  { '': 1, name: 'First', score: 1000 },
  { '': 2, name: 'Second', score: 900 },
  { '': 3, name: 'Third', score: 800 },
  { '': 4, name: 'Fourth', score: 700 },
  { '': 5, name: 'Fifth', score: 600 }
]
import modal from './modal'
export default {
  name: 'highscore',
  data () {
    return {
      items: items
    }
  },
  mixins: [modal]
}
</script>