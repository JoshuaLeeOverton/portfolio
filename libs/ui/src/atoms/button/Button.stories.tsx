import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Atoms/Button',
  // Defines default arguments for all stories
  args: {
    children: 'Click Me',
    variant: 'contained',
    color: 'primary',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['contained', 'outlined', 'text'],
    },
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'error', 'info', 'success', 'warning'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Button>;

// The default state of the button
export const Primary: Story = {};

// A secondary state
export const Outlined: Story = {
  args: {
    variant: 'outlined',
    color: 'secondary',
  },
};

// A disabled state
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled Button',
  },
};