<template>
    <div>
        <p @click="showModal" class="gm">Sign in/up</p>
        <b-modal ref="myModalRef" size="lg" hide-footer title="Sign in/up">
            <p>TODO</p>
        </b-modal>
    </div>
</template>

<script>
import modal from './modal'
export default {
  name: 'signinupgame',
  mixins: [modal]
}
</script>

<style scoped>

</style>


