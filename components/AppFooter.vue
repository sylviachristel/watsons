<template>
  <footer class="footer-container">
    <div class="footer-content">
      <!-- Footer Links -->
      <div class="footer-links">
        <!-- Corporate Section -->
        <div class="footer-section">
          <h3 class="footer-title">CORPORATE</h3>
          <ul class="footer-list">
            <li><a href="#">About us</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Human resources</a></li>
            <li><a href="#">News from us</a></li>
          </ul>
        </div>

        <!-- Shopping Section -->
        <div class="footer-section">
          <h3 class="footer-title">SHOPPING</h3>
          <ul class="footer-list">
            <li><a href="#">Order and Payment</a></li>
            <li><a href="#">Cancellation and Refund</a></li>
            <li><a href="#">Delivery Conditions</a></li>
            <li><a href="#">Secure shopping</a></li>
          </ul>
        </div>

        <!-- Legal Section -->
        <div class="footer-section">
          <h3 class="footer-title">LEGAL</h3>
          <ul class="footer-list">
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Privacy Policy</a></li>
            <li><a href="#">Membership Agreement</a></li>
            <li><a href="#">Distance Selling Contract</a></li>
          </ul>
        </div>

        <!-- Help Center Section -->
        <div class="footer-section">
          <h3 class="footer-title">HELP CENTER</h3>
          <ul class="footer-list">
            <li><a href="#">FAQ</a></li>
            <li><a href="#">Contact center</a></li>
          </ul>
        </div>

        <!-- Contact Us Section -->
        <div class="footer-section">
          <h3 class="footer-title">CONTACT US</h3>
          <ul class="footer-list">
            <li class="contact-item">
              <img src="~/assets/css/icon/location-icon.png" alt="Location" class="contact-icon" />
              <span>Saray Mah. Site You Cad. Anel İş Merkezi, D:No:5/4, 34768<br>Ümraniye/İstanbul</span>
            </li>
            <li class="contact-item">
              <img src="~/assets/css/icon/call-icon.png" alt="Phone" class="contact-icon" />
              <span>0850 755 9967</span>
            </li>
            <li class="contact-item">
              <img src="~/assets/css/icon/email-icon.png" alt="Email" class="contact-icon" />
              <span>info@watsons.com.tr</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Copyright & Social -->
      <div class="footer-bottom">
        <p class="copyright">© WATSONS 2021 ALL RIGHTS RESERVED &nbsp; | &nbsp; A MEMBER OF CK HUTCHISON HOLDINGS</p>
        <div class="social-icons">
          <a href="#" class="social-link"><img src="/images/facebook.png" alt="Facebook" /></a>
          <a href="#" class="social-link"><img src="/images/twitter.png" alt="Twitter" /></a>
          <a href="#" class="social-link"><img src="/images/instagram.png" alt="Instagram" /></a>
          <a href="#" class="social-link"><img src="/images/youtube.png" alt="Youtube" /></a>
          <a href="#" class="social-link"><img src="/images/pinterest.png" alt="Pinterest" /></a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
/* First Container - Outer Footer Container */
.footer-container {
  width: 1440px;
  height: 320px;
  padding-top: 56px;
  padding-bottom: 57px;
  margin: 0 auto;
  background-color: #FFFFFF;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Second Container - Footer Content */
.footer-content {
  width: 1160px;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 48px;
}

/* Footer Links Container */
.footer-links {
  display: flex;
  gap: 24px;
  justify-content: flex-start;
}

/* Third Container - Footer Section */
.footer-section {
  flex: 0 0 165px;
  height: 144px;
  display: flex;
  flex-direction: column;
  gap: 32px;
}

.footer-section:first-child {
  flex-basis: 185px;
  margin-left: -1px;
}

.footer-section:nth-child(2) {
  flex-basis: 185px;
}

.footer-section:nth-child(3) {
  flex-basis: 165px;
  position: relative;
  left: -11px;
}

.footer-section:nth-child(4) {
  flex-basis: 135px;
}

.footer-section:last-child {
  flex: 0 0 430px;
  padding-left: 35px;
}

/* Footer Title */
.footer-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  color: rgba(42, 42, 72, 1);
  margin: 0;
  text-transform: uppercase;
  vertical-align: middle;
}

/* Footer List */
.footer-list {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.footer-list li {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0px;
  vertical-align: middle;
  color: rgba(72, 83, 99, 1);
}

.footer-list a {
  color: #485363;
  text-decoration: none;
}

/* Contact Items */
.contact-item {
  display: flex;
  align-items: flex-start;
  gap: 8px;
}

.contact-icon {
  width: 16px;
  height: 16px;
  opacity: 1;
  position: relative;
  top: -1px;
  left: 0px;
  flex-shrink: 0;
}

/* Footer Bottom */
.footer-bottom {
  width: 1160px;
  height: 32px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.copyright {
  width: 575px;
  height: 16px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 10px;
  line-height: 16px;
  letter-spacing: 0px;
  color: rgba(132, 147, 168, 1);
  margin: 0;
  margin-left: -1px;
  text-transform: uppercase;
  vertical-align: middle;
}

.social-icons {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
  width: 575px;
  height: 32px;
  margin-right: 1px;
}

.social-link img {
  width: 32px;
  height: 32px;
}
</style>
