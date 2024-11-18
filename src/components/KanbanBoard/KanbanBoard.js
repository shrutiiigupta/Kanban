import React, { useState, useEffect } from 'react';
import {User} from 'lucide-react';
import Add from '../../assets/add.svg';
import Down from '../../assets/down.svg';
import Display from '../../assets/Display.svg';
import Dots from '../../assets/3 dot menu.svg';
import './KanbanBoard.css';
import TicketCard from '../TicketCard/TicketCard';
import { STATUS_ICONS, PRIORITY_MAP } from '../constants'; 


const KanbanBoard = () => {
  const [tickets, setTickets] = useState([]);
  const [users, setUsers] = useState([]);
  const [grouping, setGrouping] = useState(localStorage.getItem('grouping') || 'status');
  const [sorting, setSorting] = useState(localStorage.getItem('sorting') || 'priority');
  const [showDisplayMenu, setShowDisplayMenu] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('grouping', grouping);
    localStorage.setItem('sorting', sorting);
  }, [grouping, sorting]);

  const fetchData = async () => {
    try {
      const response = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
      const data = await response.json();
      setTickets(data.tickets);
      setUsers(data.users);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const sortTickets = (ticketsToSort) => {
    return [...ticketsToSort].sort((a, b) => {
      if (sorting === 'priority') {
        return b.priority - a.priority;
      }
      return a.title.localeCompare(b.title);
    });
  };

  const groupTickets = () => {
    let groups = {};
    
    if (grouping === 'status') {
      groups = {
        'Backlog': [],
        'Todo': [],
        'In progress': [],
        'Done': [],
        'Cancelled': [],
      };
      tickets.forEach(ticket => {
        const normStatus = ticket.status;
        if (groups[normStatus]) {
          groups[normStatus].push(ticket);
        } else{
            console.warn(`Unknown status: ${normStatus}`);
        }
      });
    } else if (grouping === 'user') {
      users.forEach(user => {
        groups[user.name] = [];
      });
      tickets.forEach(ticket => {
        const user = users.find(u => u.id === ticket.userId);
        if (user && groups[user.name]) {
          groups[user.name].push(ticket);
        }
      });
    } else if (grouping === 'priority') {
      Object.keys(PRIORITY_MAP).forEach(priority => {
        groups[priority] = [];
      });
      tickets.forEach(ticket => {
        if (groups[ticket.priority.toString()]) {
          groups[ticket.priority.toString()].push(ticket);
        }
      });
    }

    Object.keys(groups).forEach(key => {
      groups[key] = sortTickets(groups[key]);
    });

    return groups;
  };


  const renderGroups = () => {
    const groups = groupTickets();
    
    const customPriorityOrder = ['0', '4', '3', '2', '1'];

    return Object.entries(groups)
        .sort(([a], [b]) => {
        if (grouping === 'priority') {
            return customPriorityOrder.indexOf(a) - customPriorityOrder.indexOf(b);
        }
        return 0; 
        })
        .map(([groupName, groupTickets]) => (
        <div key={groupName} className="group-column">
            <div className="group-header">
            <div className="group-header-left">
                {grouping === 'priority' ? (
                PRIORITY_MAP[groupName].icon
                ) : grouping === 'status' ? (
                STATUS_ICONS[groupName]
                ) : (
                <User className="icon" />
                )}
                <span className="group-title">
                {grouping === 'priority' ? PRIORITY_MAP[groupName].label : groupName}
                </span>
                <span className="group-count">{groupTickets.length}</span>
            </div>
            <div className="group-actions">
                <button className="action-button">
                   <img src={Add} alt="Add Icon" className="icon"/> 
                
                </button>
                <button className="action-button">
                <img src={Dots} alt="dots icn" className="icon" />
                
                </button>
            </div>
            </div>
            <div className="tickets-container">
            {groupTickets.map(ticket => 
                <TicketCard key={ticket.id} ticket={ticket} users={users} />
                
                )}
            </div>
        </div>
        ));
    };

/*------------------------------------------------------------------------ */

  return (
    <div className="kanban-container">
      <div className="kanban-wrapper">
        <div className="display-button-container">
            
            <button
                onClick={() => setShowDisplayMenu(!showDisplayMenu)}
                className="display-button"
            >
                <img src={Display} alt="display icn" className="icon" />
                <span>Display</span>
                <img src={Down} alt="down icon" className="icon" />
            </button>
            

          {showDisplayMenu && (
            <div className="display-menu">
              <div className="select-group">
                <label className="select-label">Grouping</label>
                <select
                  value={grouping}
                  onChange={(e) => setGrouping(e.target.value)}
                  className="select-input"
                >
                  <option value="status">Status</option>
                  <option value="user">User</option>
                  <option value="priority">Priority</option>
                </select>
              </div>
              <div className="select-group">
                <label className="select-label">Ordering</label>
                <select
                  value={sorting}
                  onChange={(e) => setSorting(e.target.value)}
                  className="select-input"
                >
                  <option value="priority">Priority</option>
                  <option value="title">Title</option>
                </select>
              </div>
            </div>
          )}
        </div>

        <div className="groups-container">
          {renderGroups()}
        </div>
      </div>
    </div>
  );
};

export default KanbanBoard;