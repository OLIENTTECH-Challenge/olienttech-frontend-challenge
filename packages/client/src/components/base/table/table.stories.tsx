import type { Meta, StoryObj } from '@storybook/react';
import { Table } from './table';

type DataTypes = {
  company: string;
  name: string;
  price: string;
};

const meta: Meta<typeof Table> = {
  component: Table,
  tags: ['autodocs'],
  args: {
    columns: [
      {
        header: '製造会社',
        accessor: (data: DataTypes) => data.company,
      },
      {
        header: '商品名',
        accessor: (data: DataTypes) => data.name,
      },
      {
        header: '価格',
        accessor: (data: DataTypes) => data.price,
      },
    ],
    data: [
      {
        company: 'オリエント製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'アレジオン製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'ハイハイ製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'テクノ製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'オリエント製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'アレジオン製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'ハイハイ製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'テクノ製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'オリエント製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
      {
        company: 'アレジオン製薬',
        name: 'アレジオン錠',
        price: '1000円',
      },
    ],
  },
};

export default meta;

type Story = StoryObj<typeof Table>;

export const Default: Story = {
  render: (args) => {
    return <Table {...args} />;
  },
};
