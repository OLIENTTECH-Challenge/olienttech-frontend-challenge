import type { Meta, StoryObj } from '@storybook/react';
import { Image } from './Image';

const meta: Meta<typeof Image> = {
  component: Image,
  tags: ['autodocs'],
  args: {
    src: '/public/olientgx-logo.jpg',
    alt: 'olientgx-logo',
  },
};

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return <Image {...args} />;
  },
};

export default meta;
