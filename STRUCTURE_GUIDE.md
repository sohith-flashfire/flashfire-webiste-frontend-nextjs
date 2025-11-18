# Flashfire Website - Project Structure Guide

## 📁 Current Structure

```
flashfire-website-nextjs-main/
├── app/                          # Next.js App Router
│   ├── page.tsx                 # Home page (/)
│   ├── feature/                 # Feature section page
│   ├── pricing/                 # Pricing section page
│   ├── faq/                     # FAQ section page
│   ├── testimonials/            # Testimonials section page
│   ├── blogs/                   # Blog listing page
│   ├── employees/               # Employer form page
│   ├── contact-us/              # Contact form page
│   ├── privacy-policy/          # Privacy policy page
│   ├── terms-of-service/        # Terms of service page
│   ├── refund-policy/           # Refund policy page
│   ├── payment-policy/          # Payment policy page
│   ├── en-ca/                   # Canada locale routes
│   │   ├── page.tsx            # Canada home (/en-ca)
│   │   ├── feature/           # Canada feature (/en-ca/feature)
│   │   ├── pricing/           # Canada pricing (/en-ca/pricing)
│   │   └── ...                 # Other Canada routes
│   └── layout.tsx              # Root layout
│
├── src/
│   ├── components/
│   │   ├── common/             # Shared components
│   │   │   ├── navbar/        # Navigation bar
│   │   │   └── footer/        # Footer
│   │   │
│   │   ├── sections/          # Home page sections
│   │   │   ├── hero/          # Hero section
│   │   │   ├── pricing/       # Pricing section
│   │   │   ├── faq/           # FAQ section
│   │   │   └── ...            # Other sections
│   │   │
│   │   ├── pages/             # Full page components
│   │   │   ├── home/         # Home page component
│   │   │   │   └── Home.tsx
│   │   │   └── shared/       # Shared page components
│   │   │       └── SectionPage.tsx
│   │   │
│   │   ├── forms/             # Form components
│   │   │   ├── signup/        # Signup modal
│   │   │   ├── employer/      # Employer form
│   │   │   └── contact/       # Contact form
│   │   │
│   │   ├── modals/            # Modal components
│   │   │   ├── signup/        # Signup modal
│   │   │   └── calendly/      # Calendly integration
│   │   │
│   │   ├── legal/             # Legal/Policy pages ✅
│   │   │   ├── PrivacyPolicy.tsx
│   │   │   ├── TermsOfService.tsx
│   │   │   ├── RefundPolicy.tsx
│   │   │   └── PaymentPolicy.tsx
│   │   │
│   │   └── countries/         # Country-specific components
│   │       └── ca/            # Canada
│   │           └── Home.tsx   # Canada home page
│   │
│   ├── data/                   # Data files
│   │   ├── pricingData.ts     # Pricing plans data
│   │   ├── navbar.ts          # Navigation data
│   │   └── ...
│   │
│   ├── types/                  # TypeScript types
│   │   ├── heroSectionData.ts
│   │   └── navbarData.ts
│   │
│   └── utils/                  # Utility functions
│       ├── ui/                 # UI utilities ✅
│       │   └── scrollToSection.tsx
│       ├── countryDetection.ts
│       ├── whatsapp.ts
│       └── ...
│
├── public/                     # Static assets
│   ├── images/
│   └── videos/
│
├── middleware.ts              # Next.js middleware (geo-detection)
└── next.config.ts             # Next.js configuration
```

## 🎯 Component Organization Principles

### 1. **Common Components** (`components/common/`)
- Used across multiple pages
- Examples: Navbar, Footer

### 2. **Sections** (`components/sections/`)
- Home page sections
- Examples: Hero, Pricing, FAQ

### 3. **Pages** (`components/pages/`)
- Full page components
- Examples: Home, SectionPage

### 4. **Forms** (`components/forms/`)
- Form components
- Examples: Signup, Employer, Contact

### 5. **Modals** (`components/modals/`)
- Modal/dialog components
- Examples: Signup, Calendly

### 6. **Legal** (`components/legal/`)
- Legal/policy pages
- Examples: Privacy, Terms, Refund

### 7. **Countries** (`components/countries/`)
- Country-specific overrides
- Examples: `ca/Home.tsx` for Canada

## 🌍 Internationalization (i18n)

### Current Setup:
- **Default locale:** `/` (US)
- **Canada locale:** `/en-ca`

### How It Works:
1. Middleware detects user's country
2. Canadian users redirected to `/en-ca`
3. Each locale has its own routes
4. Components detect locale from pathname

### Adding a New Country:
1. Create `src/components/countries/{code}/Home.tsx`
2. Add routes in `app/{locale}/`
3. Update middleware to detect new country
4. Add pricing data if different

## 📝 Naming Conventions

### Components:
- **PascalCase** for component files: `Home.tsx`, `Navbar.tsx`
- **camelCase** for folders: `homePagePricingPlans/`
- **Client suffix** for client components: `heroSectionClient.tsx`

### Routes:
- **kebab-case** for URLs: `/privacy-policy`, `/terms-of-service`
- **snake_case** for locale codes: `/en-ca`

## 🔍 Finding Components

### Need a component?
1. **Page component?** → `src/components/pages/`
2. **Section component?** → `src/components/sections/` or `src/components/homePage*/`
3. **Form component?** → `src/components/forms/`
4. **Legal page?** → `src/components/legal/`
5. **Country-specific?** → `src/components/countries/{code}/`

### Need data?
- **Pricing data?** → `src/data/pricingData.ts`
- **Navigation data?** → `src/data/navbar.ts`
- **Other data?** → `src/data/`

### Need utilities?
- **UI utilities?** → `src/utils/ui/`
- **Country detection?** → `src/utils/countryDetection.ts`
- **Other utilities?** → `src/utils/`

## 🚀 Best Practices

1. **Keep components focused** - One component, one purpose
2. **Use TypeScript** - All components should be typed
3. **Client components** - Mark with `"use client"` when needed
4. **CSS Modules** - Use `.module.css` for component styles
5. **Data separation** - Keep data in `src/data/`
6. **Type definitions** - Keep types in `src/types/`

## 📊 Scalability

**Current Status:** ✅ Good (7/10)
- Well-organized component structure
- Clear separation of concerns
- Easy to add new countries
- Route duplication exists but manageable

**Future Improvements:**
- Optional: Use route groups for better organization
- Optional: Standardize component naming
- As needed: Add country-specific component overrides

