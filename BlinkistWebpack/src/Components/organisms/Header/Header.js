import React, { useEffect } from "react";
import Explore from '../Explore/Explore'
import Button from "../../atoms/Button/Button";
import Logo from "../../atoms/Logo/Logo";
import CustomSearch from "../../atoms/Search/Search";
import Login from '../Login/Login';
import { AppBar } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Profile from '../Profile/Profile';
import Form from '../Form/Form';
import { Container } from '@material-ui/core';
import { useState } from 'react';
import LibraryTabs from '../Tabs/LibraryTabs';
import CustomInput from "../../atoms/Input/Input";
import { useAuth0 } from "@auth0/auth0-react";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 2,
    color: theme.palette.getContrastText(grey[50]),
    backgroundColor: 'white',
    padding: 10,
    boxShadow: "none",
  },
  search:{
    paddingLeft: 30,
  },
  menu: {
    boxShadow: "none",
    flexGrow: 1,
  },
}));

export default function Header(props) {
  const classes = useStyles();
  const [value,setValue]=useState(0);
  const [searchValue,setSearchValue]=useState('');
  const [statusValue,setStatusValue]=useState(false);
  const [view,setView]=useState("0");

  const { isAuthenticated } =useAuth0();
  const history = useHistory();

    

  useEffect(()=>{
    props.click(searchValue);
    props.sendView(view);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[searchValue,view])

  const handleData=()=>{
  console.log("handledata");
   setValue(0);
  };

  const handleLibrary=()=>{
     setValue(0);
     setSearchValue('');
     setStatusValue(false);
     setView("0");
     history.push("/current")
    };

  const toggle=(val)=>{
    if(val===2)
    {
    setValue(0);
    setSearchValue('');
    }
    else
    {
    setValue(2);
    }
  };

  const searchNew=(val)=>{
    setStatusValue(false);
    setSearchValue(val);
  };

  const handleCategory = (category) =>{
    console.log(category);
    props.handleCategory(category);
  }

  const handleExploreClick = () =>{
    setView("1");
  }
  const handleCurrentBooks=(view)=>{
    console.log(view);
    setView(view);
  }
  return (
    <div className={classes.root}>
      <div style={{float:'right',paddingTop:20}}>
      <Login />
      <Profile />
      </div>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Logo className={classes.logo} />
          <CustomSearch  onClick={()=>{toggle(value);}} />
          { (value===0 || value===1) && <Explore click={handleExploreClick} cateClick={handleCategory} view ={view}/>} 
          { isAuthenticated && (value===0 || value===1) && <div>
            <Button name="My Library" onClick={()=>{handleLibrary();}} view={view}/>
            <Button name="Add Book" onClick={()=>{setValue(1);}}/>
          </div>}
          {(value===2) && <CustomInput placeholder="Search for titles, authors and Categories" value={searchValue} onChange={(event)=>searchNew(event.target.value.trim())}/>}
        </Toolbar>
      </AppBar>
      <Container maxWidth="md">
      <div>
     {((value===1 || value===2 || value===0) && (view==="0"||view==="2"))&& isAuthenticated &&<LibraryTabs handleCurrentBooks={handleCurrentBooks} searchValue={searchValue} exploreStatus={statusValue}/>}
      {value===1 && <Form variant="outlined" parentFunction={()=>{handleData();}}/>}
      </div>
    </Container>
    </div>
  );
}