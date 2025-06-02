// Initialize Lucide icons
document.addEventListener("DOMContentLoaded", () => {
  // Declare lucide (assuming it's globally available or imported elsewhere)
  if (typeof lucide !== "undefined") {
    lucide.createIcons()
  } else {
    console.warn("Lucide icons not initialized: lucide is not defined.")
  }

  // Initialize mobile menu
  initMobileMenu()

  // Initialize floating contact
  initFloatingContact()

  // Initialize cookie consent
  initCookieConsent()

  // Initialize form handling
  initContactForm()

  // Initialize smooth scrolling
  initSmoothScrolling()
})

// Mobile Menu Functionality
function initMobileMenu() {
  const mobileMenuBtn = document.getElementById("mobileMenuBtn")
  const mobileMenu = document.getElementById("mobileMenu")
  const mobileMenuClose = document.getElementById("mobileMenuClose")
  const mobileNavLinks = document.querySelectorAll(".mobile-nav-link")

  if (mobileMenuBtn && mobileMenu) {
    mobileMenuBtn.addEventListener("click", () => {
      mobileMenu.classList.add("active")
      document.body.style.overflow = "hidden"
    })
  }

  if (mobileMenuClose) {
    mobileMenuClose.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  }

  // Close menu when clicking on nav links
  mobileNavLinks.forEach((link) => {
    link.addEventListener("click", () => {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    })
  })

  // Close menu when clicking outside
  mobileMenu.addEventListener("click", (e) => {
    if (e.target === mobileMenu) {
      mobileMenu.classList.remove("active")
      document.body.style.overflow = ""
    }
  })
}

// Floating Contact Functionality
function initFloatingContact() {
  const floatingBtn = document.getElementById("floatingBtn")
  const floatingCard = document.getElementById("floatingCard")
  const floatingClose = document.getElementById("floatingClose")

  if (floatingBtn && floatingCard) {
    floatingBtn.addEventListener("click", () => {
      floatingCard.classList.add("active")
      floatingBtn.style.display = "none"
    })
  }

  if (floatingClose) {
    floatingClose.addEventListener("click", () => {
      floatingCard.classList.remove("active")
      floatingBtn.style.display = "flex"
    })
  }

  // Close floating contact when clicking outside
  document.addEventListener("click", (e) => {
    if (floatingCard && !floatingCard.contains(e.target) && !floatingBtn.contains(e.target)) {
      floatingCard.classList.remove("active")
      floatingBtn.style.display = "flex"
    }
  })
}

// Cookie Consent Functionality
function initCookieConsent() {
  const cookieBanner = document.getElementById("cookieBanner")
  const acceptAllBtn = document.getElementById("acceptAll")
  const rejectAllBtn = document.getElementById("rejectAll")
  const cookieSettingsBtn = document.getElementById("cookieSettings")

  // Check if consent already given
  const consent = localStorage.getItem("cookie-consent")
  if (!consent && cookieBanner) {
    cookieBanner.classList.add("active")
  }

  if (acceptAllBtn) {
    acceptAllBtn.addEventListener("click", () => {
      const allAccepted = {
        necessary: true,
        analytics: true,
        marketing: true,
        functional: true,
      }
      localStorage.setItem("cookie-consent", JSON.stringify(allAccepted))
      localStorage.setItem("cookie-consent-date", new Date().toISOString())
      cookieBanner.classList.remove("active")
    })
  }

  if (rejectAllBtn) {
    rejectAllBtn.addEventListener("click", () => {
      const onlyNecessary = {
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
      }
      localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
      localStorage.setItem("cookie-consent-date", new Date().toISOString())
      cookieBanner.classList.remove("active")
    })
  }

  if (cookieSettingsBtn) {
    cookieSettingsBtn.addEventListener("click", () => {
      // For now, just accept necessary cookies
      // In a full implementation, you would show a settings modal
      const onlyNecessary = {
        necessary: true,
        analytics: false,
        marketing: false,
        functional: false,
      }
      localStorage.setItem("cookie-consent", JSON.stringify(onlyNecessary))
      localStorage.setItem("cookie-consent-date", new Date().toISOString())
      cookieBanner.classList.remove("active")
    })
  }
}

// Contact Form Functionality
function initContactForm() {
  const contactForm = document.getElementById("contactForm")

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault()

      // Get form data
      const formData = new FormData(contactForm)
      const data = Object.fromEntries(formData)

      // Basic validation
      if (!data.name || !data.phone || !data.email) {
        alert("Vă rugăm să completați toate câmpurile obligatorii.")
        return
      }

      // Email validation
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailRegex.test(data.email)) {
        alert("Vă rugăm să introduceți o adresă de email validă.")
        return
      }

      // Phone validation (basic Romanian phone number)
      const phoneRegex = /^(\+40|0)[0-9]{9}$/
      if (!phoneRegex.test(data.phone.replace(/\s/g, ""))) {
        alert("Vă rugăm să introduceți un număr de telefon valid.")
        return
      }

      // Simulate form submission
      const submitBtn = contactForm.querySelector('button[type="submit"]')
      const originalText = submitBtn.textContent
      submitBtn.textContent = "Se trimite..."
      submitBtn.disabled = true

      // Simulate API call
      setTimeout(() => {
        alert("Mulțumim! Cererea dumneavoastră a fost trimisă cu succes. Vă vom contacta în cel mai scurt timp.")
        contactForm.reset()
        submitBtn.textContent = originalText
        submitBtn.disabled = false
      }, 2000)
    })
  }
}

// Smooth Scrolling for Anchor Links
function initSmoothScrolling() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]')

  anchorLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const href = this.getAttribute("href")

      if (href === "#") {
        e.preventDefault()
        return
      }

      const target = document.querySelector(href)
      if (target) {
        e.preventDefault()

        const headerHeight = document.querySelector(".header").offsetHeight
        const targetPosition = target.offsetTop - headerHeight - 20

        window.scrollTo({
          top: targetPosition,
          behavior: "smooth",
        })
      }
    })
  })
}

// Utility Functions
function debounce(func, wait) {
  let timeout
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout)
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait)
  }
}

// Scroll to top functionality
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  })
}

// Add scroll to top button (optional)
window.addEventListener(
  "scroll",
  debounce(() => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop
    const scrollTopBtn = document.getElementById("scrollTopBtn")

    if (scrollTopBtn) {
      if (scrollTop > 300) {
        scrollTopBtn.style.display = "block"
      } else {
        scrollTopBtn.style.display = "none"
      }
    }
  }, 100),
)
