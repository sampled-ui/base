import { Outlet, useNavigate } from "react-router";

import { Breakpoint } from "../../lib/components/Layout";
import { Flex, Header, Layout, Typography } from "../../lib/main";

import styles from "./Page.module.scss";

const { Link } = Typography;

export const Page = () => {
  const navigate = useNavigate();
  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Header>
        <Link onClick={() => navigate("/")}>
          <object
            data="wordmark-logo.svg"
            type="image/svg+xml"
            className={styles.logo}
          />
        </Link>
        <Flex align="center" justify="end" gap="md" className={styles.links}>
          <Link onClick={() => navigate("/design")}>Design</Link>
          <Link onClick={() => navigate("/development")}>Development</Link>
          <Link onClick={() => navigate("/components")}>Components</Link>
        </Flex>
      </Header>
      <Breakpoint>
        <Outlet />
      </Breakpoint>
    </Layout>
  );
};
