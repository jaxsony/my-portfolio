import React from 'react';
import { Container, Typography, Box, Paper } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { motion } from 'framer-motion';
import { experience } from '../data/resume';

const Experience = () => {
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
            EXPERIENCE
          </Typography>

          <Paper elevation={0} sx={{ p: 4, bgcolor: 'white' }}>
            <Timeline>
              {experience.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: '#2d2d2d' }} />
                    {index !== experience.length - 1 && (
                      <TimelineConnector sx={{ bgcolor: '#2d2d2d' }} />
                    )}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: '#2d2d2d', fontWeight: 600 }}>
                        {exp.position}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: '#666' }}>
                        {exp.company}
                      </Typography>
                      <Typography variant="body2" sx={{ color: '#666', mb: 2 }}>
                        {exp.period} • {exp.location}
                      </Typography>
                      <Box component="ul" sx={{ m: 0, pl: 2 }}>
                        {exp.responsibilities.map((resp, idx) => (
                          <Typography key={idx} component="li" variant="body1" sx={{ mb: 1 }}>
                            {resp}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </TimelineContent>
                </TimelineItem>
              ))}
            </Timeline>
          </Paper>
        </motion.div>
      </Box>
    </Container>
  );
};

export default Experience;
