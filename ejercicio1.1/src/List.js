//functional components FC
import React from "react";

const list = [ 
    {
      id: 'a' , 
      name: 'Bruce' , 
      firstname: 'Waine' , 
      year: 1988 , 
    } ,
    {
      id: 'b' , 
      name: 'George' , 
      firstname: 'Lucas' , 
      year: 1990 , 
    } ,
    {
      id: 'c' , 
      name: 'Amanda' , 
      firstname: 'Cardoso' , 
      year: 1990 , 
    } ,
  ] ;
   
  const List = () => (     
    < ul >
      { list.map ( item => (  
        < li key = { item.id } > 
          < div > { item.id } </ div >
          < div > { item.name } </ div >
          < div > { item.firstname } </ div >
          < div > { item.year } </ div >
        </ li >
      ) ) }
    </ ul >
  ) ;

export default List;