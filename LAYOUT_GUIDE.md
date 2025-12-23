# Portfolio Layout Guide

## Overview

The portfolio now features a clean 2-column layout on desktop that adapts to a single-column layout on mobile devices.

## Homepage Layout

### Desktop (> 768px)

**Left Column (280px fixed width, sticky):**
- Personal introduction/bio
- "More about me →" link to `/about` page
- Work history timeline
- Footer links (Resume, Email, LinkedIn)

**Right Column (flexible width):**
- Project cards with:
  - Cover image
  - Project title
  - Company/category and year
  - Short description
  - Links to full project pages at `/projects/[slug]`

### Mobile (≤ 768px)

Single column layout:
1. Bio and "More about me" link
2. Footer links
3. Projects (work history is hidden on mobile)

## Key Features

### Responsive Design
- **Desktop:** 2-column grid with sticky sidebar
- **Tablet (1024px):** Narrower sidebar (240px)
- **Mobile (768px):** Single column, work history hidden

### Styling
- Clean, minimal aesthetic
- Generous whitespace
- Subtle hover effects on links and project cards
- Dark mode support via `prefers-color-scheme`

## Files Modified

1. **`app/page.tsx`** - Homepage component with 2-column layout
2. **`app/page.module.css`** - Responsive styles for homepage
3. **`app/about/page.tsx`** - New about page with placeholder content
4. **`app/about/page.module.css`** - About page styles

## Customization

### Update Bio
Edit the bio text in `app/page.tsx`:
```typescript
<p className={styles.bioText}>
  Your bio text here...
</p>
```

### Update Work History
Modify the `workHistory` array in `app/page.tsx`:
```typescript
const workHistory = [
  { company: "Company Name", role: "Your Role", year: "2024" },
  // Add more entries...
];
```

### Update Contact Links
Change the links in the sidebar section of `app/page.tsx`:
```typescript
<a href="/resume.pdf" className={styles.footerLink}>Resume</a>
<a href="mailto:your.email@example.com" className={styles.footerLink}>Email</a>
<a href="https://linkedin.com/in/yourprofile" className={styles.footerLink}>LinkedIn</a>
```

### Update About Page
Edit `app/about/page.tsx` to add your detailed bio and story.

## Adding Projects

Projects are managed in `lib/projects.ts`. Add your projects to the `projectsData` array:

```typescript
const projectsData: Project[] = [
  {
    id: "1",
    slug: "project-slug",
    title: "Project Title",
    description: "Brief description for the homepage",
    year: 2024,
    tags: ["Company/Category"],
    featuredImage: "/projects/image.jpg",
    // ... other fields
  },
];
```

## Responsive Breakpoints

- **Desktop:** Full 2-column layout (> 768px)
- **Tablet:** Narrower sidebar (768px - 1024px)
- **Mobile:** Single column, hidden work history (< 768px)

## Next Steps

1. **Add your projects** in `lib/projects.ts`
2. **Add project images** to `public/projects/`
3. **Update contact information** in `app/page.tsx`
4. **Customize the about page** in `app/about/page.tsx`
5. **Add your resume** as `public/resume.pdf`
6. **Test on different screen sizes** to ensure responsiveness

## Testing

Run the development server:
```bash
npm run dev
```

Visit:
- Homepage: http://localhost:3000
- About page: http://localhost:3000/about
- Projects: http://localhost:3000/projects

Test at different viewport widths to verify responsive behavior.

