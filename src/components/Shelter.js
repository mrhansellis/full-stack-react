import React, {useState, useEffect} from 'react';

export default function Shelter() {
  // const section
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [allDinos, setAllDinos] = useState([]);

  // useEffect

  useEffect(() =>{
    fetch(`https://localhost:7220/api/v2/residents`)
    
    .then(response => {
      if (!response.ok) {
        throw new Error(`${response.status}: ${response.statusText}`);
      } else {
        return response.json()
      }
    }) 
    .then((jsonifiedResponse) => {
      setAllDinos(jsonifiedResponse)
      setIsLoaded(true)
    })
    .catch((error) => {
      setError(error.message)
      setIsLoaded(true)
    });
  },[])
  console.log(allDinos);

  if (error) {
    return <h1>Error: {error}</h1>;
  } else if (!isLoaded) {
    return <h1>...loading...</h1>;
  } else {
    return (
      <>
        <h1>Residents</h1>
        <ul>
          {allDinos.map((residents, index) =>
            <li key={index}>
              <h3>{residents.name}</h3>
            </li>
          )}
        </ul>
      </>
    )
  }
  
  
}
