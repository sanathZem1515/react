
import React from 'react';
import CustomInput from './Input';

export default {
    title: 'atoms/Input',
    component: CustomInput,
    argTypes:{
    variant: {
        control: {
          type: 'radio',
          options: ['filled', 'standard','outlined']
        }
      }
    }
};

const Template = (args) => <CustomInput {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    variant: "outlined",
    label: "input",
    type:"text",
    placeholder:"Enter Name"
};
