import type { Meta, StoryObj } from '@storybook/react';
import { GxCompanyImage } from './gx-company-image';

const meta: Meta<typeof GxCompanyImage> = {
  component: GxCompanyImage,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof GxCompanyImage>;

export const Default: Story = {
  render: () => {
    return <GxCompanyImage />;
  },
};

export default meta;
