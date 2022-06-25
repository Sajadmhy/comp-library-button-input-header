import React from "react";
import { render, screen } from "@testing-library/react";
import { Button } from "../src";

test("should be defined", () => {
    expect(Button).toBeDefined();
});


test("should render text correctly", () => {
    const label = "Hello World";
    render(<Button label={label}/>);
    const button = screen.getByText(label);
    expect(button).toBeDefined();
});


test("should have the primary class by default", () => {
    render(<Button label="Hello World"/>);
    let classes = screen.getByTestId('input').getAttribute('class');
    expect(classes.includes('storybook-button--primary')).toBe(true);
});

test("should have the secondary class", () => {
    render(<Button primary={false} label="Hello World"/>);
    let classes = screen.getByTestId('input').getAttribute('class');
    console.log(classes);
    expect(classes.includes('storybook-button--secondary')).toBe(true);
});