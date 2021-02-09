import React from 'react';
import 'react-bootstrap';
import Navbar from './components/Navbar';
import Login from './components/Login';
import Searchbar from './components/SearchBar';
import ExportAdd from './components/ExportAdd';
import DataTable from './components/DataTable';
import './App.css';

const title = 'Contactos';

function App() {
  return (
    <div className='App'>
      <Navbar />
      <h1 className='title'>{title}</h1>
      <section className='manageData'>
        <Searchbar />
        <ExportAdd />
      </section>
      <DataTable />
    </div>
  );
}

export default App;
