import { useEffect, useState } from "react";

export default function App() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data))
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  const cardStyle ={
    width: "200px",
    border: "1px solid #ccc",
    borderRadius: "10px",
    margin: "10px",
    padding: "10px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: 'center'
  }

  const imageStyle ={
    height:'100px',
    width: '100px'
  }

  const containerStyle ={

    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }

  return (
    <div style ={containerStyle}>
      {countries.map((country) => (
        <div key={country.cca2} style ={cardStyle}>
          {/* Use country.flags.png instead of countries.flags.png */}
          <img src={country.flags.png} alt={`Flag of ${country.name.common}`} style = {imageStyle} />
          <h2>{country.name.common}</h2>
        </div>
      ))}
    </div>
  );
}
