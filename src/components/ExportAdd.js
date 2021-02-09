import React from 'react';
import PublishIcon from '@material-ui/icons/Publish';
import { Dropdown } from 'react-bootstrap';
import { IconButton, Button } from '@material-ui/core';

function UploadBtn() {
  return (
    <IconButton className='uploadIcon' color='primary' aria-label='publish'>
      <PublishIcon fontSize='large' />
    </IconButton>
  );
}

function Export() {
  return (
    <Dropdown className='exportSelect'>
      <Dropdown.Toggle id='dropdown-basic'>Exportar contactos</Dropdown.Toggle>

      <Dropdown.Menu className='selectItems'>
        <Dropdown.Item href='#/action-1'>Exportar seleccionados</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href='#/action-2'>Todos los filtrados</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

function AddBtn() {
  return (
    <Button className='addBtn' variant='contained'>
      Agregar contacto
    </Button>
  );
}

function ExportAdd() {
  return (
    <div className='exportAdd'>
      <UploadBtn />
      <Export />
      <AddBtn />
    </div>
  );
}

export default ExportAdd;
