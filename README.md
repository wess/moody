# Moody

Moody is a modern web application built with React and Vite. It leverages Tailwind CSS for styling and TypeScript for type safety. Designed with a component-based architecture, Moody provides a set of reusable UI components that make it simple to create responsive, attractive layouts quickly.

## Table of Contents

- [Overview](#overview)
- [Installation](#installation)
- [Development](#development)
- [Components & Examples](#components--examples)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

## Overview

Moody is a lightweight and flexible front-end project setup. It provides essential building blocks such as containers, grids, stacks, and spacers to help you rapidly prototype and build your applications.

Key features include:

- **Modern Tooling:** Built with Vite for fast development and bundling.
- **TypeScript:** Ensuring type safety throughout the codebase.
- **Responsive Components:** Ready-to-use components for layouts and UI elements.
- **Tailwind CSS:** Rapid styling with utility-first CSS.

## Installation

1. **Clone the repository:**

   ```sh
   git clone https://github.com/yourusername/moody.git
   cd moody
   ```

2. **Install the dependencies:**

   ```sh
   npm install
   ```

   If you use Bun, you may use:

   ```sh
   bun install
   ```

## Development

To start the development server, run:

```sh
npm run dev
```

This will start a local development server. Open your browser and navigate to [http://localhost:3000](http://localhost:3000) (or the URL provided in your terminal).

## Components & Examples

Moody’s component library is designed for simplicity and flexibility. Below are a few examples of how to use these components.

### Example 1: Basic Layout with Container and Center

```tsx
import React from 'react';
import Container from './components/container';
import Center from './components/center';

function App() {
  return (
    <Container>
      <Center>
        <h1>Welcome to Moody</h1>
      </Center>
    </Container>
  );
}

export default App;
```

### Example 2: Using Grid and Box

```tsx
import React from 'react';
import Grid from './components/grid';
import Box from './components/box';

function GridExample() {
  return (
    <Grid columns={3} gap={4}>
      <Box>Item 1</Box>
      <Box>Item 2</Box>
      <Box>Item 3</Box>
      <Box>Item 4</Box>
      <Box>Item 5</Box>
      <Box>Item 6</Box>
    </Grid>
  );
}

export default GridExample;
```

### Example 3: Spacing and Stacking Components

```tsx
import React from 'react';
import Stack from './components/stack';
import Spacer from './components/spacer';

function StackExample() {
  return (
    <Stack spacing={2}>
      <div>Section 1</div>
      <Spacer size={20} />
      <div>Section 2</div>
      <Spacer size={20} />
      <div>Section 3</div>
    </Stack>
  );
}

export default StackExample;
```

## Project Structure

Below is an overview of the project structure:

```
moody/
├── public/
│   └── vite.svg
├── src/
│   ├── assets/
│   │   └── react.svg
│   ├── components/
│   │   ├── box.tsx
│   │   ├── center.tsx
│   │   ├── container.tsx
│   │   ├── divider.tsx
│   │   ├── grid.tsx
│   │   ├── spacer.tsx
│   │   └── stack.tsx
│   ├── index.css
│   ├── index.ts
│   ├── main.tsx
│   └── vite-env.d.ts
├── .gitignore
├── package.json
├── README.md
├── tailwind.config.cjs
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

- **public/**: Static assets like SVGs.
- **src/components/**: Reusable UI components.
- **src/index.ts & main.tsx**: Application entry points.
- **Configuration Files:** Vite, TypeScript, Tailwind, etc.

## Contributing

Contributions are welcome! Follow the steps below to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/YourFeature`).
3. Commit your changes.
4. Push your branch (`git push origin feature/YourFeature`).
5. Open a Pull Request.

For major changes, please open an issue to discuss what you would like to change.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.
