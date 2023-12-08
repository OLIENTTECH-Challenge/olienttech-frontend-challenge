import type { Meta, StoryObj } from '@storybook/react';
import { Popup, PopupFooter } from './index';

const meta: Meta<typeof PopupFooter> = {
  component: PopupFooter,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof PopupFooter>;

export const Default: Story = {
  render: () => {
    const handleClose = () => {
      console.log('Popup closed');
    };
    return (
      <Popup onClose={handleClose}>
        <PopupFooter>
          <div>フッター</div>
        </PopupFooter>
      </Popup>
    );
  },
};

export default meta;
