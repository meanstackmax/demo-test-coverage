import type { Meta, StoryObj } from '@storybook/react';
import FlexComponent from './Flex';
import FlexItem from './FlexItem';

const meta: Meta<typeof FlexComponent> = {
  title: '/Atoms/Flex',
  component: FlexComponent,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    alignItems: {
      description: 'Handles alignItems CSS property within Flex component',
      table: {
        defaultValue: { summary: 'center' }
      }
    },
    justifyContent: {
      description: 'Handles justifyContent CSS property within Flex component',
      table: {
        defaultValue: { summary: 'center' }
      }
    },
    flexDirection: {
      description: 'Handles flexDirection CSS property within Flex component',
      table: {
        defaultValue: { summary: 'row' }
      }
    },
    wrap: {
      description: 'Handles flexWrap CSS property within Flex component',
      table: {
        defaultValue: { summary: 'wrap' }
      }
    },
    className: {
      description: 'Provides custom className to the Flex',
      table: {
        type: { summary: 'string' }
      },
      control: {
        type: 'text'
      }
    },
    children: {
      description: 'Flex can contain any amount of FlexItems or other elements inside as children',
      table: {
        type: { summary: 'ReactNode' }
      }
    }
  }
};

export default meta;
type Story = StoryObj<typeof FlexComponent>;

export const Flex: Story = {
  args: {
    alignItems: 'center',
    justifyContent: 'between',
    flexDirection: 'column',
    wrap: 'nowrap',
    className: 'surface-50  w-30rem h-20rem p-8',
    children: (
      <>
        <FlexItem
          flexGrow="1"
          className="bg-yellow-100"
          style={{ width: 50, height: 30 }}
        />
        <FlexItem
          className="bg-yellow-200"
          style={{ width: 50, height: 30 }}
        />
      </>
    )
  }
};
