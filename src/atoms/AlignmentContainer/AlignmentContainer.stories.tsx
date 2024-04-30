import AlignmentContainer from './AlignmentContainer';
import type { Meta, StoryObj } from '@storybook/react';

const meta: Meta<typeof AlignmentContainer> = {
  title: '/Atoms/AlignmentContainer',
  component: AlignmentContainer
};

export default meta;
type Story = StoryObj<typeof AlignmentContainer>;

export const AlignmentContainerStory: Story = {
  args: {
    children: [<div>Child 1</div>, <div>Child 2</div>, <div>Child 3</div>]
  }
};
