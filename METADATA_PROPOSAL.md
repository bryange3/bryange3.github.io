# Proposed Metadata Enhancements

## Current Metadata
- Title: "Bryan Ge"
- Description: (existing description)
- Theme colors for light/dark mode

## Proposed Additions

### 1. Open Graph (for social media sharing - Facebook, LinkedIn, etc.)
```typescript
openGraph: {
  title: "Bryan Ge - Software Designer",
  description: "I am a software designer at Amplify Education...",
  url: "https://bryange.com", // Your site URL
  siteName: "Bryan Ge Portfolio",
  images: [
    {
      url: "/og-image.png", // Optional: create a 1200x630px image
      width: 1200,
      height: 630,
      alt: "Bryan Ge Portfolio",
    },
  ],
  locale: "en_US",
  type: "website",
}
```

### 2. Twitter Card (for Twitter/X sharing)
```typescript
twitter: {
  card: "summary_large_image",
  title: "Bryan Ge - Software Designer",
  description: "I am a software designer at Amplify Education...",
  images: ["/og-image.png"], // Same image as Open Graph
}
```

### 3. Additional SEO
```typescript
keywords: ["software designer", "UX design", "product design", "Amplify Education"],
authors: [{ name: "Bryan Ge" }],
creator: "Bryan Ge",
publisher: "Bryan Ge",
```

### 4. Viewport (already handled by Next.js, but can be explicit)
```typescript
viewport: {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
}
```

## What You Need to Decide:
1. **Your site URL** - Is it `https://bryange3.github.io` or something else?
2. **Open Graph image** - Do you want to create a 1200x630px image for social sharing? (Optional but recommended)
3. **Keywords** - Are the proposed keywords accurate for your work?

## Notes:
- Open Graph images are optional but make links look better when shared
- Twitter cards use the same image as Open Graph
- All of this helps with SEO and social media sharing

