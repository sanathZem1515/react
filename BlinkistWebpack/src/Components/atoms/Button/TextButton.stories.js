import React from 'react'
import Button from './TextButton'


export default {
    title: 'atoms/Button'
  }

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
export const Secondary= Template.bind({});
export const Black= Template.bind({});



Black.args = {
    color: "black",
    name:"click me"
}

Primary.args = {
    color: "primary",
    name:"click me"
};






























// import React from 'react';
// import Button from './Button';

// export default{
//     title:'Button',
//     component:Button
// }

// export const Primary = () => <Button variant = 'primary'>Primary</Button>
// export const Secondary = () => <Button variant = 'secondary'>Secondary</Button>
// export const Success = () => <Button variant = 'success'>Success</Button>
// export const Danger = () => <Button variant = 'danger'>Danger</Button>
