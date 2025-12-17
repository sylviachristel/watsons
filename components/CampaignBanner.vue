<template>
  <section class="campaign-banner-section">
    <div class="container mx-auto px-4 h-full relative">
      <div class="banner-content h-full">
        <div class="center-container">
          <!-- Left Products (pngwing 1) -->
          <div class="products-left">
            <img src="/images/nivea-products-left.png" alt="NIVEA Products" />
          </div>

          <!-- Body (Card) -->
          <div class="banner-body">
            <!-- Top Text -->
            <div class="top-text">
              <p class="paragraph-small">EN SEVDİĞİNİZ ÜRÜNLER</p>
              <p class="paragraph-large">TEK TIKLA KAPINIZDA!</p>
            </div>

            <!-- Bottom Text -->
            <div class="bottom-text">
              <p class="discount-number">60 %</p>
              <p class="discount-label">DISCOUNT</p>
            </div>

            <!-- Button -->
            <button class="shop-button">
              <div class="button-wrapper">
                <span class="button-label">SHOP NOW</span>
              </div>
            </button>
          </div>

          <!-- Right Products (nivea 1) -->
          <div class="products-right">
            <img src="/images/nivea-products-right.png" alt="NIVEA Products" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
</script>

<style scoped>

.campaign-banner-section {
  position: relative;
  width: 100%;
  height: clamp(250px, 28vw, 400px);
  background: url('/images/banner-pattern.png') repeat center center / 50%,
              linear-gradient(0deg, rgba(19, 138, 150, 0.3), rgba(19, 138, 150, 0.3)),
              linear-gradient(88.28deg, rgba(16, 160, 174, 0.3) 14.56%, rgba(98, 214, 225, 0.3) 56.19%, rgba(21, 166, 181, 0.3) 98.69%);
  background-blend-mode: overlay, normal, normal; 
  overflow: hidden;
  margin-top: 0;
}

.center-container {
  position: absolute;
  width: 100%;
  max-width: 1160px;
  height: 100%;
  left: 50%;
  transform: translateX(-50%);
  top: 0px;
}

.banner-body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px;
  gap: 8px; 
  position: absolute;
  width: 274px;
  height: 246px;
  left: 435px;
  top: 51px;
  transform: none;
  background: #FFFFFF;
  border-radius: 40px 0px 40px 0px;
  z-index: 10;
}

.top-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 4px;
  width: 100%;
  flex: none;
  order: 0;
  flex-grow: 0;
}

.paragraph-small {
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: clamp(12px, 1.1vw, 16px);
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: #00106B;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
}

.paragraph-large {
  width: 100%;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: clamp(14px, 1.4vw, 20px);
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: #00106B;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0;
}

.bottom-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  width: 100%;
  flex: none;
  order: 1;
  align-self: stretch;
  flex-grow: 0;
  margin-bottom: 0px; 
}

.discount-number {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 44px; 
  line-height: 48px;
  letter-spacing: 0px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  color: #00106B;
  flex: none;
  order: 0;
  flex-grow: 0;
  margin: 0;
}

.discount-label {
  font-family: 'Rubik', sans-serif;
  font-style: normal;
  font-weight: 700;
  font-size: 32px; 
  line-height: 36px;
  letter-spacing: 0px;
  vertical-align: middle;
  display: flex;
  align-items: center;
  color: #00106B;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 0;
}

.shop-button {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px clamp(12px, 1.1vw, 16px);
  gap: 8px;
  min-width: clamp(80px, 7.3vw, 105px);
  height: clamp(28px, 2.2vw, 32px);
  background: #138A96; 
  border-radius: 4px;
  flex: none;
  order: 2;
  flex-grow: 0;
  border: none;
  cursor: pointer;
  transition: background 0.2s ease;
}

.shop-button:hover {
  background: #0f6c75;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 0px;
  gap: 8px;
  flex: none;
  order: 0;
  align-self: stretch;
  flex-grow: 0;
}

.button-label {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: clamp(11px, 1vw, 14px);
  line-height: 1.2;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  color: #FFFFFF;
  flex: none;
  order: 0;
  flex-grow: 0;
  white-space: nowrap;
}

/* nivea (Right Products) */
.products-right {
  position: absolute;
  width: clamp(80px, 20.5vw, 296px);
  height: clamp(80px, 20.4vw, 294px);
  left: clamp(57%, 54%, 630px); 
  top: clamp(30px, 5vw, 51px);
  z-index: 20; 
}

.products-right img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* nivea (Left Products) */
.products-left {
  position: absolute;
  width: clamp(120px, 36vw, 519px);
  height: clamp(68px, 20.3vw, 292px);
  left: clamp(-20px, 4.6%, 53px);
  top: clamp(45px, 7vw, 75px);
  z-index: 5;
}

.products-left img {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

/* Responsive - Mobile */
@media (max-width: 768px) {
  .campaign-banner-section {
    height: 300px;
  }
  
  .center-container {
    padding: 0 10px;
  }
  
  /* Show images on mobile but simpler positioning if needed */
  .products-left {
    display: block;
    left: -40px;
    width: 180px;
    top: 100px;
  }
  
  .products-right {
    display: block;
    left: auto;
    right: -20px;
    width: 120px;
    top: 40px;
  }
  
  .banner-body {
    width: 85%;
    max-width: 260px;
    min-height: 200px;
    left: 50%;
    transform: translateX(-50%);
  }
}

/* Responsive - Tablet */
@media (min-width: 769px) and (max-width: 1024px) {
  .products-left {
    width: clamp(200px, 30vw, 400px);
    height: clamp(112px, 16.9vw, 225px);
  }
  
  .products-right {
    width: clamp(120px, 17vw, 230px);
    height: clamp(120px, 16.9vw, 228px);
  }
}
</style>