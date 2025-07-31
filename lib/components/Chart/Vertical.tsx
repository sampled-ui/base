import { CSSProperties, ReactNode } from "react";

import { Card } from "../Card";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

import "../../theme/theme.css";
import "../../theme/variables.css";

interface BarChartProps {
  axis: { label: string; value: number; style?: CSSProperties }[];
  unit?: string;
  formatValue?: (value: number) => ReactNode;
}

export const BarChart: React.FC<BarChartProps> = ({
  axis,
  unit,
  formatValue,
}) => {
  const maxValue = Math.max(...axis.map((item) => item.value));
  return (
    <Card style={{ width: "100%", overflowX: "auto" }}>
      <Flex
        className={styles.chart}
        gap="sm"
        justify="end"
        align="end"
        style={{ width: "max-content" }}
      >
        {axis.map((item, index) => {
          const percent = (item.value / maxValue) * 100;
          return (
            <Flex
              style={{ height: "100%" }}
              direction="column"
              gap="sm"
              className={styles.item}
              key={index}
            >
              <div className={styles.axis}>
                <div
                  className={styles.bar}
                  style={{
                    height: `calc(${percent} * 0.2rem)`,
                  }}
                >
                  {formatValue ? (
                    <div className={styles.unit}>{formatValue(item.value)}</div>
                  ) : (
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
                  )}
                </div>
              </div>
              <Typography.Text
                className={styles.label}
                title={item.label}
                size="xs"
                style={{
                  width: "4rem",
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
