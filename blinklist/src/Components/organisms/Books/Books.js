import React, { useState, useEffect } from 'react';
import BookCard from '../BookCard/BookCard';
import { Grid } from '@material-ui/core';

import {  BrowserRouter as Router,  Switch,  Route } from "react-router-dom";


const BookItem = (props) => {
  const [books, setBooks] = useState([]);
  const [currBooks, setCurrBooks] = useState([]);
  const [finBooks, setFinBooks] = useState([]);
  const  [toggle,setToggle]=useState(true);

  useEffect(() => {
    fetchAllBooks();
    filterBooks();
  }, [props.searchName, props.searchVal, props.category, props.view,toggle,books]);

  
  const fetchAllBooks = async () => {
    await fetch('http://localhost:8086/books')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setBooks(data);
      });
  };

  const filterBooks = () => {
    setCurrBooks(books.filter((book) => {
      return book.status === "current";
    }));

    setFinBooks(books.filter((book) => {
      return book.status === "finished";
    }));
  };

  let bookslist = books;
  if (props.searchName !== undefined ) {
    bookslist = bookslist.filter(function (book) {
      return book.title.toLowerCase().indexOf(props.searchName.toLowerCase()) > -1 || book.author.toLowerCase().indexOf(props.searchName.toLowerCase()) > -1;
    });
  }
  if (props.searchVal !== undefined) {
    bookslist = bookslist.filter(function (book) {
      return book.title.toLowerCase().indexOf(props.searchVal.toLowerCase()) > -1 || book.author.toLowerCase().indexOf(props.searchVal.toLowerCase()) > -1;
    }
    );
  }
  
  if (props.category !== undefined && props.category !== "") {
    bookslist = bookslist.filter(function (book) {
      return ((book.category.toLowerCase() === props.category.toLowerCase()));
    });
  }
  
  const handleLibrary = async (library, id) => {
    let tempBook;
    if (library) {
      await fetch('http://localhost:8086/books/' + id)
        .then(res => {
          return res.json();
        })
        .then(data => {
          tempBook = data;
        });
      const arr = ["explore", "current", "finished", "current"]; 
      tempBook.status = arr[arr.indexOf(tempBook.status) + 1];
      console.log(tempBook);
      await fetch('http://localhost:8086/books/' + id, {
        method: 'PUT',
        body: JSON.stringify(tempBook),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
    }
    setToggle(!toggle);
  };

  const allbooks = bookslist.map((item) => {
     let set=true;
    if(item.status==="current" || item.status==="finished"){
      set=false;
    }
    return (
      <Grid item xs={4}>
        <BookCard key={item.id} {...item} set={set} name="Add to Library" handleLibrary={handleLibrary} ></BookCard>
      </Grid>
    );
  });

  let currBooksList = currBooks;
  let finBooksList = finBooks;
  if(props.searchVal !== undefined && props.searchVal!=="") 
  {
    if(props.view === "0")
    {
      currBooksList=bookslist;
    }
    else if(props.view === "2")
    {
    finBooksList = bookslist;

    }
  }

  const allotBooks = (tempBooks,tempName,tempSet) => {
    return tempBooks.map((item) => {
      return (
        <Grid item xs={4}>
          <BookCard key={item.id} {...item} name={tempName} set={tempSet} handleLibrary={handleLibrary}></BookCard>
        </Grid>
      );
    });
  };

  const allbooksinhome = allotBooks(bookslist,"Login to Read",false);
  const currbooks = allotBooks(currBooksList,"Finish Reading",true);
  const finbooks = allotBooks(finBooksList,"Read Again",true);

  return (
      <Router>
    <React.Fragment>

        <Switch>
          <Route path="/explore">
            <Grid container spacing={2}>
              {allbooks}
            </Grid>
          </Route>

          <Route path="/current">
            <Grid container spacing={2}>
              {currbooks}
            </Grid>
          </Route>

          <Route path="/finished">
            <Grid container spacing={2}>
              {finbooks}
            </Grid>
          </Route>
     
    {
    props.authenticationStatus.isAuthenticated &&
    <Grid container spacing={2}>
      {props.view === "1" && allbooks}
      {props.view === "0" && currbooks}
      {props.view === "2" && finbooks}
    </Grid>
    }
    { !props.authenticationStatus.isAuthenticated &&
    <Grid container spacing={2}>
      {allbooksinhome}
    </Grid>
    }
     </Switch>
    </React.Fragment>

     </Router>

  );
};

export default BookItem;