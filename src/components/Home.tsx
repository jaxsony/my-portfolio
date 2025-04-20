import React from 'react';
import { Container, Typography, Box, Button, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, LinkedIn, Instagram } from '@mui/icons-material';

const Home = () => {
  const socialLinks = [
    { icon: <Facebook />, url: 'https://facebook.com' },
    { icon: <Twitter />, url: 'https://twitter.com' },
    { icon: <LinkedIn />, url: 'https://linkedin.com/in/shubhamsoni-7b2635121' },
    { icon: <Instagram />, url: 'https://instagram.com' }
  ];

  return (
    <Container maxWidth={false} sx={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      background: '#f8f8f8',
      position: 'relative',
      overflow: 'hidden',
      pt: { xs: 8, md: 0 }
    }}>
      <Box sx={{
        width: '800px',
        height: '800px',
        bgcolor: '#e6e0d8',
        position: 'absolute',
        right: { xs: '-400px', md: '-200px' },
        top: '50%',
        transform: 'translateY(-50%)',
        borderRadius: '50%',
        zIndex: 0
      }}></Box>

      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: '300px 1fr' },
          gap: { xs: 4, md: 8 },
          alignItems: 'center'
        }}>
          {/* Left side - Name */}
          <Box>
            <Typography 
              variant="h1" 
              sx={{
                fontSize: { xs: '2.5rem', md: '3.5rem' },
                fontWeight: 700,
                color: '#2d2d2d',
                lineHeight: 1.2
              }}
            >
              Shubham
              <br />
              Soni
            </Typography>
          </Box>

          {/* Right side - Content */}
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: { xs: 'center', md: 'flex-start' },
            position: 'relative'
          }}>
            <Typography 
              variant="h4" 
              sx={{
                color: '#b3b3b3',
                mb: 4,
                letterSpacing: 3,
                fontSize: { xs: '1.2rem', md: '1.5rem' },
                fontWeight: 500,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              SOFTWARE ENGINEER
            </Typography>

            <Typography 
              variant="h5" 
              sx={{ 
                mb: 3,
                color: '#2d2d2d',
                fontWeight: 600,
                textAlign: { xs: 'center', md: 'left' }
              }}
            >
              Here's who I am & what I do
            </Typography>
            
            <Box sx={{ 
              display: 'flex', 
              gap: 2, 
              mb: 4,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              <Button 
                component={Link} 
                to="/resume"
                variant="contained" 
                size="large"
                sx={{
                  bgcolor: '#2d2d2d',
                  '&:hover': { bgcolor: '#1a1a1a' },
                  px: 4,
                  py: 1.5,
                  borderRadius: 0
                }}
              >
                RESUME
              </Button>
              <Button 
                component={Link} 
                to="/projects"
                variant="outlined" 
                size="large"
                sx={{
                  borderColor: '#2d2d2d',
                  color: '#2d2d2d',
                  '&:hover': { borderColor: '#1a1a1a', color: '#1a1a1a' },
                  px: 4,
                  py: 1.5,
                  borderRadius: 0
                }}
              >
                PROJECTS
              </Button>
            </Box>

            <Box sx={{ 
              display: 'flex', 
              gap: 2,
              justifyContent: { xs: 'center', md: 'flex-start' }
            }}>
              {socialLinks.map((social, index) => (
                <IconButton
                  key={index}
                  component="a"
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    color: '#666666',
                    '&:hover': { color: '#2d2d2d' }
                  }}
                >
                  {social.icon}
                </IconButton>
              ))}
            </Box>

            <Box
              component="img"
              src="/profile.png"
              alt="Profile"
              sx={{
                width: '300px',
                height: '300px',
                objectFit: 'cover',
                borderRadius: '50%',
                position: 'absolute',
                right: { xs: '50%', md: '-90px' },
                bottom: { xs: '-350px', md: '-100px' },
                transform: { xs: 'translateX(50%)', md: 'none' },
                boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
                display: { xs: 'none', md: 'block' }
              }}
            />
          </Box>
        </Box>
      </Container>
    </Container>
  );
};

export default Home;
