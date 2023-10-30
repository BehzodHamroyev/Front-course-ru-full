import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Articlwe } from './Articlwe';

export default {
    title: 'pages/Articlwe',
    component: Articlwe,
    argTypes: {
        backgroundColor: { control: 'color' },
    },
} as ComponentMeta<typeof Articlwe>;

const Template: ComponentStory<typeof Articlwe> = (args) => <Articlwe {...args} />;

export const Normal = Template.bind({});
Normal.args = {
   
};