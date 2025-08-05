# 📖 Assembly of God Website – Web Design Layout & Principles

This documentation defines the visual structure, typography, color scheme, and layout system to be used for developing the Assembly of God website. It serves as a consistent guide for the project's foundation, especially within the Gugma framework.

---

## 🌿 Root Syntax Variables (CSS Custom Properties)

These CSS variables should be defined in `:root` for consistency, scalability, and easier theming.

```css
:root {
  /* Typography */
  --font-main: 'Poppins', sans-serif;

  --font-size-h1: 2.75rem;
  --font-size-h2: 2.25rem;
  --font-size-h3: 1.75rem;
  --font-size-h4: 1.25rem;
  --font-size-p: 1rem;
  --font-size-span: 0.875rem;
  --font-size-caption: 0.75rem;

  --font-weight-black: 900;
  --font-weight-bold: 700;
  --font-weight-medium: 500;
  --font-weight-regular: 400;
  --font-weight-light: 300;

  /* Color Palette */
  --color-black: #000000;
  --color-black-90: #1a1a1a;
  --color-black-80: #333333;
  --color-black-60: #666666;
  --color-black-40: #999999;
  --color-black-20: #cccccc;

  --color-white: #ffffff;
  --color-gray: #f5f5f5;

  /* Backgrounds */
  --bg-main: var(--color-white);
  --bg-main-box: var(--color-black-10); /* subtle less-black */
  --bg-top-layer: var(--color-gray);

  /* Shadow */
  --box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}
````

---

## ✍️ Typography Guidelines

| Element   | Font    | Size     | Weight        | Use Case                     |
| --------- | ------- | -------- | ------------- | ---------------------------- |
| Heading 1 | Poppins | 2.75rem  | Black (900)   | Titles, Hero sections        |
| Heading 2 | Poppins | 2.25rem  | Bold (700)    | Subheadings                  |
| Heading 3 | Poppins | 1.75rem  | Medium (500)  | Section headings             |
| Heading 4 | Poppins | 1.25rem  | Regular (400) | Card titles, smaller headers |
| Paragraph | Poppins | 1rem     | Regular (400) | Main text                    |
| Span      | Poppins | 0.875rem | Regular/Light | Inline accent text           |
| Caption   | Poppins | 0.75rem  | Light (300)   | Small labels, timestamps     |

---

## 🎨 Color Usage

| Purpose             | Variable Name      | Hex Value |
| ------------------- | ------------------ | --------- |
| Main Text           | `--color-black`    | `#000000` |
| Secondary Text      | `--color-black-60` | `#666666` |
| Muted/Helper Text   | `--color-black-40` | `#999999` |
| Background (Main)   | `--bg-main`        | `#ffffff` |
| Card/Box Background | `--bg-main-box`    | `#f0f0f0` |
| Section Overlay     | `--bg-top-layer`   | `#f5f5f5` |
| Divider Lines       | `--color-black-20` | `#cccccc` |

---

## 🧱 Layout and Box Structure

* **Main Background**: `--bg-main` (always white)
* **Primary Box Containers**:

  * Background: `--bg-main-box`
  * Padding: `1.5rem`
  * Border Radius: `0.75rem`
  * Shadow: `--box-shadow`
* **Top Section Layer**: Use `--bg-top-layer` for highlights or overlays
* **Card Components**: Use H4 + paragraph inside box with shadow

---

## ✅ UI Component Styles

| Component     | Font Weight   | Background         | Notes                        |
| ------------- | ------------- | ------------------ | ---------------------------- |
| Buttons       | Bold (700)    | `--color-black-90` | Rounded, clear hover state   |
| Inputs/Fields | Regular (400) | `--color-white`    | With subtle shadow or border |
| Cards         | Medium (500)  | `--bg-main-box`    | Use H4 + paragraph inside    |
| Sections      | Regular (400) | `--bg-top-layer`   | Padding: `2rem` suggested    |

---

## 🧪 Accessibility Guidelines

* Ensure **color contrast** meets WCAG standards (dark on light)
* Avoid text smaller than `0.75rem`
* Use semantic HTML tags for screen readers
* Maintain vertical spacing and layout flow for mobile devices

---

## 📌 Implementation Tips

* Declare root variables globally (`:root`) in main CSS
* Reuse components using BEM or utility classes
* Prefer rem units for scalability
* Maintain consistent spacing: `1rem`, `1.5rem`, `2rem`, etc.
* Use CSS grid or flexbox for layout, avoid floats

---

> Designed with prayer and purpose for the glory of God.
> — *Assembly of God Web Design Team