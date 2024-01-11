import type { Meta, StoryObj } from '@storybook/react';
import { Header } from './Header';

const meta: Meta<typeof Header> = {
  component: Header,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Header>;

export const Default: Story = {
  args: {
    left: 'left area',
    right: 'right area',
  },
  render: (args) => {
    return <Header {...args} />;
  },
};

export default meta;
