import { CSSProperties } from "react";

import { Card } from "../Card";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface BarChartProps {
  axis: { label: string; value: number; style?: CSSProperties }[];
  unit?: string;
}

export const BarChart: React.FC<BarChartProps> = ({ axis, unit }) => {
  const maxValue = Math.max(...axis.map((item) => item.value));
  return (
    <Card style={{ width: "100%" }}>
      <Flex className={styles.chart} gap="sm" justify="end" align="end">
        {axis.map((item) => {
          const percent = (item.value / maxValue) * 100;
          return (
            <Flex
              style={{ height: "100%" }}
              direction="column"
              gap="sm"
              className={styles.item}
            >
              <div className={styles.axis}>
                <div
                  className={styles.bar}
                  style={{
                    height: `calc(${percent} * 0.2rem)`,
                  }}
                >
                  <Typography.Text
                    className={styles.unit}
                    style={{
                      top: "var(--spacing-xs)",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "max-content",
                      ...(item.style ?? {}),
                    }}
                  >
                    {item.value} {unit ?? null}
                  </Typography.Text>
                </div>
              </div>
              <Typography.Text
                className={styles.label}
                title={item.label}
                size="xs"
                style={{
                  width: "3rem",
                  minWidth: "initial",
                  height: "1rem",
                }}
              >
                {item.label}
              </Typography.Text>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};
