<template>
  <div class=""> hello home
    <div>Edit me</div>
  </div>
</template>


<script>

import items from '@/seeders/items.js'


export default { 
components:{


},
data() {
  return {
   items:items,
   settings:{
    itemsToShow:2,
    wrapAround:true,
    snapAlign:'center'
   },
   breakpoints: {
    300: {
      itemsToShow:1,
    },
    700: {
      itemsToShow:2,
},
    
  },
  }
}
}
</script>
<style>
.card-stats {
 

}



</style>