import React, { FC, useState } from 'react'
import { TextField, InputAdornment, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import SearchIcon from "@mui/icons-material/Search";
import { findObjectsByKeyValues } from 'helpers';

type DataItemType = {
  label: string;
  id: string;
  [key: string]: any;
};

type SearchFieldProps = {
  data: DataItemType[];
  keyToSearch: keyof DataItemType;
}

/**
 * @todo move 'searchValues' to SearchField initializtion when it's ready to be reused
 */
// const searchValues = [
//   { label: 'Mike Parkhomenko', id: 'searchValues_1' },
//   { label: 'Ly Nguen', id: 'searchValues_2' },
//   { label: 'Alina Schebetun', id: 'searchValues_3' },
// ]

const SearchField: FC<SearchFieldProps> = ({ data, keyToSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredData = findObjectsByKeyValues(searchQuery, data, keyToSearch);

  return (
    <>
      <form>
        <TextField
          id="search-bar"
          className="text"
          onChange={(e) => {
            setSearchQuery(e.target.value);
          }}
          variant="outlined"
          placeholder="Search..."
          size="small"
          fullWidth
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
      </form>
      {searchQuery && (
        <List disablePadding>
          {filteredData.map(({ label, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </>
  );
}

export default SearchField;
