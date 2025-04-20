import React from 'react';
import { Container, Typography, Box, Paper, Link } from '@mui/material';
import { Email, Phone, LinkedIn, LocationOn } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { personalInfo } from '../data/resume';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Phone sx={{ fontSize: 40 }} />,
      title: 'Call',
      text: personalInfo.contact.phone,
      link: `tel:${personalInfo.contact.phone.replace(/[^0-9+]/g, '')}`
    },
    {
      icon: <Email sx={{ fontSize: 40 }} />,
      title: 'Write',
      text: personalInfo.contact.email,
      link: `mailto:${personalInfo.contact.email}`
    },
    {
      icon: <LocationOn sx={{ fontSize: 40 }} />,
      title: 'Visit',
      text: personalInfo.contact.location,
      link: undefined
    },
    {
      icon: <LinkedIn sx={{ fontSize: 40 }} />,
      title: 'Follow',
      text: 'LinkedIn',
      link: `https://${personalInfo.contact.linkedin}`
    }
  ];

  return (
    <Container maxWidth={false} sx={{ 
      minHeight: '100vh',
      pt: { xs: 10, md: 12 },
      pb: 4,
      background: '#f8f8f8'
    }}>
      <Box sx={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: { xs: 2, md: 4 }
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography 
            variant="h4" 
            sx={{ 
              mb: 6,
              color: '#2d2d2d',
              fontWeight: 700,
              textAlign: { xs: 'center', md: 'left' }
            }}
          >
            CONTACT
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(4, 1fr)' }, gap: 4 }}>
            {contactInfo.map((contact, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 4,
                      height: '100%',
                      bgcolor: 'white',
                      textAlign: 'center',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    <Box sx={{ color: '#2d2d2d', mb: 2 }}>
                      {contact.icon}
                    </Box>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 1,
                        color: '#2d2d2d',
                        fontWeight: 600
                      }}
                    >
                      {contact.title}
                    </Typography>
                    {contact.link ? (
                      <Link
                        href={contact.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        underline="hover"
                        sx={{
                          color: '#666',
                          '&:hover': {
                            color: '#2d2d2d'
                          }
                        }}
                      >
                        {contact.text}
                      </Link>
                    ) : (
                      <Typography sx={{ color: '#666' }}>
                        {contact.text}
                      </Typography>
                    )}
                  </Paper>
                </motion.div>

            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Contact;
