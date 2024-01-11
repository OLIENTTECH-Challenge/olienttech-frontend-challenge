import type { Meta, StoryObj } from '@storybook/react';
import { LinkButton } from './LinkButton';

const meta: Meta<typeof LinkButton> = {
  component: LinkButton,
  tags: ['autodocs'],
  args: {
    href: '/',
  },
};

type Story = StoryObj<typeof LinkButton>;

export const Filled: Story = {
  args: {
    variant: 'filled',
    children: 'Button',
  },
  render: (args) => {
    return <LinkButton {...args} />;
  },
};

export const Outlined: Story = {
  args: {
    variant: 'outlined',
    children: 'Button',
  },
  render: (args) => {
    return <LinkButton {...args} />;
  },
};

export default meta;
