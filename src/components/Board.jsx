import Card from "./Card";


const Board = ({cards})=>{
    if (cards.length === 0) return <h3>No Matches Found</h3>
    return (
        <div className="board">
            { 
                cards.map((card, index)=>{
                    return <Card key={index} cardsDetails={{"name":card.name.common, "img": card.flags.png, "population": card.population, "key": card.ccn3, "region": card.region, "capital": card.capital}}/>;
                })
            }
        </div>
    );
}

export default Board;