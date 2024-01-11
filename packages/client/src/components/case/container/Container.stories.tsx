import type { Meta, StoryObj } from '@storybook/react';
import { Container } from './Container';

const meta: Meta<typeof Container> = {
  component: Container,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Container>;

export const Default: Story = {
  args: {
    children: (
      <div style={{ backgroundColor: '#DDD' }}>
        <p>Container</p>
      </div>
    ),
  },
  render: (args) => {
    return <Container {...args} />;
  },
};

export default meta;
