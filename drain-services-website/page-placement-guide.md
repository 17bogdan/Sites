# 📁 Where to Place the New Pages

## 🗂️ **File Structure After Adding New Pages:**

\`\`\`
your-website-folder/
├── index.html                    # Main homepage
├── desfundari-gorj.html         # NEW - County-wide services
├── desfundari-targu-jiu.html    # NEW - City-specific services
├── privacy-policy.html          # Privacy policy
├── sitemap.xml                  # Updated sitemap
├── robots.txt                   # Search engine instructions
├── css/
│   └── styles.css               # Main stylesheet
├── js/
│   └── main.js                  # JavaScript functionality
├── images/                      # Image folder
│   ├── hero-image.jpg
│   ├── desfundari-gorj.jpg      # NEW - Add this image
│   ├── desfundari-targu-jiu.jpg # NEW - Add this image
│   ├── echipa-gorj.jpg          # NEW - Add this image
│   └── echipa-targu-jiu.jpg     # NEW - Add this image
└── favicon.ico
\`\`\`

## 📤 **Upload Instructions:**

### **Step 1: Upload HTML Files**
1. **Save** both HTML files to your computer
2. **Access** cPanel File Manager
3. **Navigate** to `public_html` folder
4. **Upload** both files to the **ROOT** folder (same level as index.html)

### **Step 2: Add Required Images**
Create these images and upload to `images/` folder:
- **`desfundari-gorj.jpg`** (600x400px) - Equipment/team photo for Gorj
- **`desfundari-targu-jiu.jpg`** (600x400px) - Equipment/team photo for Târgu-Jiu  
- **`echipa-gorj.jpg`** (500x400px) - Team working in Gorj
- **`echipa-targu-jiu.jpg`** (500x400px) - Team working in Târgu-Jiu

### **Step 3: Update Main Navigation**
Add these links to your main `index.html` navigation:

\`\`\`html
<!-- Add to navigation menu in index.html -->
<nav class="nav-desktop">
    <a href="#services" class="nav-link">Servicii</a>
    <a href="desfundari-gorj.html" class="nav-link">Servicii Gorj</a>
    <a href="#about" class="nav-link">Despre Noi</a>
    <a href="#contact" class="nav-link">Contact</a>
</nav>
\`\`\`

### **Step 4: Update Sitemap**
Replace your current `sitemap.xml` with the new one that includes these pages.

## 🔗 **Internal Linking Strategy:**

### **From Homepage (index.html):**
Add these links in appropriate sections:

\`\`\`html
<!-- In services section -->
<a href="desfundari-gorj.html" class="btn btn-outline">
    Vezi Servicii Complete Gorj
</a>

<!-- In coverage section -->
<a href="desfundari-targu-jiu.html" class="btn btn-primary">
    Servicii Specializate Târgu-Jiu
</a>
\`\`\`

### **Cross-linking Between Pages:**
- ✅ **desfundari-gorj.html** links to **desfundari-targu-jiu.html**
- ✅ **desfundari-targu-jiu.html** links to **desfundari-gorj.html**
- ✅ Both link back to **index.html**

## 🎯 **URL Structure:**

After upload, your pages will be accessible at:
- `your-domain.ro/desfundari-gorj.html`
- `your-domain.ro/desfundari-targu-jiu.html`

## 📊 **SEO Benefits:**

### **Keyword Targeting:**
- **desfundari-gorj.html** targets: "desfundari Gorj", "desfundari canalizari Gorj"
- **desfundari-targu-jiu.html** targets: "desfundari Targu-Jiu", "desfundari canalizari Targu-Jiu"

### **Local SEO Boost:**
- ✅ Location-specific content
- ✅ Local landmarks and neighborhoods mentioned
- ✅ Structured data for each location
- ✅ Unique content for each page

## ⚡ **Quick Implementation Checklist:**

- [ ] Download both HTML files
- [ ] Upload to website root folder
- [ ] Create and upload required images
- [ ] Update main navigation in index.html
- [ ] Upload new sitemap.xml
- [ ] Test all links work correctly
- [ ] Submit new sitemap to Google Search Console

## 🚀 **Expected Results:**

**Within 1-2 weeks:**
- Pages indexed by Google
- Appearing for location-specific searches
- Better local SEO rankings

**Within 1 month:**
- Top 10 for "desfundari Gorj"
- Top 5 for "desfundari Targu-Jiu"
- Increased organic traffic from local searches
