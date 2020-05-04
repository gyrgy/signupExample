import React, { ChangeEvent } from 'react';
import { AppBar, Tab, Tabs } from '@material-ui/core';
import { t } from 'src/utils/i18n';
import { tabMenuTestID, tabMenuUserTabTestID, tabMenuPrivacyTabTestID, tabMenuDoneTabTestID } from 'src/constants/testIDs';

interface TabMenuProps {
  selectedIndex: number;
  onChange: (index: number) => void;
  testID?: string;
}

const SignUpTabMenu = (props: TabMenuProps) => {
  const { selectedIndex, onChange, testID } = props;

  const handleTabChange = (event: ChangeEvent<{}>, newValue: number) => {
    onChange(newValue);
  };

  return (
    <AppBar position="static" color="default">
      <Tabs
        value={selectedIndex}
        onChange={handleTabChange}
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        aria-label="full width tabs"
        data-testid={testID || tabMenuTestID}
      >
        <Tab label={t('tabsData.user')} disabled={selectedIndex !== 0} data-testid={tabMenuUserTabTestID} />
        <Tab label={t('tabsData.privacy')} disabled={selectedIndex !== 1} data-testid={tabMenuPrivacyTabTestID} />
        <Tab label={t('tabsData.done')} disabled={selectedIndex !== 2} data-testid={tabMenuDoneTabTestID} />
      </Tabs>
    </AppBar>
  );
};

export default SignUpTabMenu;
