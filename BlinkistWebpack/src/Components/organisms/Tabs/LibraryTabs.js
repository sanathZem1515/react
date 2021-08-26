import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import { Tab } from '@material-ui/core';
import React from 'react';
import TextItems from '../../atoms/TextItem/TextItem';
import { useHistory } from 'react-router';

const useStyles = makeStyles({
  root: {
    flexGrow: 10,
    maxWidth: 900,
    paddingRight: 20,
    boxShadow:"none"
  },
  library:{
    paddingTop: "10px",
  }

});

export default function LibraryTabs(props) {
    const [value, setValue] = useState(0);
  const history = useHistory();

  
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const classes = useStyles();
  const handleCurrentBooks=(event)=>{
      var text=event.target.innerText;
      console.log(event)
      if(text==="Currently Reading")
      {
      props.handleCurrentBooks("0");
      history.push("/current")
      }
      else
      {
          history.push("/finished")
          props.handleCurrentBooks("2");
      }
   
  }
  return (
    <React.Fragment>
    <TextItems className={classes.library} name="My Library" variant="h4"/>
    <Paper square className={classes.root}>
      
      <Tabs
      value={value}
        indicatorColor="primary"
        textColor="primary"
        onChange={handleChange}
        aria-label="disabled tabs example"
        inkBarStyle={{background: '#22c870'}}>
        <Tab label="Currently Reading" onClick={handleCurrentBooks}/>
        <Tab label="Finished" onClick={handleCurrentBooks}/>
      </Tabs>
    </Paper>
    </React.Fragment>
  );
}
