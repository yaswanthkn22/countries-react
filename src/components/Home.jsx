import Board from "./Board";
import { useState, useEffect } from 'react';
import Search from "./Search";
import GroupBy from "./GroupBy";


const Home = ()=>{

    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    const [group, setgroup] = useState('');

    async function getCards(search,group){
      const response = await fetch('https://restcountries.com/v3.1/all');
      const cards = await response.json();
      setCards(cards.filter((card)=> {
        if (group !== ''){
          return card.region.toLowerCase() === group && card.name.common.toLowerCase().startsWith(search.toLowerCase());
        }else {
          return card.name.common.toLowerCase().startsWith(search.toLowerCase());
        }
        
      }));
    }
    
    useEffect(()=>{
    
      const cards = async()=>{
        await getCards(search,group)
      }
      cards()
    
    },[search,group]);
    
    function searchFun(search){
      setSearch(search);
    }
    function onSelect(region){
      setgroup(region);
    }
    
      return (
        <div className="App">
          <div className="filters">
            <Search onSearch={searchFun} search={search} />
            <GroupBy onSelect={onSelect} />
          </div>
          
         <Board cards={cards}/> 
        </div>
      );

}


export default Home;