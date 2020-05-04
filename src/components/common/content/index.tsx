import React, { ReactNode } from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import { contentTestID } from 'src/constants/testIDs';

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
  },
}));

interface ContentProps {
  children: ReactNode;
  testID?: string;
}

const Content = (props: ContentProps) => {
  const { root } = useStyles();
  const { children, testID } = props;

  return (
    <div className={root} data-testid={testID || contentTestID}>
      {children}
    </div>
  );
};

export default Content;