import { Column } from './Components/Column';
import { ColumnType } from './types/types';
import { Profile } from './Components/Profile';
import { useEffect, useState } from 'react';


function App() {

  return (
    <div className='layout'>
      <header>
        <h1>Awesome Kanban Board</h1>
        <Profile/>
      </header>

      
        <div className='columns-container'>
          <Column column={ColumnType.BACKLOG}/>
          <Column column={ColumnType.READY}/>
          <Column column={ColumnType.IN_PROGRESS}/>
          <Column column={ColumnType.FINISHED}/>
        </div>
      
      <footer>...</footer>
    </div>
  );
}

export default App;
