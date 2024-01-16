/* eslint-disable no-use-before-define */
import React from 'react';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import top100Films from './data';  //hard coded data for testing
import './styles/styles.css'

// Styles for the Autocomplete component
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: 500,
      '& > * + *': {
        marginTop: theme.spacing(3),
      },
    },
  }),
);

// Main component
export default function LimitTags() {
  const classes = useStyles();

  // State to track selected options
  const [selectedOptions, setSelectedOptions] = React.useState([
    top100Films[13],
    top100Films[12],
    top100Films[11],
  ]);

  // Filter options to exclude those that are already selected
  const filteredOptions = top100Films.filter(
    (option) => !selectedOptions.find((selected) => selected.title === option.title)
  );

  return (
    <div className={`${classes.root} center-container`}>
      {/* Autocomplete component */}
      <Autocomplete
        multiple
        limitTags={2}
        id="multiple-limit-tags"
        options={filteredOptions}
        getOptionLabel={(option) => option.title}
        value={selectedOptions}
        onChange={(event, newValue) => setSelectedOptions(newValue)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="Best Movies"
            placeholder="Favorites"
            className="autocomplete-input"
          />
        )}
        className="autocomplete-container"
        PaperComponent={({ children }) => (
          <Paper className="autocomplete-dropdown">{children}</Paper>
        )}
        classes={{
          option: 'autocomplete-option',
        }}
      />
    </div>
  );
}

