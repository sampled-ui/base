import { CSSProperties, ReactNode } from "react";

import { Card } from "../Card";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface HorizontalBarChartProps {
  axis: { label: string; value: number; style?: CSSProperties }[];
  unit?: string;
  formatValue?: (value: number) => ReactNode;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  axis,
  unit,
  formatValue,
}) => {
  const maxValue = Math.max(...axis.map((item) => item.value));
  return (
    <Card style={{ width: "100%", maxHeight: "22rem", overflowY: "auto" }}>
      <Flex className={styles.chart} gap="md" direction="column" align="start">
        {axis.map((item, index) => {
          const percent = (item.value / maxValue) * 100;
          return (
            <Flex
              style={{ width: "100%" }}
              gap="md"
              justify="start"
              align="center"
              className={styles.item}
              key={index}
            >
              <Typography.Text className={styles.label} title={item.label}>
                {item.label}
              </Typography.Text>
              <div className={styles.axis}>
                <div
                  className={styles.bar}
                  style={{
                    width: `${percent}%`,
                    ...(item.style ?? {}),
                  }}
                >
                  {formatValue ? (
                    <div className={styles.unit}>{formatValue(item.value)}</div>
                  ) : (
                    <Typography.Text className={styles.unit}>
                      {item.value} {unit ?? null}
                    </Typography.Text>
                  )}
                </div>
              </div>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};
