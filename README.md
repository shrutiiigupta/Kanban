
# Frontend Assignment

## Overview

This project involves creating an interactive **Kanban board** using **React JS** and **CSS**, which dynamically groups and sorts tickets based on user input. The application interacts with the API provided by **QuickSell**.

The Kanban board can group tickets by **Status**, **User**, or **Priority**, and tickets can be sorted by **Priority** or **Title**. The state of the board (grouping and sorting preferences) is preserved even after the page is reloaded.



## Requirements

1. **API Endpoint**: The application fetches data from the following API:  
   [API](https://api.quicksell.co/v1/internal/frontend-assignment)

2. **Features**: 
   - The Kanban board dynamically group tickets in three different ways:
     - **By Status**: Group tickets based on their current status.
     - **By User**: Group tickets based on the assigned user.
     - **By Priority**: Group tickets based on their priority level.

   - The tickets are sortable in two ways:
     - **By Priority**: Sort tickets in descending order of priority (Urgent > High > Medium > Low > No Priority).
     - **By Title**: Sort tickets in ascending order based on their title.


3. **Priority Levels**:
   - **Urgent** (Priority level 4)
   - **High** (Priority level 3)
   - **Medium** (Priority level 2)
   - **Low** (Priority level 1)
   - **No Priority** (Priority level 0)


4. **State Persistence**:
   - The board saves the user’s grouping and sorting preferences in the **localStorage** to maintain the state even after the page reloads.

