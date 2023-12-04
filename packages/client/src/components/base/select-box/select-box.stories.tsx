import type { Meta, StoryObj } from '@storybook/react';
import { SelectBox } from './select-box';

const meta: Meta<typeof SelectBox> = {
  component: SelectBox,
  tags: ['autodocs'],
  args: {
    label: '製造会社',
    options: ['オリエント製薬', 'アレジオン製薬', 'ハイハイ製薬', 'テクノ製薬'],
  },
};

type Story = StoryObj<typeof SelectBox>;

export const Default: Story = {
  render: (args) => {
    return <SelectBox {...args} />;
  },
};

export default meta;
