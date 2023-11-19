import type { Meta, StoryObj } from '@storybook/react';
import { FlexibleContainer } from './flexible-container';

const meta: Meta<typeof FlexibleContainer> = {
  component: FlexibleContainer,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof FlexibleContainer>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: '#DDD' }}>
        <p>Container</p>
      </div>
    ),
  },
  render: (args) => {
    return <FlexibleContainer {...args} />;
  },
};

export default meta;
