import React from 'react';
import { Container, Typography, Box, Paper, Chip, Grid, Link } from '@mui/material';
import { motion } from 'framer-motion';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { personalInfo, experience, skills, projects } from '../data/resume';

const Resume = () => {

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
          {/* Personal Info Section */}
          <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'white' }}>
            <Typography variant="h4" sx={{ color: '#2d2d2d', fontWeight: 700, mb: 2 }}>
              {personalInfo.name}
            </Typography>
            <Typography variant="h5" sx={{ color: '#666', mb: 3 }}>
              {personalInfo.title}
            </Typography>
            
            <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2, mb: 3 }}>
              <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  📞 {personalInfo.contact.phone}
                </Typography>
                <Typography variant="body1">
                  📧 {personalInfo.contact.email}
                </Typography>
              </Box>
              <Box>
                <Typography variant="body1" sx={{ mb: 1 }}>
                  🔗 <Link href={`https://${personalInfo.contact.linkedin}`} target="_blank" sx={{ color: '#0066ff' }}>
                    {personalInfo.contact.linkedin}
                  </Link>
                </Typography>
                <Typography variant="body1">
                  📍 {personalInfo.contact.location}
                </Typography>
              </Box>
            </Box>

            <Typography variant="body1" sx={{ color: '#666', whiteSpace: 'pre-line' }}>
              {personalInfo.summary}
            </Typography>
          </Paper>

          {/* Skills Section */}
          <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'white' }}>
            <Typography variant="h5" sx={{ mb: 3, color: '#2d2d2d', fontWeight: 600 }}>
              Skills
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {skills.map((skill, index) => (
                <Chip
                  key={index}
                  label={skill}
                  sx={{
                    bgcolor: '#f8f8f8',
                    color: '#2d2d2d',
                    '&:hover': { bgcolor: '#2d2d2d', color: 'white' }
                  }}
                />
              ))}
            </Box>
          </Paper>

          {/* Experience Section */}
          <Paper elevation={0} sx={{ p: 4, mb: 4, bgcolor: 'white' }}>
            <Typography variant="h5" sx={{ mb: 4, color: '#2d2d2d', fontWeight: 600 }}>
              Experience
            </Typography>
            <Timeline>
              {experience.map((exp, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: '#2d2d2d' }} />
                    {index !== experience.length - 1 && <TimelineConnector sx={{ bgcolor: '#2d2d2d' }} />}
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

          {/* Projects Section */}
          <Paper elevation={0} sx={{ p: 4, bgcolor: 'white' }}>
            <Typography variant="h5" sx={{ mb: 4, color: '#2d2d2d', fontWeight: 600 }}>
              Projects
            </Typography>
            <Timeline>
              {projects.map((project, index) => (
                <TimelineItem key={index}>
                  <TimelineSeparator>
                    <TimelineDot sx={{ bgcolor: '#2d2d2d' }} />
                    {index !== projects.length - 1 && <TimelineConnector sx={{ bgcolor: '#2d2d2d' }} />}
                  </TimelineSeparator>
                  <TimelineContent>
                    <Box sx={{ mb: 3 }}>
                      <Typography variant="h6" sx={{ color: '#2d2d2d', fontWeight: 600 }}>
                        {project.title}
                      </Typography>
                      <Typography variant="body1" sx={{ mb: 2 }}>
                        {project.description}
                      </Typography>
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                        {project.technologies.map((tech, idx) => (
                          <Chip
                            key={idx}
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

export default Resume;
