import { render } from '@testing-library/react';

import MyNewComponent from './my-new-component';
import React from 'react';

describe('MyNewComponent', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<MyNewComponent />);
    expect(baseElement).toBeTruthy();
  });
});
