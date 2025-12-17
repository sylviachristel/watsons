<template>
  <div class="product-card">
    <div class="product-image-container">
      <img 
        :src="product.image" 
        :alt="product.title"
        class="product-image"
      />
      <!-- Hover Overlay -->
      <div class="product-overlay">
        <button class="overlay-btn">
          <img src="~/assets/css/icon/quick-view-hover.png" alt="" style="width: 16px; height: 16px; object-fit: contain;" />
          Quick View
        </button>
        
        <!-- Custom Divider -->
        <div class="divider"></div>

        <button class="overlay-btn">
          <img src="~/assets/css/icon/add-hover.png" alt="" style="width: 16px; height: 16px; object-fit: contain;" />
          Add
        </button>
      </div>
    </div>
    
    <div class="product-info">
      <div class="product-price">{{ product.price }}</div>
      <h3 class="product-title" v-html="product.title"></h3>
    </div>
  </div>
</template>

<script setup>
defineProps({
  product: {
    type: Object,
    required: true
  }
})
</script>

<style scoped>
.product-card {
  display: flex;
  flex-direction: column;
  padding: 16px;
  gap: 12px;
  background: #FFFFFF;
  border: 1px solid #ECECEC80;
  box-shadow: 0px 1px 8px 0px #0000000A;
  border-radius: 6px;
  transition: all 0.2s ease;
  position: relative;
  overflow: hidden;
  height: 328px;
}

.product-card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  border-color: transparent; 
}

.product-card:hover .product-image-container {
  border: 1px solid #7C3AED;
  box-shadow: 0 0 0 1px #7C3AED; 
}

.product-image-container {
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  background: #FFFFFF;
  position: relative;
  border: 1px solid transparent;
  transition: border-color 0.2s, box-shadow 0.2s;
  border-radius: 4px; 
}

.product-image {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  object-fit: contain;
}

.product-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 48px; 
  background: #000000CC; 
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: translateY(100%);
  transition: all 0.3s ease;
}

.product-card:hover .product-overlay {
  opacity: 1;
  transform: translateY(0);
}

.overlay-btn {
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px; 
  background: transparent;
  border: none;
  color: #FFFFFF;
  font-family: 'Roboto', sans-serif;
  font-size: 14px; 
  font-weight: 500;
  cursor: pointer;
  padding: 0 16px; 
  transition: background 0.2s;
  white-space: nowrap;
}

.overlay-btn:hover {
  background: rgba(255, 255, 255, 0.2);
}

.divider {
  width: 0.5px;
  height: 32px;
  background-color: #ECECEC;
  opacity: 0.2;
}


.product-info {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-left: 8px;
  padding-bottom: 8px;
}

.product-price {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #1F2937; 
}

.product-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #485363; 
  margin: 0;
  min-height: 40px;
}
</style>