<template>
  <section class="newsletter-section">
    <div class="mx-auto px-0 w-full" style="max-width: 1160px;">
      <div class="newsletter-content">
        <div class="newsletter-text">
          <h2 class="newsletter-title">Sign up to our newsletter</h2>
          <p class="newsletter-subtitle">Be the first to hear about the latest offers.</p>
        </div>
        <div class="newsletter-form">
          <input 
            type="email" 
            placeholder="Your email address" 
            class="email-input"
          />
          <button class="subscribe-button">
            SUBSCRIBE
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.newsletter-section {
  background: #F2F0FF;
  padding: 48px 0;
}

.newsletter-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
}

.newsletter-text {
  flex: 1;
  text-align: left; 
}

.newsletter-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #2A2A48;
  margin: 0 0 12px 0; 
  padding: 0; 
}

.newsletter-subtitle {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: #8493A8;
  margin: 0;
  padding: 0; 
}

.newsletter-form {
  display: flex;
  flex-direction: row;
  gap: 12px;
  flex: 1;
  max-width: 500px;
  padding-left: 20px;
}

.email-input {
  flex: 1;
  height: 48px;
  background: #FFFFFF;
  border: 1px solid rgba(132, 147, 168, 0.3);
  border-radius: 4px;
  padding: 0 16px;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #2A2A48;
}

.email-input::placeholder {
  color: #8493A8;
}

.email-input:focus {
  outline: none;
  border-color: #E91E63;
}

.subscribe-button {
  height: 48px;
  padding: 0 32px;
  background: #FF27AD;
  border: none;
  border-radius: 4px;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
  font-size: 14px;
  color: #FFFFFF;
  cursor: pointer;
  transition: background 0.2s ease;
  white-space: nowrap;
}

.subscribe-button:hover {
  background: #DB1F94;
}

/* Mobile responsive */
@media (max-width: 768px) {
  .newsletter-content {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .newsletter-form {
    width: 100%;
    max-width: 100%;
    flex-direction: column;
  }
  
  .subscribe-button {
    width: 100%;
  }
}
</style>