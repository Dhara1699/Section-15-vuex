<template>
    <button @click="increase({ value: 2 })">Add 2</button>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    methods: {
      /*  addOne() {
            this.$store.dispatch('increase' , { value: 2 });
        }
        */
       ...mapActions('number',['increase'])
    }
}
</script>