import { render,screen } from "@testing-library/react";
import CustomSearch from "./Search";
import Search from "@material-ui/icons/SearchSharp";
import SearchSharp from "@material-ui/icons/SearchSharp";


test('renders a logo',()=>{
    render(<CustomSearch title="searchTest"/>);

    const searchElement = screen.getByRole("icon");

    expect(searchElement).toBeInTheDocument();
});