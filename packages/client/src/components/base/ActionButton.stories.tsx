import type { Meta, StoryObj } from '@storybook/react';
import { ActionButton } from './ActionButton';

const meta: Meta<typeof ActionButton> = {
  component: ActionButton,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof ActionButton>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => {
    return <ActionButton {...args} />;
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
  render: (args) => {
    return <ActionButton {...args} />;
  },
};

export default meta;
