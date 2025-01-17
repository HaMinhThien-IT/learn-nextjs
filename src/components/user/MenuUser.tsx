import { Box, Grid } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react';
import { FaLightbulb } from 'react-icons/fa';
import { styled, alpha } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu, { MenuProps } from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

type Props = {};

export default function MenuUser({}: Props) {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  console.log(router.pathname);

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
      sx={{
        background: 'rgb(255,255,255)',
      }}
      lg={12}
    >
      <Grid pt={1.5} pb={1.5} item lg={12}>
        <div>
          <Button
            id="demo-customized-button"
            aria-controls={open ? 'demo-customized-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            disableElevation
            onClick={handleClick}
          >
            <Image
              src={'/plus.png'}
              alt="Picture of the author"
              width={38}
              height={38}
              style={{
                width: '100%',
              }}
            />
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem sx={{ padding: '15px', border: 'none', outline: 'none' }} onClick={handleClose} disableRipple>
              <svg
                width={'14px'}
                style={{ marginRight: '15px' }}
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="pen"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="currentColor"
                  d="M362.7 19.32C387.7-5.678 428.3-5.678 453.3 19.32L492.7 58.75C517.7 83.74 517.7 124.3 492.7 149.3L444.3 197.7L314.3 67.72L362.7 19.32zM421.7 220.3L188.5 453.4C178.1 463.8 165.2 471.5 151.1 475.6L30.77 511C22.35 513.5 13.24 511.2 7.03 504.1C.8198 498.8-1.502 489.7 .976 481.2L36.37 360.9C40.53 346.8 48.16 333.9 58.57 323.5L291.7 90.34L421.7 220.3z"
                />
              </svg>
              <Box
                sx={{
                  fontSize: '14px',
                  color: '#292929',
                  lineHeight: '16px',
                  fontWeight: 400,
                  fontFamily: 'Montserrat',
                }}
              >
                Viết blog
              </Box>
            </MenuItem>
          </StyledMenu>
        </div>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.5}
        pb={1.5}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          borderRadius: '10px',
          cursor: 'pointer',
          background: `${router.pathname == '/' ? ' #f5f5f5' : ''}`,
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <Link href={'/'}>
          <a>
            <svg
              width={'18px'}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="house"
              className="svg-inline--fa fa-house "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 576 512"
            >
              <path
                fill="currentColor"
                d="M575.8 255.5C575.8 273.5 560.8 287.6 543.8 287.6H511.8L512.5 447.7C512.5 450.5 512.3 453.1 512 455.8V472C512 494.1 494.1 512 472 512H456C454.9 512 453.8 511.1 452.7 511.9C451.3 511.1 449.9 512 448.5 512H392C369.9 512 352 494.1 352 472V384C352 366.3 337.7 352 320 352H256C238.3 352 224 366.3 224 384V472C224 494.1 206.1 512 184 512H128.1C126.6 512 125.1 511.9 123.6 511.8C122.4 511.9 121.2 512 120 512H104C81.91 512 64 494.1 64 472V360C64 359.1 64.03 358.1 64.09 357.2V287.6H32.05C14.02 287.6 0 273.5 0 255.5C0 246.5 3.004 238.5 10.01 231.5L266.4 8.016C273.4 1.002 281.4 0 288.4 0C295.4 0 303.4 2.004 309.5 7.014L564.8 231.5C572.8 238.5 576.9 246.5 575.8 255.5L575.8 255.5z"
              />
            </svg>
          </a>
        </Link>

        <span
          style={{
            fontWeight: '600',
            fontSize: '12px',
            marginTop: '5px',
          }}
        >
          Home
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.5}
        pb={1.5}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <svg
          width={'18px'}
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="road"
          className="svg-inline--fa fa-road "
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 576 512"
        >
          <path
            fill="currentColor"
            d="M256 96C256 113.7 270.3 128 288 128C305.7 128 320 113.7 320 96V32H394.8C421.9 32 446 49.08 455.1 74.63L572.9 407.2C574.9 413 576 419.2 576 425.4C576 455.5 551.5 480 521.4 480H320V416C320 398.3 305.7 384 288 384C270.3 384 256 398.3 256 416V480H54.61C24.45 480 0 455.5 0 425.4C0 419.2 1.06 413 3.133 407.2L120.9 74.63C129.1 49.08 154.1 32 181.2 32H255.1L256 96zM320 224C320 206.3 305.7 192 288 192C270.3 192 256 206.3 256 224V288C256 305.7 270.3 320 288 320C305.7 320 320 305.7 320 288V224z"
          />
        </svg>

        <span
          style={{
            fontWeight: '600',
            fontSize: '12px',
            marginTop: '5px',
          }}
        >
          Lộ trình
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.5}
        pb={1.5}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          background: `${router.pathname.includes('/course') ? ' #f5f5f5' : ''}`,
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <Link href={'/course'}>
          <a>
            <FaLightbulb fontSize={'20px'} />
          </a>
        </Link>

        <span
          style={{
            fontWeight: '600',
            fontSize: '12px',
            marginTop: '5px',
          }}
        >
          Học
        </span>
      </Grid>
      <Grid
        mt={1}
        mb={1}
        pt={1.5}
        pb={1.5}
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        lg={12}
        sx={{
          cursor: 'pointer',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#f5f5f5',
            color: '#1a1a1a',
          },
        }}
      >
        <Link href={'/blog'}>
          <a>
            <svg
              width={'18px'}
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="newspaper"
              className="svg-inline--fa fa-newspaper "
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M480 32H128C110.3 32 96 46.33 96 64v336C96 408.8 88.84 416 80 416S64 408.8 64 400V96H32C14.33 96 0 110.3 0 128v288c0 35.35 28.65 64 64 64h384c35.35 0 64-28.65 64-64V64C512 46.33 497.7 32 480 32zM272 416h-96C167.2 416 160 408.8 160 400C160 391.2 167.2 384 176 384h96c8.836 0 16 7.162 16 16C288 408.8 280.8 416 272 416zM272 320h-96C167.2 320 160 312.8 160 304C160 295.2 167.2 288 176 288h96C280.8 288 288 295.2 288 304C288 312.8 280.8 320 272 320zM432 416h-96c-8.836 0-16-7.164-16-16c0-8.838 7.164-16 16-16h96c8.836 0 16 7.162 16 16C448 408.8 440.8 416 432 416zM432 320h-96C327.2 320 320 312.8 320 304C320 295.2 327.2 288 336 288h96C440.8 288 448 295.2 448 304C448 312.8 440.8 320 432 320zM448 208C448 216.8 440.8 224 432 224h-256C167.2 224 160 216.8 160 208v-96C160 103.2 167.2 96 176 96h256C440.8 96 448 103.2 448 112V208z"
              />
            </svg>
          </a>
        </Link>

        <span
          style={{
            fontWeight: '600',
            fontSize: '12px',
            marginTop: '5px',
          }}
        >
          Blog
        </span>
      </Grid>
    </Grid>
  );
}
const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(theme.palette.primary.main, theme.palette.action.selectedOpacity),
      },
    },
  },
}));
