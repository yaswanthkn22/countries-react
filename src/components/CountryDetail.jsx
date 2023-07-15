import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const CountryDetail = () => {
  const { id } = useParams();
  const [country, setCountry] = useState({});

  async function getCountry() {
    const response = await fetch(`https://restcountries.com/v3.1/alpha/${id}`);
    const countryData = await response.json();
    console.log(countryData);
    setCountry(countryData[0]);
    
    return countryData;
  }

  useEffect(() => {
    const fetchData = async () => {
      await getCountry();
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  return (
    <div className="details-container">
      <div id="back" >
        <Link to="/">Back</Link>
      </div>
      <div className="country">
        <img style={{
                boxShadow: '5px 5px 5px grey',
              }} src={country.flags?.png} alt={country.flags?.alt} />
        <div className="country-info">
            <h1>{country.name?.common}</h1>
            <p><b>Official Name:</b>{country.name?.official}</p>
            <p><b>Population:</b>{country.population }</p>
            <p><b>Region:</b>{country.region}</p>
            <p><b>Sub region:</b>{country.subregion}</p>
            <p><b>Capital:</b>{country.capital}</p>
        </div>
        <div className="neighbors">
          <p>Border Countries:</p>
          {country.borders?.map((id)=>{
            return (
            <>
              <Link style={{
                border: '2px solid black',
                marginRight: '8px',
                padding: '5px',
                backgroundColor: 'lightwhite',
                boxShadow: '5px 5px 5px grey',
              }} to={`/country/${id}`}>{id}</Link>
            </>
            );
          })}
        </div>
      </div>
     
    </div>
  );
};

export default CountryDetail;
