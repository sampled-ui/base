import { Flex } from "../lib/components/Flex";
import { Spacing } from "../lib/components/Spacing";
import { Typography } from "../lib/components/Typography";
import { Button, Input } from "../lib/main";
import { HeadingUnits } from "../lib/units";

const { Text, Heading } = Typography;

function App() {
  return (
    <Spacing gap="lg">
      <Flex direction="column" align="start" gap="xl">
        <Flex gap="md">
          <Button>Button</Button>
          <Button variant="secondary">Button</Button>
        </Flex>
        <Flex direction="column" align="start" gap="md">
          {Object.values(["sm", "md", "lg"]).map((size) => (
            <Input placeholder="Placeholder" size={size} />
          ))}
        </Flex>
        <Flex direction="column" align="start" gap="md">
          <Text>Sampled UI Design System</Text>
          <Text variant="secondary">Sampled UI (secondary)</Text>
          <Text variant="success">Sampled UI (success)</Text>
          <Text variant="warning">Sampled UI (warning)</Text>
          <Text variant="danger">Sampled UI (danger)</Text>
          <Text disabled>Sampled UI (disabled)</Text>
          <Text mark>Sampled UI (mark)</Text>
          <Text code>Sampled UI (code)</Text>
          <Text keyboard>Sampled UI (keyboard)</Text>
          <Text underline>Sampled UI (underline)</Text>
          <Text deleted>Sampled UI (delete)</Text>
          <Text bold>Sampled UI (bold)</Text>
          <Text italic>Sampled UI (italic)</Text>
        </Flex>
        <Flex direction="column" align="start">
          {Object.values([1, 2, 3, 4, 5]).map((level) => {
            return (
              <Heading level={level as HeadingUnits}>
                {"Heading " + String(level)}
              </Heading>
            );
          })}
        </Flex>
      </Flex>
    </Spacing>
  );
}

export default App;
