import React from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { List, ListItem } from '@material-ui/core';
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';

const places = [
  'Sudamérica',
  'Argentina',
  'Buenos Aires',
  'Córdoba',
  'Colombia',
  'Bogotá',
  'Cúcuta',
  'Medellín',
  'Chile',
  'Atacama',
  'Santiago',
  'Valparaíso',
  'Uruguay',
  'Canelones',
  'Maldonado',
  'Montevideo',
  'Norteamérica',
  'México',
  'Ciudad de México',
  'Tijuana',
  'Estados Unidos',
  'Florida',
  'Texas',
];

const contacts = ['Paula', 'Daniel', 'Juliana'];

function Searchbar() {
  return (
    <div className='searchBar'>
      <div className='accordion'>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls='panel1a-content'
            id='panel1a-header'
          >
            <Typography></Typography>
          </AccordionSummary>
          <AccordionDetails className='accordionDrop'>
            <List component='nav' aria-label='secondary mailbox folder'>
              <ListItem className='listItem'>
                <Typography className='listText'>
                  Nombre del contacto
                </Typography>
                <Autocomplete
                  className='textAuto'
                  freeSolo
                  id='free-solo-2-demo'
                  style={{ width: 300 }}
                  options={places.map((place) => place)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Introduce el nombre del contacto'
                      margin='none'
                      size='small'
                      InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                  )}
                />
              </ListItem>
              <ListItem className='listItem'>
                <Typography className='listText'>Cargo</Typography>
                <Autocomplete
                  className='textAuto'
                  freeSolo
                  id='free-solo-2-demo'
                  style={{ width: 300 }}
                  options={contacts.map((option) => option)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Introduce el cargo del contacto'
                      margin='none'
                      size='small'
                      InputProps={{ ...params.InputProps, type: 'search' }}
                    />
                  )}
                />
              </ListItem>
              <ListItem className='listItem'>
                <Typography className='listText'>País/Región</Typography>
                <Autocomplete
                  className='optionsAuto'
                  id='combo-box-demo'
                  options={places}
                  getOptionLabel={(place) => place}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Todos'
                      variant='outlined'
                      size='small'
                    />
                  )}
                />
              </ListItem>
              <ListItem className='listItem'>
                <Typography className='listText'>Compañía</Typography>
                <Autocomplete
                  className='optionsAuto'
                  id='combo-box-demo'
                  options={contacts}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Todas'
                      variant='outlined'
                      size='small'
                    />
                  )}
                />
              </ListItem>
              <ListItem className='listItem'>
                <Typography className='listText'>Canal Favorito</Typography>
                <Autocomplete
                  className='optionsAuto'
                  id='combo-box-demo'
                  options={contacts}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Cualquiera'
                      variant='outlined'
                      size='small'
                    />
                  )}
                />
              </ListItem>
              <ListItem className='listItem'>
                <Typography className='listText'>Interés</Typography>
                <Autocomplete
                  className='optionsAuto'
                  id='combo-box-demo'
                  options={contacts}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      label='Cualquiera'
                      variant='outlined'
                      size='small'
                    />
                  )}
                />
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>
      </div>
      <IconButton className='searchIcon' color='primary' aria-label='publish'>
        <SearchIcon fontSize='large' />
      </IconButton>
    </div>
  );
}

export default Searchbar;
