import React from 'react';
import Text from './TextItem';

export default{
    title:'atoms/Text'
}

const Template = (args) => <Text {...args}/>

export const Heading = Template.bind({});
export const Para= Template.bind({});
export const Normal= Template.bind({});


Heading.args={
    variant:"h2",
    name:"text item"
}
Normal.args={
    variant:"h3",
    name:"text item"
}
Para.args={
    variant:"h6",
    name:"text item"
}