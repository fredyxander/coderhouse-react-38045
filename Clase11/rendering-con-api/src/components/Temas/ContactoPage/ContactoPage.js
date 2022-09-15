import React, { useEffect, useState } from 'react';

export const ContactoPage = () => {
  const [datos, setDatos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const getData = async () => {
        const response = await fetch(
          'https://rickandmortyapi.com/api/character'
        );
        const data = await response.json();
        console.log(data.results);
        setDatos(data.results);
        setIsLoading(false);
      };
      getData();
    }, 3000);
  }, []);

  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      {isLoading === false ? (
        <div>
          {datos.map((item) => (
            <p>{item.name}</p>
          ))}
        </div>
      ) : (
        <p>carganbdo...</p>
      )}
    </div>
  );
}
