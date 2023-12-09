// FiltersComponent.js
import React from 'react';
import { Dropdown, DropdownButton, Button } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const FiltersComponent = ({
  tipoIndicador,
  setTipoIndicador,
  startDate,
  handleStartDateChange,
  clearStartDate,
  endDate,
  handleEndDateChange,
  clearEndDate,
  handleSort,
  sortOrder,
}) => {
  return (
    <div>
      <h2>Valores del Indicador</h2>

      {/* Dropdown for tipoIndicador */}
      <DropdownButton id="dropdown-tipoIndicador" title={`Tipo Indicador: ${tipoIndicador}`}>
        {['uf', 'ivp', 'dolar', 'dolar_intercambio', 'euro', 'ipc', 'utm', 'imacec', 'tpm', 'libra_cobre', 'tasa_desempleo', 'bitcoin'].map((indicador) => (
          <Dropdown.Item key={indicador} onClick={() => setTipoIndicador(indicador)}>
            {indicador}
          </Dropdown.Item>
        ))}
      </DropdownButton>

      {/* Datepickers for filtering by date range */}
      <div>
        <label>Start Date:</label>
        <div className="date-picker-container">
          <DatePicker selected={startDate} onChange={handleStartDateChange} dateFormat="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" />
          {startDate && (
            <Button variant="outline-secondary" size="sm" onClick={clearStartDate}>
              &#x2716;
            </Button>
          )}
        </div>
      </div>
      <div>
        <label>End Date:</label>
        <div className="date-picker-container">
          <DatePicker selected={endDate} onChange={handleEndDateChange} dateFormat="yyyy-MM-dd'T'HH:mm:ss.SSS'Z'" />
          {endDate && (
            <Button variant="outline-secondary" size="sm" onClick={clearEndDate}>
              &#x2716;
            </Button>
          )}
        </div>
      </div>

      {/* Sort button */}
      <div>
        <Button variant="secondary" onClick={handleSort}>
          Sort by Fecha
          <Button variant="link" size="sm" onClick={handleSort}>
            {sortOrder === 'asc' ? '↑' : '↓'}
          </Button>
        </Button>
      </div>
    </div>
  );
};

export default FiltersComponent;
