import React, { useState, useEffect } from 'react';
import './style.css';

export default function App() {
  const SITE_APIS = 'https://api.motivereseller.com';
  const [brands, setBrands] = useState([]);
  const [conditions, setConditions] = useState([]);
  const [models, setModels] = useState([]);
  const [years, setYears] = useState([]);

  useEffect(() => {
    /** Get All Brands */
    const getBrands = fetch(SITE_APIS + '/api/brands').then(
      async (response) => {
        try {
          const makes = await response.json();
          setBrands(makes.data);
        } catch (error) {
          console.error(error);
        }
      }
    );

    /** Get All Models */
    const getModels = fetch(SITE_APIS + '/api/models').then(
      async (response) => {
        try {
          const models = await response.json();
          setModels(models.data.data);
        } catch (error) {
          console.error(error);
        }
      }
    );
  }, []);
  return (
    <div>
      <h1>Hello StackBlitz!</h1>
      <p>{brands}</p>
      <p>{/*models*/}</p>
    </div>
  );
}
