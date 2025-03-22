import { Outlet } from "react-router";
import { Flex, Header, Layout, Typography } from "../../lib/main";

const { Link } = Typography;

export const Page = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Header>
        <img
          style={{ padding: "0 1.5rem", maxHeight: "2rem" }}
          src="./wordmark-logo.png"
        />
        <Flex
          align="center"
          justify="end"
          gap="md"
          style={{ padding: "0 1.5rem" }}
        >
          <Link>Design</Link>
          <Link>Development</Link>
          <Link>Components</Link>
        </Flex>
      </Header>
      <Outlet />
    </Layout>
  );
};
