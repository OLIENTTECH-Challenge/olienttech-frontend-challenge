import type { Meta, StoryObj } from '@storybook/react';
import { Popup, PopupHeader, PopupContent, PopupFooter } from './index';
import { ActionButton } from '@/components/base/button/action-button/action-button';

const meta: Meta<typeof Popup> = {
  component: Popup,
  tags: ['autodocs'],
  args: {
    onClose: () => {
      console.log('Popup closed');
    },
  },
};

type Story = StoryObj<typeof Popup>;

export const Default: Story = {
  render: (args) => {
    return (
      <Popup {...args}>
        <PopupHeader {...args} />
        <PopupContent>
          <div>コンテンツ</div>
        </PopupContent>
        <PopupFooter>
          <ActionButton variant='filled'>ボタン</ActionButton>
        </PopupFooter>
      </Popup>
    );
  },
};

export default meta;
