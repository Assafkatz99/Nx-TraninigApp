import type { Meta } from '@storybook/react';
import { MyNewComponent } from './my-new-component';

const Story: Meta<typeof MyNewComponent> = {
  component: MyNewComponent,
  title: 'MyNewComponent',
};
export default Story;

export const Primary = {
  args: {},
};
