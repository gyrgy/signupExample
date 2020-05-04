import React, { ReactNode } from 'react';
import { Fade } from '@material-ui/core';
import { fadeTestID } from 'src/constants/testIDs';

interface FadeEffectProps {
  fadeIn: boolean;
  timeout?: number;
  children: ReactNode;
  testID?: string;
}

const FadeEffect = (props: FadeEffectProps) => {
  const { fadeIn, timeout, children, testID } = props;

  return (
    <Fade
      in={fadeIn}
      timeout={timeout || 300}
      data-testid={testID || fadeTestID}
    >
      <div>
        {children}
      </div>
    </Fade>
  );
};

export default FadeEffect;