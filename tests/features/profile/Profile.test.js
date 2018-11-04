import React from 'react';
import { shallow } from 'enzyme';
import { Profile } from '../../../src/features/profile/Profile';

describe('profile/Profile', () => {
  it('renders node with correct class name', () => {
    const props = {
      profile: {},
      actions: {},
    };
    const renderedComponent = shallow(
      <Profile {...props} />
    );

    expect(
      renderedComponent.find('.profile-profile').length
    ).toBe(1);
  });
});
