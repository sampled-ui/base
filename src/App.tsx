import { Flex } from "../lib/components/Flex";
import { Spacing } from "../lib/components/Spacing";
import { Typography } from "../lib/components/Typography";
import { Button, Input } from "../lib/main";
import { SizeUnits } from "../lib/units";

const { Text } = Typography;

function App() {
  return (
    <Spacing gap={SizeUnits.lg}>
      <Flex direction="column" align="start">
        <Flex>
          <Button>Button</Button>
          <Button variant="secondary">Button</Button>
        </Flex>
        <Flex direction="column" align="start">
          {Object.values([SizeUnits.sm, SizeUnits.md, SizeUnits.lg]).map(
            (size) => (
              <Input placeholder="Placeholder" size={size} />
            )
          )}
        </Flex>
        <Flex direction="column" align="start">
          <Text>Sampled UI Design System</Text>
          <Text type="secondary">Sampled UI (secondary)</Text>
          <Text type="success">Sampled UI (success)</Text>
          <Text type="warning">Sampled UI (warning)</Text>
          <Text type="danger">Sampled UI (danger)</Text>
          <Text disabled>Sampled UI (disabled)</Text>
          <Text mark>Sampled UI (mark)</Text>
          <Text code>Sampled UI (code)</Text>
          <Text keyboard>Sampled UI (keyboard)</Text>
          <Text underline>Sampled UI (underline)</Text>
          <Text deleted>Sampled UI (delete)</Text>
          <Text bold>Sampled UI (bold)</Text>
          <Text italic>Sampled UI (italic)</Text>
        </Flex>
      </Flex>
    </Spacing>
  );
}

export default App;
