import type { Meta, StoryObj } from '@storybook/react';
import { Selectbox } from './selectbox';

const meta: Meta<typeof Selectbox> = {
  component: Selectbox,
  tags: ['autodocs'],
  args: {
    label: '製造会社',
    options: [
      { label: '株式会社オリエントテック', value: '1' },
      { label: 'オリエントテック', value: '2' },
      { label: 'OLIENT TECH', value: '3' },
    ],
  },
};

type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {
  render: (args) => {
    return <Selectbox {...args} />;
  },
};

export default meta;
