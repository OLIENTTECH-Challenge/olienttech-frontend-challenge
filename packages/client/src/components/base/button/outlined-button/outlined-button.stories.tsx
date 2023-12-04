import type { Meta, StoryObj } from '@storybook/react';
import { OutlinedButton } from './outlined-button';

const meta: Meta<typeof OutlinedButton> = {
  component: OutlinedButton,
  tags: ['autodocs'],
  args: {
    label: 'Outlined Button',
    loadingLabel: 'Loading...',
    color: 'black',
  },
};

type Story = StoryObj<typeof OutlinedButton>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return <OutlinedButton {...args} />;
  },
};

export default meta;
