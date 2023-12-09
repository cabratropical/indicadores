
import React, { useState } from 'react';
import { Table, Button } from 'react-bootstrap';
import FiltersComponent from './Buscador';
import DataFetchingComponent from './MiApi';
import './assets/stylos.css'


function App() {
  const [tipoIndicador, setTipoIndicador] = useState('uf');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [data, setData] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  const clearStartDate = () => {
    setStartDate(null);
  };

  const clearEndDate = () => {
    setEndDate(null);
  };

  const onDataFetched = (jsonData) => {
    setData(jsonData);
  };

  const isDateInRange = (date, start, end) => {
    return date >= start && date <= end;
  };

  const handleSort = () => {
   
    setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
  };

  const sortedData = data
    ? [...data.serie].sort((a, b) => {
  
        const dateA = new Date(a.fecha);
        const dateB = new Date(b.fecha);

       
        return sortOrder === 'asc' ? dateA - dateB : dateB - dateA;
      })
    : [];

  return (
    <>
      
      <FiltersComponent
        tipoIndicador={tipoIndicador}
        setTipoIndicador={setTipoIndicador}
        startDate={startDate}
        handleStartDateChange={handleStartDateChange}
        clearStartDate={clearStartDate}
        endDate={endDate}
        handleEndDateChange={handleEndDateChange}
        clearEndDate={clearEndDate}
        handleSort={handleSort}
        sortOrder={sortOrder}
      />

    
      <DataFetchingComponent tipoIndicador={tipoIndicador} onDataFetched={onDataFetched} />

      
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Valor</th>
            <th>
              Fecha{' '}
              
              <Button variant="link" size="sm" onClick={handleSort}>
                {sortOrder === 'asc' ? '↑' : '↓'}
              </Button>
            </th>
          </tr>
        </thead>
        <tbody>
          {sortedData.map((item) => (
          
            (!startDate || !endDate || isDateInRange(new Date(item.fecha), startDate, endDate)) && (
              <tr key={item.fecha}>
                <td>{item.valor}</td>
                <td>{item.fecha}</td>
              </tr>
            )
          ))}
        </tbody>
      </Table>
    </>
  );
}

export default App;
