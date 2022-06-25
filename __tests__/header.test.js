import React from "react";
import { render, screen } from "@testing-library/react";
import { Header } from "../src";


test("should be defined", () => {
    expect(Header).toBeDefined();
});


test("should render username correctly", () => {
    const user = {name: "Sajad Mahyaei"};
    render(<Header user={user}/>);
    const username = screen.getByText(user.name);
    expect(username).toBeDefined();
});