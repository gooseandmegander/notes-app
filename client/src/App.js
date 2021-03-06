import React from 'react';
import { Route } from 'react-router-dom';

import Nav from './components/Nav/Nav';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';
import ListView from './components/ListView/ListView';
import NoteView from './components/NoteView/NoteView';
import EditNote from './components/EditNote/EditNote';

const App = () => {
  return (
    <div style={{ display: 'flex' }}>
      <Route path='/' component={Nav} />
      <div className='left-container'>
        <Route exact path='/create-new-note' component={CreateNewNote} />
        <Route exact path='/' component={ListView} />
        <Route exact path='/notes/:id' component={NoteView} />
        <Route exact path='/notes/edit/:id' component={EditNote} />
      </div>
    </div>


  );
}

export default App;
