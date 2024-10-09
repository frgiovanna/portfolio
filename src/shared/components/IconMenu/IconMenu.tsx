import * as React from 'react';
import { SvgIconComponent } from '@mui/icons-material/';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';

import { theme } from '../../theme';

interface IconMenuProps {
  anchor?: 'left' | 'right';
  defaultSelected?: string;
  icon: SvgIconComponent;
  iconSize?: number;
  items: string[];
  onChange: (item: string) => void;
}

export function IconMenu({
  anchor = 'right',
  defaultSelected = '',
  icon,
  iconSize = 42,
  items,
  onChange,
}: IconMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const Icon = icon;
  const open = Boolean(anchorEl);

  const [selectedItem, setSelectedItem] = React.useState(defaultSelected);

  const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  function handleClick(item: string) {
    if (defaultSelected) {
      setSelectedItem(item);
    }

    onChange(item);
    handleClose();
  }

  return (
    <>
      <IconButton onClick={handleOpen} sx={{ display: 'flex' }}>
        <Icon sx={{ fontSize: iconSize }} color="secondary" />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: anchor,
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: anchor,
        }}
        sx={{
          '& .MuiList-root': {
            backgroundColor: theme.colors.cloud,
          },
          '& .MuiPaper-root': {
            boxShadow: '0px 1px 4px rgba(0, 0, 0, 0.1)',
            borderRadius: '20px',
            '& .MuiMenuItem-root': {
              color: 'secondary',
              '&:not(:last-child)': {
                borderBottom: `1px solid ${theme.colors.light}`,
              },
              fontWeight: 500,
              '&:focus': {
                backgroundColor: theme.colors.misty,
              },
              '&:hover': {
                backgroundColor: theme.colors.fog,
              },
            },
          },
        }}
      >
        {items.map((item) => (
          <MenuItem key={item} onClick={() => handleClick(item)} selected={item === selectedItem}>
            {item}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
