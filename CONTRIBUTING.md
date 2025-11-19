# Contributing to Psyfolio

Thank you for your interest in contributing to Psyfolio! This document provides guidelines and instructions for contributing.

## Getting Started

1. Fork the repository
2. Clone your fork:
   ```bash
   git clone https://github.com/<your-username>/psyfolio.git
   cd psyfolio
   ```
3. Install dependencies:
   ```bash
   pnpm install
   ```
4. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development

Run the development server:
```bash
pnpm dev
```

## Making Changes

### Project Structure

- `app/` - Next.js pages and routes
- `components/configs/` - Content configuration files
- `components/templates/` - Template components for each section
- `components/layouts/` - Layout components
- `components/ui/` - shadcn/ui components
- `lib/` - Utility functions

### Code Style

- Use TypeScript for all new files
- Follow existing code formatting (we use ESLint)
- Use meaningful variable and function names
- Add comments for complex logic
- Keep components small and focused

### Before Submitting

1. Test your changes locally
2. Ensure the build works:
   ```bash
   pnpm build
   ```

## Submitting Changes

1. Commit your changes with clear messages:
   ```bash
   git commit -m "Add: description of your change"
   ```

2. Push to your fork:
   ```bash
   git push origin feature/your-feature-name
   ```

3. Open a Pull Request on GitHub with:
   - A clear title and description
   - Screenshots (if UI changes)
   - Reference any related issues

## What to Contribute

### Bug Fixes
- Fix bugs you encounter
- Improve error handling
- Add missing type definitions

### Features
- New components or templates
- Improvements to existing features
- Performance optimizations
- Accessibility improvements

### Documentation
- Improve README
- Add code comments
- Update examples
- Fix typos

### Issues
- Report bugs with clear descriptions
- Suggest new features
- Ask questions

## Code of Conduct

- Be respectful and inclusive
- Welcome newcomers
- Focus on constructive feedback
- Help others learn

## Questions?

Open an issue with the `question` label or reach out to the maintainers.

Thank you for contributing! 🚀

