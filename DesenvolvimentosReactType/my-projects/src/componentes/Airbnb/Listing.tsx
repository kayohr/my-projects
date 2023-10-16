import React from 'react'
import AirbnbPropertyTypes from '../../types/AirbnbPropertyTypes';

interface ListingProps {
    properties: AirbnbPropertyTypes[];
    onPropertyClick: (id: number) => void;
  }

  const Listing: React.FC<ListingProps> = ({ properties, onPropertyClick }) => {
    // Função para escolher aleatoriamente entre "noite" e "dia"
    const getRandomTime = () => {
      const times = ['noite', 'dia'];
      const randomIndex = Math.floor(Math.random() * times.length);
      return times[randomIndex];
    };
  
    return (
      <div>
        <h2>Propriedades Disponíveis</h2>
        <ul>
          {properties.map((property) => (
            <li key={property.id} onClick={() => onPropertyClick(property.id)}>
              {property.title} - R${property.price}/{getRandomTime()}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
export default Listing