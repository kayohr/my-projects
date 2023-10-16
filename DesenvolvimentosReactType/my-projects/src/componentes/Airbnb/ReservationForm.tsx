import React from 'react'

interface ReservationFormProps {
    onCancelReservation: () => void;
  }
  const ReservationForm: React.FC<ReservationFormProps> = ({ onCancelReservation }) => {
    return (
        <div>
          <h2>Formulário de Reserva</h2>
          {/* Adicione campos do formulário conforme necessário */}
          <p>Campos da sua reserva aqui...</p>
          <button onClick={onCancelReservation}>Cancelar Reserva</button>
          {/* Adicione a lógica para confirmar a reserva e adicionar à lista */}
        </div>
      );
    };

export default ReservationForm