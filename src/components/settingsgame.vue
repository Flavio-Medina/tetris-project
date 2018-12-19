<template>
  <div>
    <p @click="showModal" class="gm">Settings</p>
    <b-modal ref="myModalRef" size="lg" hide-footer title="Settings">
      <p class="my-4">TODO</p>
    </b-modal>
  </div>
</template>

<script>
import modal from './modal'
export default {
  name: 'settingsgame',
  mixins: [modal]
}
</script>