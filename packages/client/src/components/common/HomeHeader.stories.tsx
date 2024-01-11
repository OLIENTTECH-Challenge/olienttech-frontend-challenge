import type { Meta, StoryObj } from '@storybook/react';
import { HomeHeader } from './HomeHeader';

const meta: Meta<typeof HomeHeader> = {
  component: HomeHeader,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof HomeHeader>;

export const Default: Story = {
  render: () => {
    return <HomeHeader />;
  },
};

export default meta;
