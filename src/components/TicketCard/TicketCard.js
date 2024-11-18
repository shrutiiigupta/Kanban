import React from 'react';
import './TicketCard.css'; // Create and move styles specific to TicketCard here
import { STATUS_ICONS, PRIORITY_MAP } from '../constants'; // Import if you store constants separately

const TicketCard = ({ ticket, users }) => {
  const assignedUser = users.find(user => user.id === ticket.userId);

  return (
    <div key={ticket.id} className="ticket-card">
      <div className="ticket-header">
        <span className="ticket-id">{ticket.id}</span>
        <div className="user-avatar">
          {assignedUser && assignedUser.name.charAt(0)}
        </div>
      </div>
      <div className="ticket-title-container">
        <div className="status-icon-container">
          {STATUS_ICONS[ticket.status]}
        </div>
        <div className="ticket-title">{ticket.title}</div>
      </div>
      <div className="ticket-footer">
        <div className="status-icon-container">
          {PRIORITY_MAP[ticket.priority].icon}
        </div>
        <div className="tag">Feature Request</div>
      </div>
    </div>
  );
};

export default TicketCard;
