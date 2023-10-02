import { Box, Divider, Stack, Typography, styled } from '@mui/material';
import { Link } from 'react-router-dom';
import React from 'react';
import PlaceIcon from '@mui/icons-material/Place';

const StyledLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  color: '#B6B6B6',
  fontSize: '16px',
  lineHeight: '22px',
}));
const LinksBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  gap: '4.5px',
}));
const SocialMediaBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  padding: '25px 60px 0 50px',
}));
const SocialMediaImg = styled('img')(({ theme }) => ({
  width: '200px',
  cursor: 'pointer',
  paddingTop: '10px',
}));

const Footer = () => {
  return (
    <>
      <Box
        sx={{
          backgroundColor: ' #1B4B66',
          display: 'flex',
          justifyContent: 'space-between',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          spacing={6}
          sx={{ padding: '25px 0 60px 50px' }}
        >
          <LinksBox>
            <Typography sx={{ color: 'white', mb: '8px' }}>
              Shop by Category
            </Typography>
            <StyledLink to={'/categories/skincare'}>Skincare</StyledLink>
            <StyledLink to={'/categories/personalcare'}>
              Personal Care
            </StyledLink>
            <StyledLink to={'/categories/handbags'}>Handbags</StyledLink>
            <StyledLink to={'/categories/apparels'}>Apparels</StyledLink>
            <StyledLink to={'/categories/watches'}>Watches</StyledLink>
            <StyledLink to={'/categories/eyewear'}>Eye Wear</StyledLink>
            <StyledLink to={'/categories/jewellery'}>Jewellery</StyledLink>
          </LinksBox>
          <LinksBox>
            {' '}
            <Typography sx={{ color: 'white', mb: '8px' }}>
              Shop by Products
            </Typography>
            <StyledLink to={'/categories/featured'}>Featured</StyledLink>
            <StyledLink to={'/categories/trendy'}>Trendy</StyledLink>
            <StyledLink to={'/categories/brands'}>Brands</StyledLink>
          </LinksBox>
        </Stack>
        <Divider
          sx={{
            backgroundColor: '#639599',
            display: { xs: 'block', sm: 'none' },
            margin: '15px 0',
          }}
        />
        <SocialMediaBox>
          <Box
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
            }}
          >
            <SocialMediaImg
              src={require('../Assets/sociallogos.png')}
              alt="logo"
            />
          </Box>
          <Typography
            variant="p"
            component={'p'}
            sx={{
              display: 'flex',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
              color: 'white',
              fontSize: '14px',
              alignItems: 'center',
              lineHeight: '18px',
              mt: '20px',
            }}
          >
            {' '}
            <PlaceIcon sx={{ mr: '5px' }} />
            United States
          </Typography>
          <Typography
            variant="p"
            component={'p'}
            sx={{
              display: 'flex',
              color: '#B6B6B6',
              fontSize: '14px',
              lineHeight: '18px',
              justifyContent: { xs: 'flex-start', sm: 'flex-end' },
              whiteSpace: 'nowrap',
            }}
          >
            © 2021 | Cora Leviene All Rights Reserved
          </Typography>
        </SocialMediaBox>
      </Box>
    </>
  );
};

export default Footer;
