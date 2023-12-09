// DataFetchingComponent.js
import { useEffect } from 'react';

const DataFetchingComponent = ({ tipoIndicador, onDataFetched }) => {
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://www.mindicador.cl/api/${tipoIndicador}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const jsonData = await response.json();
        onDataFetched(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [tipoIndicador]);

  return null; // No need to render anything in this component
};

export default DataFetchingComponent;
