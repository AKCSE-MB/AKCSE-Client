import type { Meta, StoryObj } from '@storybook/nextjs';
import SectionHeading from '.';

const meta = {
  title: 'Common/SectionHeading',
  component: SectionHeading,
  args: {
    title: 'Upcoming Events',
    barColor: 'blue',
    centeredOnMobile: false,
  },
  argTypes: {
    barColor: {
      control: 'inline-radio',
      options: ['blue', 'gold'],
    },
  },
} satisfies Meta<typeof SectionHeading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const WithDescription: Story = {
  args: {
    description:
      'Join our workshops, networking nights, and conferences throughout the year.',
  },
};

export const GoldBar: Story = {
  args: {
    barColor: 'gold',
  },
};

export const CenteredOnMobile: Story = {
  args: {
    centeredOnMobile: true,
    description: 'The bar is centered below 768px.',
  },
  globals: {
    viewport: { value: 'mobile1' },
  },
};
