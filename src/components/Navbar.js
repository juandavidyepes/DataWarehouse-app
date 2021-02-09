import React from 'react';
import { Nav } from 'react-bootstrap';

function Navbar() {
  return (
    <div>
      <Nav
        className='navBar'
        activeKey='/home'
        onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
      >
        <img
          src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/All_rights_reserved_white_logo.svg/1200px-All_rights_reserved_white_logo.svg.png'
          alt=''
        />
        <Nav.Item>
          <Nav.Link href='/home'>Contactos</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-1'>Compañías</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Usuarios</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey='link-2'>Región / Ciudad</Nav.Link>
        </Nav.Item>
      </Nav>
    </div>
  );
}

export default Navbar;
