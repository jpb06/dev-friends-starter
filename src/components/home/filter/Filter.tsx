import { ListItemText } from '@mui/material';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormGroup from '@mui/material/FormGroup';
import FormLabel from '@mui/material/FormLabel';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

type Squad = { id: number; squad: number };
type Dev = { id: number; firstName: string; squad: number };

const Filter = () => {
  const [selectedSquads, setSelectedSquads] = useState<number[]>([]);

  const getSquads = () =>
    axios
      .get('https://workshop-react-back.herokuapp.com/squads')
      .then((res) => res.data.result);
  const getDevsBySquads = () => {
    if (selectedSquads.length) {
      return axios
        .post('https://workshop-react-back.herokuapp.com/devs/by-squads', {
          idSquads: selectedSquads,
        })
        .then((res) => res.data.result);
    }

    return axios
      .get('https://workshop-react-back.herokuapp.com/devs')
      .then((res) => res.data.result);
  };

  const { data } = useQuery<Squad[]>(['squads'], getSquads);
  const { data: devsData, refetch } = useQuery<Dev[]>(
    ['devs'],
    getDevsBySquads
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedSquads((state) => {
      const value = parseInt(event.target.name);
      return !state.includes(value)
        ? [...state, value]
        : state.filter((s) => s !== value);
    });
  };

  useEffect(() => {
    refetch();
  }, [selectedSquads]);

  return (
    <Box sx={{ display: 'flex' }}>
      <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
        <FormLabel component="legend">Squads</FormLabel>
        <FormGroup>
          {data &&
            data.length > 0 &&
            data.map((s, index) => (
              <FormControlLabel
                key={index}
                control={
                  <Checkbox
                    checked={selectedSquads.includes(s.id)}
                    onChange={handleChange}
                    name={s.id.toString()}
                  />
                }
                label={`Squad ${s.squad}`}
              />
            ))}
        </FormGroup>
      </FormControl>
      {devsData &&
        devsData.map((dev, index) => (
          <List key={index}>
            <ListItem>
              <ListItemText primary={dev.firstName} />
            </ListItem>
          </List>
        ))}
    </Box>
  );
};

export default Filter;
