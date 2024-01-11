import type { Meta, StoryObj } from '@storybook/react';
import { HomePage } from './HomePage';

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HomePage>;

export const Default: Story = {
  args: {},
  render: () => {
    return <HomePage />;
  },
};

export default meta;
