<template>
  <div class="tags-list">
     <div 
       class="tag-item" 
       v-for="item in items" 
       :key="item" 
       :class="{'isPreview': isPreview,'isActive': item.isActive}" 
       @click="item.isActive = !item.isActive, $emit('onItemClick', item)"
     >
       <span>{{ item.name }}</span>
     </div>
  </div>
 </template>
 
 
 <script>
 export default {
 
   props: {
     items: {
         type: Array,
         reqired:false
     },
     isActive: {
         type: Boolean,
         default:false
       },
     isPreview: {
       type: Boolean,
       default:false
     },
   },
 
 }
 
 </script>
 
 
 <style lang="scss">
 .tags-list {
   padding: 10px 0;
   display: flex;
   justify-content: center;
 }
 .tag-item {
   padding: 8px 22px;
   margin-right: 10px;
   background-color: #fff;
   border-radius: 22px;
   user-select: none;
   cursor: pointer;
   &.isActive {
     background-color:blue;
     color:white;
   }
   &.isPreview {
     padding: 0;
     color: #444ce0;
     cursor: default;
     &:before {
       content: '#';
     }
   }
   &:last-child {
     margin-right: 0;
   }
 }
 </style>
 