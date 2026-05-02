import React from 'react'
import {Button, Card, CardContent, Typography, CardActions } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles((theme) => ({
    title: {
        fontSize: 40,
        fontFamily: "Montserrat",
    },
  cover: {
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  textContainer: {
    flexGrow: 1,
  },
}));

const FeaturedPost = () => {
  const classes = useStyles();

  return (
    <Card className={classes.cover}>
        <CardContent className={classes.textContainer}>
            <Typography className={classes.title} gutterBottom>
                Title of the featured post
            </Typography>
            <Typography variant="body2" color="text.secondary">
                lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
                mollitia, voluptate. Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.
            </Typography>
        </CardContent>

        <CardActions>
            <Button variant='text' className={classes.btn}>
                Read More...
            </Button>
        </CardActions>
    </Card>
  )
}

export default FeaturedPost