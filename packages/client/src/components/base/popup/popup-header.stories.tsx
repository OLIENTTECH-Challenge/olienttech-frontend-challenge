import type { Meta, StoryObj } from '@storybook/react';
import { PopupHeader, Popup } from './index';

const meta: Meta<typeof PopupHeader> = {
  component: PopupHeader,
  tags: ['autodocs'],
  args: {
    onClose: () => {
      console.log('Popup closed');
    },
  },
};

type Story = StoryObj<typeof PopupHeader>;

export const Default: Story = {
  render: (args) => {
    return (
      <Popup {...args}>
        <PopupHeader {...args} />
      </Popup>
    );
  },
};

export default meta;
