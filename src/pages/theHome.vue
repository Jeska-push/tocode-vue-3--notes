<template>

  <Form @onSubmit="handleSubmit" />
  <List @onRemove="handleRemove" :items="notes" />
</template>

<script>
import Form from '@/components/Notes/Form.vue'
import List from '@/components/Notes/List.vue'

export default {
  components: { Form, List },

  data() {
    return {
      notes:this.$store.state.notes  
    }
  },
  mounted() {
     this.getNotes
  },
  watch: {
    notes: {
      handler(updatedList) {
        localStorage.setItem('notes', JSON.stringify(updatedList))
    },
    deep: true
    }
  },
  methods: {
    handleSubmit( {name, t}) { 
     console.log( {name, t})
  },
    handleRemove(index) {
      console.log(index)
       this.$store.dispatch('getHandleRemove', index)
    },
 computed: {
    getlocalStorage() {
      return this.$store.getters.getlocalStorage    
    },
    getNotesHome() {
       return this.$store.getters.getNotesHome       
}, 
}
  }}
</script>
