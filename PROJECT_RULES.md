# Project Rules

## Color Accessibility

**Rule**: Always ensure each color added has an appropriate equivalent for dark mode that reaches AA accessibility standards with the background the color is used on.

## Blue Link Colors

**Rule**: All blue links (external links, email addresses, "More" buttons, etc.) must use consistent colors across light and dark modes:

- **Light mode**: `#0063CD`
- **Dark mode**: `#5BA3FF`

When adding new blue links or interactive elements, ensure they use these colors and include dark mode support in `@media (prefers-color-scheme: dark)` blocks.

### Requirements

- **AA Contrast Standard**: Minimum contrast ratio of 4.5:1 for normal text (14px+) and 3:1 for large text (18px+)
- **Dark Mode Equivalents**: Every color used in light mode must have a corresponding dark mode color that maintains AA accessibility
- **Background Consideration**: Colors must meet contrast requirements against their specific background (not just generic dark/light backgrounds)

### Implementation

- Use CSS variables for colors that need dark mode variants
- Add dark mode overrides in `@media (prefers-color-scheme: dark)` blocks
- Test contrast ratios using tools like WebAIM Contrast Checker or browser dev tools
- Document any color choices that require special consideration

### Example

```css
/* Light mode */
.textColor {
  color: #222222; /* Black text on light background */
}

/* Dark mode */
@media (prefers-color-scheme: dark) {
  .textColor {
    color: #ffffff; /* White text on dark background - meets AA on #000000 */
  }
}
```

