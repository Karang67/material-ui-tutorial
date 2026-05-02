import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
  CardMedia,
} from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  card: {
    display: "flex",
    height: "100%", // ✅ important
  },
  cardDetails: {
    flex: 1,
  },
  cardMedia: {
    width: 160,
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
}));

const PostCard = ({ post }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} sm={6}>
      <Card className={classes.card}>
        <CardActionArea component="a" href="#">
          
          <div className={classes.cardDetails}>
            <CardContent>
              <Typography variant="h5">{post.title}</Typography>

              <Typography variant="subtitle1" color="textSecondary">
                {post.date}
              </Typography>

              <Typography variant="subtitle1" paragraph>
                {post.description}
              </Typography>

              <Typography variant="subtitle1" sx={{ color: "skyblue" }}>
                Continue reading...
              </Typography>
            </CardContent>
          </div>

          <CardMedia
            component="img"
            className={classes.cardMedia}
            image={post.image}
            alt={post.imageTitle}
          />
        </CardActionArea>
      </Card>
    </Grid>
  );
};

export default PostCard;