import * as React from 'react';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IconButton } from '@mui/material';
import { theme } from '../../../../shared/theme';

interface SectionsMenuProps {
  sections: { label: string; id: string }[];
}

export function SectionsMenu({ sections }: SectionsMenuProps) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  function handleClose() {
    setAnchorEl(null);
  }

  function handleAnchor(id: string) {
    window.open(`#${id}`, '_self');
    handleClose();
  }

  return (
    <>
      <IconButton aria-label="delete" onClick={handleClick} sx={{ display: 'flex' }}>
        <MenuRoundedIcon sx={{ fontSize: '42px' }} color="secondary" />
      </IconButton>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
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
              '&:hover': {
                backgroundColor: theme.colors.fog,
              },
              '&:active': {
                backgroundColor: theme.colors.light,
              },
            },
          },
        }}
      >
        {sections.map(({ label, id }) => (
          <MenuItem key={id} onClick={() => handleAnchor(id)}>
            {label}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
