import Header from "./Header";
import Board from "./Board";
import { useState, useEffect } from 'react';
import Search from "./Search";


const Home = ()=>{

    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    
    async function getCards(search){
      const response = await fetch('https://restcountries.com/v3.1/all');
      const cards = await response.json();
      setCards(cards.filter((card)=> card && card.name.common.toLowerCase().startsWith(search.toLowerCase())));
    }
    
    useEffect(()=>{
    
      const cards = async()=>{
        await getCards(search)
      }
      cards()
    
    },[search]);
    
    function searchFun(search){
      setSearch(search);
    }
    
      return (
        <div className="App">
          <Search onSearch={searchFun} search={search} />
         <Board cards={cards}/> 
        </div>
      );

}


export default Home;