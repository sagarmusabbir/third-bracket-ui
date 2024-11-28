# @thirdbracket-ui/core

A modern, accessible, and beautiful React UI component library built with Tailwind CSS.

## Features

- 🎨 Modern and clean design
- ♿️ Accessible components following WAI-ARIA guidelines
- 🌗 Dark mode support out of the box
- 📱 Responsive and mobile-friendly
- 🔧 Highly customizable with Tailwind CSS
- 📦 Tree-shakeable and lightweight
- 💪 Written in TypeScript
- ⚡️ Server Component ready

## Installation

```bash
npm install @thirdbracket-ui/core
```

## Quick Start

1. Install the package and its peer dependencies:

```bash
npm install @thirdbracket-ui/core react react-dom

```

2. Add the following to your tailwind.config.js:

```bash
module.exports = {
  content: [
    // ...
    "./node_modules/@thirdbracket/ui/**/*.{js,ts,jsx,tsx}",
  ],
  // ...
}
```

3. Import and use components:

```bash
import { Button, Card } from '@thirdbracket-ui/core'

export default function App() {
  return (
    <div>
      <Card
        title="Welcome"
        description="Start building beautiful apps today."
        href="/getting-started"
      />

      <Button variant="default">
        Get Started
      </Button>
    </div>
  )
}
```

## Available Components

- Button: Versatile button component with multiple variants
- Card : Flexible card component for displaying content

## Contributing

We welcome contributions! Please see our contributing guide for details.

## License

MIT © Musabbir Sagar
