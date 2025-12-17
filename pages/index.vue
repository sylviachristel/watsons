<template>
  <div class="home-page bg-gray-50">
    <!-- Hero Section -->
    <HeroSection />

    <!-- Featured Products Section -->
    <section class="featured-products bg-white w-full" style="padding-top: 40px; padding-bottom: 40px;">
      <div class="container mx-auto px-0" style="width: 1160px;">
        <div class="flex items-center gap-[40px] mb-[40px] w-full">
          <div class="h-px flex-1 hidden md:block" style="background-color: #0099A81A;"></div>
          <h2 class="font-roboto font-medium text-2xl text-[#0099A8] whitespace-nowrap">
            Featured products
          </h2>
          <div class="h-px flex-1 hidden md:block" style="background-color: #0099A81A;"></div>
        </div>
        
        <!-- Loading State -->
        <CommonLoading v-if="loading" />
        
        <!-- Error State -->
        <CommonErrorMessage 
          v-else-if="error" 
          :message="error" 
          @retry="loadProducts" 
        />
        
        <!-- Products Grid -->
        <ProductGrid v-else :products="products" />
      </div>
    </section>

    <!-- Newsletter Sign Up Section -->
    <NewsletterSignup />

    <!-- Campaign Banner Section -->
    <CampaignBanner />
  </div>
</template>

<script setup>
import { useProducts } from '~/composables/useProducts'
const { products, loading, error, loadProducts } = useProducts()

// Load products when component mounts
onMounted(() => {
  loadProducts(4)
})
</script>
