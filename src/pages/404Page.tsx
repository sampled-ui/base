import { useNavigate } from "react-router";

import {
    Button,
    Flex,
    Layout,
    Typography
} from "../../lib/main";

const { Text, Heading } = Typography;

export const NotFoundPage = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ height: "100vh" }}>
      <Flex
        direction="column"
        align="center"
        justify="center"
        style={{ height: "100%" }}
        gap="lg"
      >
        <Flex direction="column">
          <Heading level={1}>404</Heading>
          <Text>Page not found</Text>
        </Flex>
        <Button variant="secondary" onClick={() => navigate("/")}>
          Go back
        </Button>
      </Flex>
    </Layout>
  );
};
