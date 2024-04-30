import type { Meta, StoryObj } from '@storybook/react';
import type { TFlexItemProps } from './Flex.types';
import Flex from './Flex';
import FlexItemComponent from './FlexItem';

const Container = (args?: TFlexItemProps) => {
  return (
    <Flex
      className="surface-50"
      style={{ width: '100vw' }}
    >
      <FlexItemComponent {...args} />
    </Flex>
  );
};
const meta: Meta<typeof FlexItemComponent> = {
  title: '/Atoms/FlexItem',
  component: Container,
  parameters: {
    layout: 'centered'
  },
  argTypes: {
    alignItems: {
      description: 'Handles alignItems CSS property within FlexItem component',
      table: {
        type: { summary: `'start' | 'end' | 'center' | 'stretch' | 'baseline'` },
        defaultValue: { summary: 'center' }
      },
      options: ['start', 'end', 'center', 'stretch', 'baseline'],
      control: {
        type: 'radio'
      }
    },
    justifyContent: {
      description: 'Handles justifyContent CSS property within FlexItem component',
      table: {
        type: { summary: `'start' | 'end' | 'center' | 'between' | 'around' | 'evenly'` },
        defaultValue: { summary: 'center' }
      },
      options: ['start', 'end', 'center', 'between', 'around', 'evenly'],
      control: {
        type: 'select'
      }
    },
    flexDirection: {
      description: 'Handles flexDirection CSS property within FlexItem component',
      table: {
        type: { summary: `'row' | 'row-reverse' | 'column' | 'column-reverse'` },
        defaultValue: { summary: 'row' }
      },
      options: ['row', 'row-reverse', 'column', 'column-reverse'],
      control: {
        type: 'radio'
      }
    },
    wrap: {
      description: 'Handles flexWrap CSS property within FlexItem component',
      table: {
        type: { summary: `boolean | 'wrap' | 'nowrap' | 'wrap-reverse'` },
        defaultValue: { summary: 'wrap' }
      },
      options: ['wrap', 'nowrap', 'wrap-reverse'],
      control: {
        type: 'radio'
      }
    },
    flexGrow: {
      description: 'Handles flexGrow CSS property within FlexItem component',
      table: {
        type: { summary: `'0' | '1'` }
      },
      options: ['0', '1'],
      control: {
        type: 'radio'
      }
    },
    flexShrink: {
      description: 'Handles flexShrink CSS property within FlexItem component',
      table: {
        type: { summary: `'0' | '1'` }
      },
      options: ['0', '1'],
      control: {
        type: 'radio'
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
type Story = StoryObj<typeof FlexItemComponent>;

export const FlexItem: Story = {
  args: {
    flexGrow: '0',
    flexShrink: '1',
    className: 'bg-yellow-100  w-30rem h-20rem',
    children: <>test text</>
  }
};
