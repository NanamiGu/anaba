# بوابة عنابة الرقمية - دليل التطوير | Development Guide

## نسخة | Version
**v1.0.0** - Production Release

---

## 📋 جدول المحتويات | Table of Contents
1. [معايير الكود](#code-standards)
2. [بنية الملفات](#file-structure)
3. [ممارسات التطوير](#best-practices)
4. [الإضافات والتعديلات](#modifications)
5. [استكشاف الأخطاء](#troubleshooting)

---

## 🎯 معايير الكود | Code Standards

### HTML Standards
```html
<!-- Use semantic HTML5 -->
<header>, <nav>, <section>, <article>, <footer>

<!-- Always include alt text for images -->
<img src="image.jpg" alt="descriptive text">

<!-- Use data attributes for JavaScript -->
<div id="ideaForm" data-module="forms"></div>
```

### CSS Standards
```css
/* Mobile-first approach */
.selector { /* mobile styles */ }
@media (min-width: 768px) { /* tablet styles */ }
@media (min-width: 1024px) { /* desktop styles */ }

/* Use CSS variables for theming */
color: var(--vip-blue);
background: var(--vip-bg);

/* BEM Naming Convention (where needed) */
.bento-card { }
.bento-card__content { }
.bento-card--large { }
```

### JavaScript Standards
```javascript
// Use const/let (no var)
const config = { /* ... */ };

// Name functions descriptively
function initializeHeaderScroll() { }

// Add JSDoc comments for complex functions
/**
 * Initialize scroll reveal animations
 * @returns {void}
 */
function initializeScrollReveal() { }

// Use template literals for strings
const message = `Welcome ${userName}!`;
```

---

## 📂 بنية الملفات | File Structure

```
anaba/
├── index.html
│   └── Contains semantic HTML structure only
│   └── CDN links for external libraries
│   └── Organized into comment-delimited sections
│
├── css/
│   └── style.css
│       ├── Root variables & theming
│       ├── Base styles
│       ├── Component styles
│       ├── Animations & transitions
│       └── Responsive queries
│
├── js/
│   └── main.js
│       ├── Icon initialization
│       ├── Header scroll module
│       ├── Mobile menu module
│       ├── Spotlight effects module
│       ├── Scroll reveal module
│       ├── Form handlers module
│       └── Bootstrap initialization
│
├── assets/
│   └── images/
│       └── Static image files
│
├── package.json
│   └── Project metadata & scripts
│
└── README.md
    └── Project documentation
```

---

## ✅ ممارسات التطوير الجيدة | Best Practices

### Performance
✅ Minimize HTTP requests (use CDN for libraries)  
✅ Lazy load images if added  
✅ Defer non-critical JavaScript  
✅ Use CSS Grid for layouts (hardware accelerated)  
✅ Avoid inline styles  

### Accessibility (WCAG AA)
✅ Use semantic HTML tags  
✅ Add aria-labels for interactive elements  
✅ Ensure color contrast ratios > 4.5:1  
✅ Support keyboard navigation  
✅ Include form labels  

### SEO
✅ Meaningful meta tags  
✅ Descriptive page title & description  
✅ Structured heading hierarchy (H1 → H6)  
✅ Schema.org microdata where applicable  
✅ Descriptive image alt text  

### Security
✅ Input validation on forms  
✅ Sanitize any user-generated content  
✅ Use HTTPS in production  
✅ Implement CSP headers  
✅ Avoid inline scripts (use external files)  

---

## 🔧 الإضافات والتعديلات | Modifications Guide

### إضافة قسم جديد | Adding a New Section

**Step 1: Add HTML in `index.html`**
```html
<section id="new-section" class="py-24 px-6">
    <div class="container max-w-7xl mx-auto">
        <!-- Your content here -->
    </div>
</section>
```

**Step 2: Add CSS in `css/style.css`**
```css
#new-section {
    /* Your styles */
}

#new-section .element {
    /* Component styles */
}

@media (max-width: 768px) {
    #new-section { /* Responsive adjustments */ }
}
```

**Step 3: Add JavaScript in `js/main.js`**
```javascript
function initializeNewSection() {
    const section = document.getElementById('new-section');
    if (!section) return;
    
    // Your interactivity here
    section.addEventListener('click', () => {
        // Handle event
    });
}

// Add to bootstrap section
document.addEventListener('DOMContentLoaded', function() {
    // ... existing initializations
    initializeNewSection();
});
```

### تعديل الألوان | Changing Colors

**Global Color Change:**
Edit `:root` in `css/style.css`:
```css
:root {
    --vip-royal: #NEW_COLOR_1;
    --vip-blue: #NEW_COLOR_2;
    --vip-cyan: #NEW_COLOR_3;
    --vip-bg: #NEW_COLOR_4;
}
```

**Component-Specific Color:**
```css
.bento-card {
    background: linear-gradient(135deg, #new-color1, #new-color2);
}
```

### إضافة صور | Adding Images

```html
<!-- In index.html -->
<img 
    src="assets/images/filename.jpg" 
    alt="Descriptive text describing the image"
    class="object-cover rounded-2xl"
>
```

**Best Practices:**
- Save images in `assets/images/`
- Use descriptive filenames: `hero-banner.jpg` not `img1.jpg`
- Optimize for web (use WebP format when possible)
- Include alt text always

### تعديل الخطوط | Changing Fonts

**Current Fonts:**
- Headings: Changa
- Body: Tajawal

**To change:**
1. Find font import in `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=NEW_FONT" rel="stylesheet">
```

2. Update CSS in `style.css`:
```css
h1, h2, h3, .changa-font {
    font-family: 'NEW_FONT', sans-serif;
}
```

---

## 🐛 استكشاف الأخطاء | Troubleshooting

### المشكلة: العناصر لا تظهر على الموبايل
**الحل:**
1. تحقق من فئات Tailwind Responsive: `hidden lg:flex`
2. تأكد من المتغيرات المسؤولة: `@media (max-width: 768px)`
3. تحقق من الأجهزة في أدوات المطور (DevTools)

### المشكلة: الحركات لا تعمل
**الحل:**
1. تحقق من فئة `reveal-up` على العناصر
2. تأكد من أن `initializeScrollReveal()` قد تم استدعاؤها
3. تحقق من `animation-delay` في التنميط

### المشكلة: النوافذ المنبثقة (SweetAlert) لا تظهر
**الحل:**
1. تحقق من أن SweetAlert2 CDN قد تم تحميله
2. تأكد من أن ID النموذج صحيح (`ideaForm`, `subscribeForm`)
3. افتح console وابحث عن الأخطاء

### المشكلة: الألوان غير صحيحة
**الحل:**
1. تحقق من متغيرات CSS `:root`
2. تأكد من عدم وجود تضارب في فئات Tailwind
3. امسح ذاكرة التخزين المؤقت (Ctrl+Shift+Delete)

### المشكلة: الاتجاه (RTL) معطل
**الحل:**
```html
<!-- Ensure dir="rtl" is on root element -->
<html lang="ar" dir="rtl">
```

---

## 📞 الدعم | Support

For additional help:
- Check the main [README.md](./README.md)
- Review [package.json](./package.json) for dependencies
- Contact: support@anaba-vip.dz

---

## 🔐 الإصدار والنشر | Deployment Checklist

Before going live:
- [ ] Test on multiple browsers
- [ ] Verify responsive design on all screen sizes
- [ ] Check accessibility with Lighthouse
- [ ] Optimize images
- [ ] Enable gzip compression on server
- [ ] Set up HTTPS/SSL certificate
- [ ] Configure security headers (CSP, X-Frame-Options)
- [ ] Set up analytics/monitoring
- [ ] Create backup
- [ ] Document deployment process

---

**Last Updated:** May 2, 2026  
**Maintained by:** VIP Smart Gateway Team
