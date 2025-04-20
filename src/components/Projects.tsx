import React from 'react';
import { Container, Typography, Box, Grid, Paper, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { projects } from '../data/resume';

const Projects = () => {

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
            PROJECTS
          </Typography>

          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }, gap: 4 }}>
            {projects.map((project, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper 
                    elevation={0} 
                    sx={{ 
                      p: 3,
                      height: '100%',
                      bgcolor: 'white',
                      transition: 'transform 0.2s',
                      '&:hover': {
                        transform: 'translateY(-4px)'
                      }
                    }}
                  >
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 2,
                        color: '#2d2d2d',
                        fontWeight: 600
                      }}
                    >
                      {project.title}
                    </Typography>
                    <Typography 
                      variant="body1" 
                      sx={{ 
                        mb: 2,
                        color: '#666',
                        minHeight: '80px'
                      }}
                    >
                      {project.description}
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                      {project.technologies.map((tech, techIndex) => (
                        <Chip
                          key={techIndex}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: '#f8f8f8',
                            color: '#2d2d2d',
                            '&:hover': { bgcolor: '#2d2d2d', color: 'white' }
                          }}
                        />
                      ))}
                    </Box>
                  </Paper>
                </motion.div>

            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Projects;
