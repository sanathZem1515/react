import React from 'react';
import Card from './Card';

export default {
    title:'molecules/Card'
}

export const Template  = (args) => <Card {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    title:"Steve Jobs",
    author:"Walter Isaacson",
    time:"15 min read",
    image: "https://images.blinkist.com/images/books/608a9c296cee070007228a21/1_1/470.jpg",
}
