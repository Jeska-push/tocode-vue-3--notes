<template>
    <div class="note-form_wrapper">
 <form class="note-form" @submit.prevent="onSubmit">
   <textarea
     type="text"
     required
     v-model="value"
     placeholder="Type ur note"
     />
     <TagsList
     :isActive="isActive"
      @onItemClick="handleTagClick" 
      :items="tags"
      />
     <button class="btn btnPrimary" type="submit">Add new note</button>

 </form> 
 </div>   
</template>

<script> 
import TagsList from '@/components/UI/TagsList.vue'
export default {
  components:{
TagsList
},
    data() {
     return {
      value:'',
      t:'',
      tags: [
        {
          name:'home',
          isActive:false,
          id:1
        }, 
        {
          name:'work',
          isActive:false,
          id:2
        }, 
        {
          name:'travel',
          isActive:false, 
          id:3
        },
     ],
     
     }  
    
},
methods: {
  onSubmit() {
 
   const name = this.value;
   const tag = this.tags;
   const t = tag.filter(x => x.isActive == true)
  
   this.$emit('onSubmit', {name, t})
   this.value = ''
   t.forEach(item =>
   item.isActive = !item.isActive)
  }
    
    },
    handleTagClick(tag) {
      console.log(tag)
    },
 
  }


</script>

<style lang="scss" >
.note-form{
display: flex;
flex-direction: column;
max-width:600px;
width: 100%;
 textarea {
  margin-bottom: 0;
 }
}
.note-form_wrapper {
display: flex;
flex-direction: column;
align-items: center;
}
.isActive {
    background-color:blue;
    color:white;
}
</style>
