import React, { useState } from 'react'
import mockProperties from '../../services/Airbnb/MockProperties'
import AirbnbPropertyTypes from '../../types/AirbnbPropertyTypes';
import Listing from '../../componentes/Airbnb/Listing';
import PropertyDetail from '../../componentes/Airbnb/PropertyDetail';
import ReservationForm from '../../componentes/Airbnb/ReservationForm';

function Airbnb() {
    const [selectedProperty, setSelectedProperty] = useState< AirbnbPropertyTypes| null>(null);
    const [reservedProperties, setReservedProperties] = useState<AirbnbPropertyTypes[]>([]);


    const handlePropertyClick = (id: number) => {
        const property = mockProperties.find(p => p.id === id) || null;
        setSelectedProperty(property);
    }
    
    const handleReserveClick = () => {
        if (selectedProperty) {
            setReservedProperties((prevProperties) => [...prevProperties, selectedProperty]);
            setSelectedProperty(null);
            alert('Reserva confirmada!');
          }
        }

        const handleCancelReservation = (property: AirbnbPropertyTypes) => {
            const confirmed = window.confirm('Deseja cancelar a reserva desta propriedade?');
            if (confirmed) {
              setReservedProperties((prevProperties) => prevProperties.filter((p) => p.id !== property.id));
              alert('Reserva cancelada com sucesso!');
            }
          };
  
  
    return (
    <div>Airbnb
         <Listing properties={mockProperties} onPropertyClick={handlePropertyClick} />
      {selectedProperty && (
        <>
          <PropertyDetail property={selectedProperty} onReserveClick={handleReserveClick} />
          <ReservationForm onCancelReservation={() => handleCancelReservation(selectedProperty)} />
        </>
      )}
      {reservedProperties.length > 0 && (
        <div>
          <h2>Propriedades Reservadas</h2>
          <ul>
            {reservedProperties.map((property) => (
              <li key={property.id}>
                {property.title}{' '}
                <button onClick={() => handleCancelReservation(property)}>Cancelar Reserva</button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default Airbnb