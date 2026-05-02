import { Typography, Grid, Divider } from '@mui/material'
import MarkDown from 'markdown-to-jsx';
import { posts } from '../data/Data';
import React from 'react'



const Main = ({ title }) => {
  return (
    <Grid item xs={12} md={8}>
        <Typography variant='h6' gutterBottom>
            {title}
        </Typography>
            <Divider />
            {
                posts.map(post => (
                    <MarkDown key={post.body}>{post.body}</MarkDown>
                ))
            }
    </Grid>
  )
}

export default Main