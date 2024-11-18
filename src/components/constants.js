import React from 'react';
import Urgent from '../assets/urgentCol.svg';
import High from '../assets/Img - High Priority.svg';
import Low from '../assets/Img - Low Priority.svg';
import Med from '../assets/Img - Medium Priority.svg';
import No from '../assets/No-priority.svg';
import Backlog from '../assets/Backlog.svg';
import Done from '../assets/Done.svg';
import InProg from '../assets/in-progress.svg';
import Todo from '../assets/To-do.svg';
import Cancel from '../assets/Cancelled.svg';

export const PRIORITY_MAP = {
  4: { label: 'Urgent', icon: <img src={Urgent} alt="urgent icon" className="icon"/> },
  3: { label: 'High', icon: <img src={High} alt="high icn" className="icon " /> },
  2: { label: 'Medium', icon: <img src={Med} alt="medium icon" className="icon " /> },
  1: { label: 'Low', icon: <img src={Low} alt="low icon" className="icon" /> },
  0: { label: 'No Priority', icon: <img src={No} alt="no icon" className="icon" /> },
};

export const STATUS_ICONS = {
  Todo: <img src={Todo} alt="Todo icon" className="icon"/> ,
  'In progress': <img src={InProg} alt="inprog icon" className="icon"/> ,
  Backlog: <img src={Backlog} alt="Backlog icon" className="icon"/> ,
  Done: <img src={Done} alt="Done icon" className="icon"/>,
  Cancelled: <img src={Cancel} alt="cancel icon" className="icon"/>,
};
