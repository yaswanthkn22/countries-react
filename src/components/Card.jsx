import { Link } from "react-router-dom";
const Card = ({cardsDetails})=>{
    return (
        <Link to={`country/${cardsDetails.key}`}>
            <div className="card" key={cardsDetails.key}>
                <img src={cardsDetails.img} alt="Country image" />
                <div className="info">
                    <p><b>Name:</b>{cardsDetails.name}</p>
                    <p><b>Population:</b>{cardsDetails.population}</p>
                    <p><b>Region:</b>{cardsDetails.region}</p>
                    <p><b>Capital:</b>{cardsDetails.capital}</p>
                </div>
            </div>
        </Link>
    );
}



export default Card;