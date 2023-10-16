import React from 'react'
import AirbnbPropertyTypes from '../../types/AirbnbPropertyTypes';
interface PropertyDetailProps {
    property: AirbnbPropertyTypes | null;
    onReserveClick: () => void;
  }
  const PropertyDetail: React.FC<PropertyDetailProps> = ({ property, onReserveClick }) => (
    <div>
      <h2>Detalhes da Propriedade</h2>
      {property ? (
        <>
          <h3>{property.title}</h3>
          <p>{property.description}</p>
          <p>Preço por noite: R${property.price}</p>
          <button onClick={onReserveClick}>Reservar</button>
        </>
      ) : (
        <p>Selecione uma propriedade para ver detalhes.</p>
      )}
    </div>
  );
  
export default PropertyDetail
