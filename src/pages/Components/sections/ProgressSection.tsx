import React, { useEffect, useState } from "react";

import { Button, Progress } from "../../../../lib/main";
import { Section } from "../../../components/Section";

interface ProgressSectionProps {}

const ProgressExample = (props?: {
  done: boolean;
  loading: boolean;
  restart: () => void;
}) => {
  return (
    <>
      <Progress done={props?.done} loading={props?.loading} />
      <Button onClick={props?.restart}>Restart</Button>
    </>
  );
};

const ProgressSection: React.FC<ProgressSectionProps> = () => {
  const [done, setDone] = useState(false);
  const [loading, setLoading] = useState(true);
  const restart = () => {
    setDone(false);
    setLoading(true);
  };

  useEffect(() => {
    if (!done) {
      setTimeout(() => {
        setDone(true);
      }, 1500);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, [done, loading]);

  return (
    <Section
      title="Progress"
      id="progress"
      divided
      codeExample={ProgressExample}
      codeExampleProps={{ done, loading, restart }}
    />
  );
};

export default ProgressSection;
