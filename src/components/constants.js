import React from 'react';
import { Circle, AlertTriangle } from 'lucide-react';

export const PRIORITY_MAP = {
  4: { label: 'Urgent', icon: <AlertTriangle className="icon icon-urgent" /> },
  3: { label: 'High', icon: <Circle className="icon icon-high" /> },
  2: { label: 'Medium', icon: <Circle className="icon icon-medium" /> },
  1: { label: 'Low', icon: <Circle className="icon icon-low" /> },
  0: { label: 'No Priority', icon: <Circle className="icon icon-no-priority" /> },
};

export const STATUS_ICONS = {
  Todo: <Circle className="icon status-todo" />,
  'In progress': <Circle className="icon status-progress" />,
  Backlog: <Circle className="icon status-canceled" />,
  Done: <Circle className="icon status-done" />,
};
