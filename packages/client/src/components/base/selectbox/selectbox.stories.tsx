import type { Meta, StoryObj } from '@storybook/react';
import { Selectbox } from './selectbox';

const meta: Meta<typeof Selectbox> = {
  component: Selectbox,
  tags: ['autodocs'],
  args: {
    label: '製造会社',
    options: ['オリエント製薬', 'アレジオン製薬', 'ハイハイ製薬', 'テクノ製薬'],
  },
};

type Story = StoryObj<typeof Selectbox>;

export const Default: Story = {
  render: (args) => {
    return <Selectbox {...args} />;
  },
};

export default meta;
