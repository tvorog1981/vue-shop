<template>
    <div class="v-main-wrapper">
       <v-catalog />
    </div>
</template>


<script>

import vCatalog from '@/components/v-catalog'

export default {
  components: { vCatalog },
    
   name:'v-main-wrapper',
   component:{
vCatalog
   }
}
</script>
<style>
.v-main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:  900px;
    margin: 0 auto;
}
</style>
