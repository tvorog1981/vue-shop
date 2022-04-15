<template>
    <div class="v-main-wrapper">
       <v-catalog />
    </div>
</template>


<script>

import vCatalog from '@/components/v-catalog'
import vCard from '@/components/v-card'

export default {
  components: { vCatalog },
    
   name:'v-main-wrapper',
   component:{
    vCatalog,vCard
   }
}
</script>
<style lang="sass">
.v-main-wrapper{
    display: flex;
    justify-content: center;
    align-items: center;
    max-width:  900px;
    margin: 0 auto;
    flex-direction: column;
    background-color: $bg;
}
</style>
