import type { Meta, StoryObj } from '@storybook/nextjs';
import DefaultButton from '.';

const meta = {
  title: 'Common/Button',
  component: DefaultButton,
  args: {
    btnText: 'Learn More',
  },
  argTypes: {
    bgColor: { control: 'color' },
    hoverColor: { control: 'color' },
    textColor: { control: 'color' },
  },
} satisfies Meta<typeof DefaultButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
