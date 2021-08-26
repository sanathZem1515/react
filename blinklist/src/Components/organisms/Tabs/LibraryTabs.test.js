import { render,screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import LibraryTabs from './LibraryTabs';

test('renders a library tab click action ',()=>{
    render(<LibraryTabs />)

    const currentElement = screen.getByTestId("libraryTest");
    // userEvent.c

    // console.log(window.location.href);
    expect(currentElement).toBeInTheDocument();

})