<template>
  <div>
    <b-button @click="showModal" class="col align-self-center btn btn-primary btnFont">
      Instructions
    </b-button>
    <b-modal ref="myModalRef" hide-footer title="Instructions">
      <p class="my-4">You have to make full horizontal lines with the different shaped blocks that fall into the game area. Full lines will then disappear and provide points. The more lines you make at the same time, the more points you earn.</p>     <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close</b-btn>
    </b-modal>
  </div>
</template>

<script>
export default {
  name: 'instructions',
  methods: {
    showModal () {
      this.$refs.myModalRef.show()
    },
    hideModal () {
      this.$refs.myModalRef.hide()
    }
  }
}
</script>

<style scoped>
.btnFont {
    font-size: 10vh;
    line-height: 10vh;
}
.btn-primary {
    margin-bottom: 10vh;
    background-color: hotpink;
}
</style>