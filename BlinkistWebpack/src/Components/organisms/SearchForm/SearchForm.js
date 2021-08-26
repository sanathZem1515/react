import React, { useEffect, useState } from 'react';
import BookItem from '../Books/Books';
import CustomInput from '../../atoms/Input/Input';
import { useAuth0 } from "@auth0/auth0-react";

const SearchBooks= (props) =>{
    console.log(props.category);
    const [searchValue,setSearchValue] = useState('');
    const updateHandler = (event)=>{
        setSearchValue(event.target.value);
    }
    const isAuthenticated=useAuth0();
    useEffect(()=>{
    },[searchValue])

    return(
        <div style={{ paddingBottom: "30px"}}>
            { props.view === "1" && <CustomInput variant="standard" placeholder="Search by title or author" value={searchValue} onChange={updateHandler} />}
            <BookItem searchName={searchValue} searchVal={props.searchVal} category={props.category} view={props.view} authenticationStatus={isAuthenticated}/>
        </div>
    );
}
export default SearchBooks;