import type { Meta, StoryObj } from '@storybook/react';
import { Pagination } from './pagination';

const meta: Meta<typeof Pagination> = {
  component: Pagination,
  tags: ['autodocs'],
  args: {
    currentPage: 1,
    pageCount: 10,
  },
};

type Story = StoryObj<typeof Pagination>;

export const Default: Story = {
  render: (args) => {
    return <Pagination {...args} />;
  },
};

export default meta;
