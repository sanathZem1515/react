import React, { useEffect, useState } from 'react';
import CardItems from '../../molecules/Card/Card';

 export default function BookCard (props) {


  const [library,setLibrary] = useState(false);

  const handleClick=() =>
  {
    setLibrary(true);
    props.handleLibrary("true",props.id);

  }

  useEffect(()=>{
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[library])

  return <CardItems name={props.name} time={props.time} set={props.set} onClick={handleClick} disabled={library} title={props.title} author={props.author}  image={props.image}/>
}
