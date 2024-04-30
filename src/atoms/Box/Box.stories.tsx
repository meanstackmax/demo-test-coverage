import type { Meta, StoryObj } from '@storybook/react';

import BoxComponent from './Box';

const meta: Meta<typeof BoxComponent> = {
  title: '/Atoms/Box',
  component: BoxComponent,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    as: {
      description: 'Defines component of the Box',
      table: {
        type: { summary: `'div' | 'a' | 'button'` },
        defaultValue: { summary: 'div' }
      },
      options: ['div', 'a', 'button'],
      control: {
        type: 'radio'
      }
    },
    display: {
      description: 'Defines display property of the Box',
      table: {
        type: { summary: `'block' | 'flex' | 'grid' | 'none'` },
        defaultValue: { summary: 'block' }
      },
      options: ['block', 'flex', 'grid', 'none'],
      control: {
        type: 'radio'
      }
    },
    className: {
      description: 'Provides custom className to the Box',
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof BoxComponent>;

export const Box: Story = {
  args: {
    as: 'div',
    display: 'flex',
    className: 'bg-blue-200 w-10rem h-10rem align-items-center justify-content-center',
    children: <>Test text</>
  }
};

export const Secondary: Story = {
  args: {
    as: 'div',
    display: 'grid',
    className: 'bg-blue-200 p-2 border gap-4 row-4',
    children: (
      <>
        <p>Test2</p>
        <p>Test1</p>
        <p>Test3</p>
        <p>Test4</p>
      </>
    )
  }
};
