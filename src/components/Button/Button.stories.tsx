import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Button } from './Button';
import '../../styles/variables.scss';

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      type: 'string',
      description: 'Тип кнопки',
      defaultValue: 'primary',
      options: ['primary', 'secondary', 'link'],
      control: {
        type: 'radio',
      },
    },
    size: {
      type: 'string',
      description: 'Размеры кнопки',
      defaultValue: 'standart',
      options: ['standart', 'large', 'small'],
      control: {
        type: 'radio',
      },
    },
    children: {
      type: 'string',
      name: 'title',
      defaultValue: 'Press me',
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (arg) => <Button {...arg} />;

export const Default = Template.bind({});
Default.args = {
  children: 'My Button',
  variant: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  children: 'My Button',
  size: 'large',
};
