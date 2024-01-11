import type { Meta, StoryObj } from '@storybook/react';
import { LinkCard } from './LinkCard';

const meta: Meta<typeof LinkCard> = {
  component: LinkCard,
  tags: ['autodocs'],
  args: {
    title: 'Link Card',
    description: 'This is a link card.',
    href: '/',
  },
};

type Story = StoryObj<typeof LinkCard>;

export const Default: Story = {
  args: {},
  render: (args) => {
    return <LinkCard {...args} />;
  },
};

export default meta;
