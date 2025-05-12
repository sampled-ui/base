import React, { CSSProperties } from "react";

import { Card } from "../Card";
import { Flex } from "../Flex";
import { Typography } from "../Typography";

import styles from "./styles.module.scss";

interface HorizontalBarChartProps {
  axis: { label: string; value: number, style?: CSSProperties }[];
  unit?: string;
}

export const HorizontalBarChart: React.FC<HorizontalBarChartProps> = ({
  axis,
  unit,
}) => {
  const maxValue = Math.max(...axis.map((item) => item.value));
  return (
    <Card style={{ width: "100%" }}>
      <Flex className={styles.chart} gap="md" direction="column" align="start">
        {axis.map((item) => {
          const percent = (item.value / maxValue) * 100;
          return (
            <Flex
              style={{ width: "100%" }}
              gap="lg"
              justify="start"
              align="center"
              className={styles.item}
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
                  <Typography.Text className={styles.unit}>
                    {item.value} {unit ?? null}
                  </Typography.Text>
                </div>
              </div>
            </Flex>
          );
        })}
      </Flex>
    </Card>
  );
};
