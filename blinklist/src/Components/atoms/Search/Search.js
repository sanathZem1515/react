import { IconButton } from "@material-ui/core";
import Search from "@material-ui/icons/SearchSharp";

const CustomSearch = ({onClick,title}) => {
    return ( 
        <div>
             <IconButton onClick={onClick} role='icon' title={title}>
                <Search />
            </IconButton>
        </div>
     );
};
 
export default CustomSearch;