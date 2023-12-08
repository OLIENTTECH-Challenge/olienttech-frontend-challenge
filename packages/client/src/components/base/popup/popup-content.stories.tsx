import type { Meta, StoryObj } from '@storybook/react';
import { PopupContent } from './popup-content';

const meta: Meta<typeof PopupContent> = {
  component: PopupContent,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof PopupContent>;

export const Default: Story = {
  render: (args) => {
    return <PopupContent {...args} />;
  },
};

export default meta;
