# Psyfolio

A modern, config-driven portfolio built with Next.js 16, Tailwind CSS, and shadcn/ui.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Quick Start

```bash
git clone https://github.com/charandeep-reddy/psydevx-portfolio.git
cd portfolio
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000)

## Customization

Edit config files in `components/configs/` to update your content:

- `aboutConfig.tsx` - About section
- `resumeConfig.tsx` - Work experience & education
- `portfolioConfig.tsx` - Projects
- `blogConfig.tsx` - Blog posts
- `contactConfig.tsx` - Contact form

Modify templates in `components/templates/` to change layouts.

Update personal info in `components/infoConfig.tsx` and `app/layout.tsx`.

## Project Structure

```
app/              # Pages (about, resume, portfolio, blog, contact)
components/
  configs/        # Content configuration
  templates/      # Layout templates
  layouts/        # Layout components
  ui/             # shadcn/ui components
lib/              # Utilities
```

## Credits

Inspired by [vCard Personal Portfolio](https://github.com/codewithsadee/vcard-personal-portfolio) by [codewithsadee](https://github.com/codewithsadee)

**Built by PsyDevX**
