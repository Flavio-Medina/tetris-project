<template>
    <div>
        <b-button @click="showModal" class="btn btn-primary siu">
            <p class="btnFont">Sign in/up</p>
        </b-button>
        <b-modal ref="myModalRef" size="lg" hide-footer title="Sign in/up">
            <p>TODO</p>
        </b-modal>
    </div>
</template>

<script>
import modal from './modal'
export default {
  name: 'signinup',
  mixins: [modal]
}
</script>

<style scoped>
.btnFont {
    font-size: 2vh;
    line-height: 2vh;
    margin-bottom: 0.5vh;
}

.siu {
    position: fixed;
    top: 10px;
    right: 10px;
}
</style>


