import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const About = () => {
  const skills = [
    'React', 'TypeScript', 'Node.js', '.NET', 'MongoDB', 'SQL','PHP','LARAVEL','JavaScript','YII','TypeScript'
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
            ABOUT ME
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 6 }}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Paper 
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'white',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    bgcolor: '#2d2d2d'
                  }
                }}
              >
                <Typography variant="h5" sx={{ mb: 3, color: '#2d2d2d', fontWeight: 600 }}>
                  Hi, I'm Shubham
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.8 }}>
                  I'm a passionate software engineer with expertise in full-stack development. 
                  With a strong foundation in both frontend and backend technologies, I create 
                  efficient and scalable solutions that solve real-world problems.
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', mb: 2, lineHeight: 1.8 }}>
                  My journey in software development has equipped me with a diverse skill set 
                  and the ability to adapt to new technologies quickly. I believe in writing 
                  clean, maintainable code and following best practices in software development.
                </Typography>
                <Typography variant="body1" sx={{ color: '#666', lineHeight: 1.8 }}>
                  When I'm not coding, you can find me exploring new technologies, contributing 
                  to open-source projects, or sharing my knowledge with the developer community.
                </Typography>
              </Paper>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <Paper 
                elevation={0}
                sx={{
                  p: 4,
                  height: '100%',
                  bgcolor: 'white',
                  display: 'flex',
                  flexDirection: 'column'
                }}
              >
                <Typography variant="h5" sx={{ mb: 4, color: '#2d2d2d', fontWeight: 600 }}>
                  Core Technologies
                </Typography>
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)',
                  gap: 2
                }}>
                  {skills.map((skill, index) => (
                    <Paper
                      key={index}
                      elevation={0}
                      sx={{
                        p: 2,
                        textAlign: 'center',
                        bgcolor: '#f8f8f8',
                        transition: 'transform 0.2s',
                        '&:hover': {
                          transform: 'translateY(-4px)',
                          bgcolor: '#2d2d2d',
                          '& .skill-text': {
                            color: 'white'
                          }
                        }
                      }}
                    >
                      <Typography 
                        className="skill-text"
                        sx={{ 
                          color: '#2d2d2d',
                          fontWeight: 500,
                          transition: 'color 0.2s'
                        }}
                      >
                        {skill}
                      </Typography>
                    </Paper>
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default About;
