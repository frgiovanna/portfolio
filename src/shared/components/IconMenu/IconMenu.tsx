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

  React.useEffect(() => {
    setSelectedItem(defaultSelected);
  }, [defaultSelected]);

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
            background: theme.gradients.menuSurface,
            padding: '8px',
          },
          '& .MuiPaper-root': {
            boxShadow: '0 22px 60px rgba(16, 55, 94, 0.16)',
            borderRadius: '20px',
            overflow: 'hidden',
            '& .MuiMenuItem-root': {
              borderRadius: '14px',
              color: theme.colors.night,
              fontSize: '14px',
              '&:not(:last-child)': {
                marginBottom: '4px',
              },
              fontWeight: 700,
              '&:focus, &:hover': {
                backgroundColor: theme.colors.light,
              },
              '&.Mui-selected': {
                backgroundColor: theme.colors.sky,
                color: theme.colors.twilight,
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
