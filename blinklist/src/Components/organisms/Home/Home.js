import { Container } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import SearchBooks from '../SearchForm/SearchForm';

function Home() {
  const [searchVal, setSearchVal] = useState("");
  const [searchCat, setSearchCat] = useState("");
  const [view, setView] = useState("0");

  useEffect(() => {
  }, [searchVal, searchCat, view]);

  const Printed = (search) => {
    setSearchVal(search);
  };

  const handleCategory = (category) => {
    setSearchCat(category);
  };

  const sendView = (view) => {
    setView(view);
  };
  return (
    <Container maxWidth="md">
      <Header click={Printed} handleCategory={handleCategory} sendView={sendView} />
      <SearchBooks searchVal={searchVal} category={searchCat} view={view} />
    </Container>
  );
}
export default Home;
