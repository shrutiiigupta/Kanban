import React from 'react';
import Down from '../../assets/down.svg';
import Display from '../../assets/Display.svg';

const DisplayMenu = ({ showDisplayMenu, setShowDisplayMenu, grouping, setGrouping, sorting, setSorting }) => (
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
);

export default DisplayMenu;
