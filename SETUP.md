# Portfolio Setup Guide

This portfolio website uses local data storage, with all project information stored directly in the codebase for maximum simplicity and performance.

## Prerequisites

- Node.js 20 or higher
- A GitHub account

## Setup Instructions

### 1. Install Dependencies

```bash
npm install
```

### 2. Add Your Projects

Edit `lib/projects.ts` and add your projects to the `projectsData` array. Here's an example:

```typescript
const projectsData: Project[] = [
  {
    id: "1",
    slug: "my-awesome-project",
    title: "My Awesome Project",
    description: "A brief description of your project goes here.",
    year: 2024,
    tags: ["UI/UX", "Product Design", "Web"],
    featuredImage: "/projects/project-hero.jpg",
    images: ["/projects/project-1.jpg", "/projects/project-2.jpg"],
    projectLink: "https://example.com",
    caseStudy: "Your detailed case study content goes here.\n\nYou can add multiple paragraphs by using \\n\\n.",
    featured: true,
    order: 1,
  },
  // Add more projects...
];
```

### 3. Add Project Images

1. Create a `public/projects/` folder in your project root
2. Add your project images to this folder
3. Reference them in your project data as `/projects/image-name.jpg`

Example structure:
```
public/
  projects/
    project-hero.jpg
    project-1.jpg
    project-2.jpg
    another-project-hero.jpg
```

### 4. Test Locally

```bash
npm run dev
```

Visit http://localhost:3000 to see your portfolio.

### 5. Build for Production

```bash
npm run build
```

This will:
- Generate static HTML pages for all your projects
- Output to the `out/` directory

### 6. Deploy to GitHub Pages

#### Option A: Automatic Deployment (Recommended)

1. Push your code to GitHub
2. Go to your repository settings
3. Navigate to "Pages" in the sidebar
4. Under "Source", select "GitHub Actions"
5. Push to the `main` branch - the GitHub Action will automatically build and deploy

#### Option B: Manual Deployment

1. Build the site: `npm run build`
2. Commit the `out/` folder
3. Push to the `gh-pages` branch (or configure GitHub Pages to use the `out/` folder)

## Updating Content

To update your portfolio:

1. Edit `lib/projects.ts` to add, remove, or modify projects
2. Add or replace images in `public/projects/`
3. Commit and push your changes
4. The site will automatically rebuild and deploy (if using GitHub Actions)

## Project Data Fields

Each project can have the following fields:

- **id** (string, required) - Unique identifier for the project
- **slug** (string, required) - URL-friendly identifier (e.g., "my-project")
- **title** (string, required) - Project title
- **description** (string, required) - Brief project description
- **year** (number, optional) - Year the project was completed
- **tags** (string[], optional) - Array of tags (e.g., ["UI/UX", "Web"])
- **featuredImage** (string, optional) - Path to featured image (e.g., "/projects/hero.jpg")
- **images** (string[], optional) - Array of additional image paths for gallery
- **projectLink** (string, optional) - External link to the project
- **caseStudy** (string, optional) - Detailed case study text (use `\n\n` for paragraphs)
- **featured** (boolean, optional) - Set to `true` to show on homepage
- **order** (number, optional) - Sort order (lower numbers appear first)

## Customization

### Styling

- Homepage: `app/page.module.css`
- Projects listing: `app/projects/page.module.css`
- Individual project pages: `app/projects/[slug]/page.module.css`
- Global styles: `app/globals.css`

### Project Types

Edit `lib/types.ts` to modify the Project interface if you need additional fields.

## Troubleshooting

### No projects showing

- Make sure you've added projects to `lib/projects.ts`
- Check that the `projectsData` array is not empty
- Verify your project objects match the `Project` type

### Images not loading

- Ensure images are in the `public/projects/` folder
- Check that image paths in `lib/projects.ts` start with `/projects/`
- Verify image file names match exactly (case-sensitive)

### Build errors

- Check that all required fields (id, slug, title, description) are present
- Ensure all image paths are valid
- Run `npm run lint` to check for TypeScript errors
