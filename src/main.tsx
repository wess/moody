/**
 * @file main.tsx
 * @description Entry point for the React application. It renders the main layout component.
 */
import { createRoot } from 'react-dom/client'

import './index.css'

import {
  Row,
  Column,
  Box
} from "./components/box";

import { Container } from "./components/container";
import { Center } from "./components/center";
import { Divider } from "./components/divider";
import { Spacer } from "./components/spacer";
import { Stack } from "./components/stack";
import { Grid, GridItem } from "./components/grid";

createRoot(document.getElementById('root')!).render(
  <Container className="bg-gray-100 min-h-screen p-4">
    <Column gap={6}>
      {/* Centered Header */}
      <Center className="bg-white p-4 shadow">
        <h1 className="text-2xl font-bold">Declarative Layout Library Demo</h1>
      </Center>

      <Divider />

      {/* Row with Boxes and Spacers */}
      <Row justify="between" align="center" gap={2} className="bg-blue-50 p-4">
        <Box className="bg-blue-200 p-4">Box 1</Box>
        <Spacer />
        <Box className="bg-blue-300 p-4">Box 2</Box>
        <Spacer />
        <Box className="bg-blue-400 p-4">Box 3</Box>
      </Row>

      <Divider />

      {/* Horizontal Stack */}
      <Stack horizontal gap={4} className="bg-green-50 p-4">
        <div className="bg-green-200 p-4">Stack Item 1</div>
        <div className="bg-green-300 p-4">Stack Item 2</div>
        <div className="bg-green-400 p-4">Stack Item 3</div>
      </Stack>

      <Divider />

      {/* Grid Layout */}
      <Grid columns={3} gap={4} className="bg-purple-50 p-4">
        <GridItem className="bg-purple-200 p-4">Grid Item 1</GridItem>
        <GridItem className="bg-purple-300 p-4">Grid Item 2</GridItem>
        <GridItem className="bg-purple-400 p-4">Grid Item 3</GridItem>
        <GridItem className="bg-purple-200 p-4">Grid Item 4</GridItem>
        <GridItem className="bg-purple-300 p-4">Grid Item 5</GridItem>
        <GridItem className="bg-purple-400 p-4">Grid Item 6</GridItem>
      </Grid>
    </Column>
  </Container>
)
