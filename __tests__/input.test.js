import React from "react";
import { render, screen } from "@testing-library/react";
import { Input } from "../src";
// import 'jest-dom/extend-expect';

test("should be defined", () => {
    expect(Input).toBeDefined();
});


test("should render label text correctly", () => {
    const label = "Hello World";
    render(<Input label={label}/>);
    const inputLabel = screen.getByText(label);
    expect(inputLabel).toBeDefined();
});

test("should have the primary class by default", () => {
    render(<Input label="Hello World"/>);
    let classes = screen.getByTestId('input').getAttribute('class');
    expect(classes.includes('storybook-input--primary')).toBe(true);
});

test("should have the secondary class", () => {
    render(<Input primary={false} label="Hello World"/>);
    let classes = screen.getByTestId('input').getAttribute('class');
    console.log(classes);
    expect(classes.includes('storybook-input--secondary')).toBe(true);
});