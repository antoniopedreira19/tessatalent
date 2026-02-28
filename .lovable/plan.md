

## Plan: Add Multi-language Support (PT-BR, ENG, ESP)

### Approach
Use React Context for language state management and a translations file for all text content. Add a language dropdown in the Header.

### Steps

1. **Create translations file** (`src/lib/translations.ts`)
   - Define all text strings for every section (Hero, Services, Methodology, Cases, CTA, Footer, etc.) in three languages: `pt-BR`, `en`, `es`

2. **Create Language Context** (`src/contexts/LanguageContext.tsx`)
   - React Context with `language` state and `setLanguage` setter
   - `useLanguage()` hook that returns current language and a `t()` function for translations
   - Persist selected language in `localStorage`

3. **Add Language Dropdown to Header** (`src/components/Header.tsx`)
   - Small dropdown button showing current language flag/code (e.g., "PT" / "EN" / "ES")
   - Positioned next to the nav items on desktop, and inside the mobile menu
   - Styled to match the header aesthetic (white text, minimal)

4. **Wrap App with LanguageProvider** (`src/App.tsx`)
   - Wrap the app tree with the `LanguageProvider`

5. **Update all content components** to use `t()` instead of hardcoded strings:
   - `HeroSection.tsx`
   - `ServicesSection.tsx`
   - `TechAdvisorsSection.tsx`
   - `MethodologySection.tsx`
   - `CaseSection.tsx`
   - `StatsAndContentSection.tsx`
   - `CallToActionSection.tsx`
   - `Footer.tsx`

### Technical Details

- No external i18n library needed — a simple context + object lookup is sufficient for a single-page site
- Translation keys organized by section for maintainability
- Language selector uses a simple dropdown menu (Radix `DropdownMenu` already available)
- Default language: `pt-BR`

