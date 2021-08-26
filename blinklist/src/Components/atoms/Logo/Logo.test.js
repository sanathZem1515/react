import { render,screen } from "@testing-library/react";
import Logo from "./Logo";

test('renders a logo',()=>{
    render(<Logo/>);

    const logoElement = screen.getByTestId('testLogo');

    expect(logoElement).toBeInTheDocument();
});