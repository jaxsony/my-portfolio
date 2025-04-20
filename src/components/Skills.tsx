import React from 'react';
import { Container, Typography, Box, Grid, Paper } from '@mui/material';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['React', 'Redux', 'TypeScript', 'JavaScript', 'HTML/CSS']
    },
    {
      title: 'Backend',
      skills: ['Node.js', '.NET', 'PHP', 'Laravel', 'Yii']
    },
    {
      title: 'Databases',
      skills: ['MongoDB', 'MySQL']
    },
    {
      title: 'Cloud & DevOps',
      skills: ['AWS', 'Agile Methodologies']
    },
    {
      title: 'Certifications',
      skills: ['Information Security', 'Python for Everybody']
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
            SKILLS & EXPERTISE
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
            {skillCategories.map((category, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Paper elevation={0} sx={{ 
                    p: 3,
                    height: '100%',
                    bgcolor: 'white',
                    transition: 'transform 0.2s',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}>
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mb: 2,
                        color: '#2d2d2d',
                        fontWeight: 600
                      }}
                    >
                      {category.title}
                    </Typography>
                    {category.skills.map((skill, skillIndex) => (
                      <Typography 
                        key={skillIndex} 
                        variant="body1" 
                        sx={{ 
                          mb: 1,
                          color: '#666'
                        }}
                      >
                        • {skill}
                      </Typography>
                    ))}
                  </Paper>
                </motion.div>

            ))}
          </Box>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Skills;
