import { Card } from "../Card";
import { Flex } from "../Flex";
import { Spacing } from "../Spacing";
import { Typography } from "../Typography";
import { TextProps } from "../Typography/Text";

import styles from "./styles.module.scss";

interface StatisticProps {
  label: string;
  value: string | number;
  variant?: TextProps["variant"];
  icon?: React.ReactNode;
}

export const Statistic: React.FC<StatisticProps> = ({
  label,
  value,
  variant,
  icon,
}) => {
  variant = variant || "primary";

  return (
    <Card className={styles.statistic}>
      <Spacing gap="md">
        <Flex direction="column" gap="sm" align="start">
          <Typography.Text variant="secondary">{label}</Typography.Text>
          <Flex gap="xs" align="center">
            {icon ?? null}
            <Typography.Text size="xl" variant={variant} bold>
              {value}
            </Typography.Text>
          </Flex>
        </Flex>
      </Spacing>
    </Card>
  );
};
