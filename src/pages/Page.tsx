import { Outlet, useNavigate } from "react-router";

import { Flex, Header, Layout, Typography } from "../../lib/main";

const { Link } = Typography;

export const Page = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Header>
        <object
          data="wordmark-logo.svg"
          type="image/svg+xml"
          onClick={() => navigate("/")}
          style={{
            padding: "0 1.5rem",
            maxHeight: "2rem",
            cursor: "pointer",
          }}
        ></object>

        <Flex
          align="center"
          justify="end"
          gap="md"
          style={{ padding: "0 1.5rem" }}
        >
          <Link onClick={() => navigate("/design")}>Design</Link>
          <Link onClick={() => navigate("/development")}>Development</Link>
          <Link onClick={() => navigate("/components")}>Components</Link>
        </Flex>
      </Header>
      <Outlet />
    </Layout>
  );
};
