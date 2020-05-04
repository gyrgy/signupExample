import React, { ReactNode } from 'react';
import { Box, Typography } from '@material-ui/core';
import { tabPanelTestID } from 'src/constants/testIDs';

interface TabPanelProps {
  index: number;
  selectedIndex: number;
  children: ReactNode;
  dir?: string;
  testID?: string;
}

const TabPanel = (props: TabPanelProps) => {
  const { children, selectedIndex, index, testID } = props;

  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={selectedIndex !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      data-testid={testID || tabPanelTestID}
    >
      {selectedIndex === index && <Box p={3}>{children}</Box>}
    </Typography>
  );
};

export default TabPanel;
