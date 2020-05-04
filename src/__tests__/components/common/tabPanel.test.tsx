import React from 'react';
import { render, RenderResult } from '@testing-library/react';
import { TabPanel } from 'src/components/common';


describe('test tab panel component', () =>{
  const index = 0;
  let selectedIndex = 0;
  const childContent = 'Child';
  let tabPanel: RenderResult;

  beforeEach(() => {
    tabPanel = render(
      <TabPanel index={index} selectedIndex={selectedIndex}>
        <div>{childContent}</div>
      </TabPanel>
    );
  });


  it('test if tab panel components rendered', () => {
    const { getByText } = tabPanel;
    const child = getByText(childContent);
    expect(child).toBeInTheDocument();
  });

  it('test when child should be hidden', () => {
    selectedIndex = 1;
    const { rerender } = tabPanel;
    rerender(
      <TabPanel index={index} selectedIndex={selectedIndex}>
        <div>{childContent}</div>
      </TabPanel>
    );

    const child = tabPanel.queryByText(childContent);
    expect(child).not.toBeInTheDocument();
  });

  it('tests if matches with snapshot', () => {
    const { asFragment } = tabPanel;
    expect(asFragment()).toMatchSnapshot();
  });
});