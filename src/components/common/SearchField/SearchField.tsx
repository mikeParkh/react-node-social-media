import React, { FC, useState } from 'react'
import { TextField, InputAdornment, List, ListItem, ListItemButton, ListItemText, Box } from '@mui/material';
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

const SearchField: FC<SearchFieldProps> = ({ data, keyToSearch }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const filteredData = findObjectsByKeyValues(searchQuery, data, keyToSearch);

  return (
    <Box>
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
          sx={{ bgcolor: '#fafafa' }}
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
        <List
          sx={{ width: '100%', maxWidth: 360, bgcolor: '#1976d2', position: 'absolute', boxShadow: '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)' }}
          disablePadding
          className="test"
        >
          {filteredData.map(({ label, id }) => (
            <ListItem key={id} disablePadding>
              <ListItemButton>
                <ListItemText primary={label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default SearchField;
