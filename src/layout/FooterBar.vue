<template>
  <el-footer class="app-footer">
    <div class="footer-content">
      <!-- Newsletter Section -->
      <div class="newsletter-section">
        <!-- <h3>Get our latest news</h3> -->
        <el-form :model="newsletterForm" class="newsletter-form">
          <el-form-item>
            <el-input 
              v-model="newsletterForm.email" 
              placeholder="Your Email"
              size="large"
            >
            </el-input>
          </el-form-item>
          <el-button 
            type="primary" 
            size="large" 
            class="signup-btn"
            @click="handleSignup"
          >
            Sign up
          </el-button>
        </el-form>
      </div>

      <!-- Links Sections -->
      <div class="footer-links">
        <!-- Products Column -->
        <div class="links-column">
          <h4>Products</h4>
          <ul>
            <li><a href="#">X10</a></li>
            <li><a href="#">X100</a></li>
            <li><a href="#">DFR</a></li>
            <li><a href="#">Resources</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </div>

        <!-- Support Column -->
        <div class="links-column">
          <h4>Support</h4>
          <ul>
            <li><a href="#">Support Center</a></li>
            <li><a href="#">Utilities</a></li>
            <li><a href="#">Developer Tools</a></li>
            <li><a href="#">Blog</a></li>
            <li><a href="#">Training</a></li>
          </ul>
        </div>

        <!-- Company Column -->
        <div class="links-column">
          <h4>Company</h4>
          <ul>
            <li><a href="#">National Security</a></li>
            <li><a href="#">Extend Integrations</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Brand Merch Store</a></li>
            <li><a href="#">All solutions</a></li>
            <li><a href="#">Resellers</a></li>
            <li><a href="#">Skydio For All</a></li>
            <li><a href="#">S2+ Accessories</a></li>
          </ul>
        </div>
      </div>

      <!-- Footer Bottom -->
      <div class="footer-bottom">
        <div class="social-section">
          <p>Follow us on:</p>
          <div class="social-icons">
            <a href="#"><i class="fab fa-facebook-f"></i></a>
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
            <a href="#"><i class="fab fa-linkedin-in"></i></a>
            <a href="#"><i class="fab fa-youtube"></i></a>
          </div>
        </div>

        <div class="address-section">
          <p>DC: 30D kmt ba dinh ha noi</p>
        </div>

        <div class="legal-links">
          <a href="#">Legal</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Manage Cookies</a>
        </div>
      </div>

      <!-- Copyright -->
      <div class="copyright">
        <p>© {{ year }} TYD, Inc. All rights reserved</p>
        <p class="usa-text">Proudly designed, assembled, and supported in the VN</p>
      </div>
    </div>
  </el-footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      year: new Date().getFullYear(),
      newsletterForm: {
        email: ''
      }
    };
  },
  methods: {
    handleSignup() {
      if (this.newsletterForm.email) {
        this.$message.success('Thank you for subscribing to our newsletter!');
        this.newsletterForm.email = '';
      } else {
        this.$message.warning('Please enter your email address');
      }
    }
  }
};
</script>

<style scoped>
.app-footer {
  background-color: #0f172a;
  color: #cbd5e1;
  padding: 40px 20px 20px;
  font-family: 'Inter', sans-serif;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
}

.newsletter-section {
  text-align: center;
  margin-bottom: 40px;
}

.newsletter-section h3 {
  color: white;
  margin-bottom: 20px;
  font-size: 1.5rem;
}

.newsletter-form {
  display: flex;
  justify-content: center;
  gap: 15px;
  max-width: 500px;
  margin: 0 auto;
}

.signup-btn {
  background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
  border: none;
  padding: 0 25px;
}

.footer-links {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  margin-bottom: 40px;
}

.links-column h4 {
  color: white;
  font-size: 1.2rem;
  margin-bottom: 20px;
  position: relative;
  padding-bottom: 10px;
}

.links-column h4:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 40px;
  height: 3px;
  background: #3b82f6;
  border-radius: 3px;
}

.links-column ul {
  list-style: none;
  padding: 0;
}

.links-column ul li {
  margin-bottom: 12px;
}

.links-column ul li a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
}

.links-column ul li a:hover {
  color: #3b82f6;
}

.footer-bottom {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  gap: 20px;
  padding-top: 20px;
  border-top: 1px solid #334155;
  margin-bottom: 20px;
}

.social-section {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icons a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: #1e293b;
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-icons a:hover {
  background: #3b82f6;
  transform: translateY(-3px);
}

.address-section p {
  color: #94a3b8;
  margin: 0;
}

.legal-links {
  display: flex;
  gap: 20px;
}

.legal-links a {
  color: #94a3b8;
  text-decoration: none;
  transition: color 0.3s ease;
  font-size: 0.9rem;
}

.legal-links a:hover {
  color: #3b82f6;
}

.copyright {
  text-align: center;
  color: #64748b;
  font-size: 0.9rem;
}

.usa-text {
  margin-top: 5px;
  font-style: italic;
}

/* Responsive adjustments */
@media (max-width: 768px) {
  .newsletter-form {
    flex-direction: column;
    align-items: center;
  }
  
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
  
  .legal-links {
    justify-content: center;
    flex-wrap: wrap;
  }
}

/* Import Inter font */
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
</style>