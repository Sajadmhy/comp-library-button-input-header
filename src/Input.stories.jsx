import React from "react";

import Input from "./Input";

export default {
    component: Input,
    title: "Input",
    argTypes: {
        backgroundColor: { control: "color" },
    }
}

const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});

Primary.args = {
    primary: true,
    label: "Input",
    type: "text",
    placeholder: "Placeholder",
    value: "",
    onChange: () => {},
};

export const Secondary = Template.bind({});

Secondary.args = {
    primary: false,
    label: "Input",
    type: "text",
    placeholder: "Placeholder",
    value: "",
    onChange: () => {},
};


export const Small = Template.bind({});

Small.args = {
    primary: true,
    size: "small",
    label: "Input",
    type: "text",
    placeholder: "Placeholder",
    value: "",
    onChange: () => {},
};

export const Medium = Template.bind({});

Medium.args = {
    primary: true,
    size: "medium",
    label: "Input",
    type: "text",
    placeholder: "Placeholder",
    value: "",
    onChange: () => {},
};

export const Large = Template.bind({});

Large.args = {
    primary: true,
    size: "large",
    label: "Input",
    type: "text",
    placeholder: "Placeholder",
    value: "",
    onChange: () => {},
};