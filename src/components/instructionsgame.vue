<template>
  <div>
    <p @click="showModal" class="gm">Instructions</p>
    <b-modal ref="myModalRef" size="lg" hide-footer title="Instructions">
      <p class="my-4">You have to make full horizontal lines with the different shaped blocks that fall into the game area. Full lines will then disappear and provide points. The more lines you make at the same time, the more points you earn.</p>
    </b-modal>
  </div>
</template>

<script>
import modal from './modal'
export default {
  name: 'instructions',
  mixins: [modal]
}
</script>