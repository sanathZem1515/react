
import React from 'react';
import CustomButton from './Button';

export default {
    title: 'atoms/Button',
    component: CustomButton,
    argTypes:{
        color: {
            control: {
              type: 'radio',
              options: ['primary', 'secondary']
            }
          }
        }
};

const Template = (args) => <CustomButton {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    color: "primary",
    variant: "outlined",
    label: "Click me",
    placeholder: "Explore"
};
