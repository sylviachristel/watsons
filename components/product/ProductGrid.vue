<template>
  <div class="product-grid">
    <div 
      v-if="products && products.length > 0"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 mx-auto"
      style="width: 1160px; gap: 40px;"
    >
      <ProductCard 
        v-for="product in products" 
        :key="product.id"
        :product="product"
        @add-to-cart="handleAddToCart"
      />
    </div>
    
    <div v-else class="text-center py-12">
      <p class="text-gray-500 text-lg">No products found</p>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  products: {
    type: Array,
    default: () => []
  }
})

const handleAddToCart = (product) => {
  console.log('Adding to cart:', product)
  // Cart functionality will be implemented later
}
</script>