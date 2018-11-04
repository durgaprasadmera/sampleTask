import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from '../../../src/features/sidebar/Sidebar';

describe('sidebar/Sidebar', () => {
  it('renders node with correct class name', () => {
    const props = {
      sidebar: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Sidebar {...props} />
    );

    expect(
      renderedComponent.find('.sidebar-sidebar').length
    ).toBe(1);
  });
});
