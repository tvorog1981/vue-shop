<template>
    <div class="v-catalog">
        
        <div v-for= "n in 10 " :key="n">
            <v-catalog-item/>
        </div>
      
    </div>
</template>


<script>
import vCatalogItem from '@/components/v-catalog-item'

export default {
  components:{
vCatalogItem
  }
}
</script>
<style>
.v-catalog{

}
</style>
