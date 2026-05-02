import './App.css';
import { Container, Grid } from '@mui/material';
import Header from './Components/Header';
import FeaturedPost from './Components/FeaturedPost';
import { ThemeProvider, createTheme, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as StylesProvider } from '@mui/styles';
import { featuredPosts } from './data/Data';
import PostCard from './Components/PostCard';
import { makeStyles } from '@mui/styles';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import { sidebar } from './data/Data';
import Footer from './Components/Footer';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const AppContent = () => {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Header />
      <FeaturedPost />

      <Grid container spacing={4} sx={{ mt: 2 }}>
        {featuredPosts.map((post) => (
          <PostCard key={post.title} post={post} />
        ))}
      </Grid>

      <Grid container spacing={5} className={classes.mainGrid}>
        <Main title="From the firehose" />
        <Sidebar
          title={sidebar.title}
          description={sidebar.description}
          archives={sidebar.archives}
          social={sidebar.social}
        />
      </Grid>

      <Footer
        title="Footer"
        description="Something here to give the footer a purpose!"
      />
    </Container>
  );
};

function App() {
  const theme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    // 👇 ADD HERE (TOP LEVEL)
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <StylesProvider theme={theme}>
          <AppContent />
        </StylesProvider>
      </ThemeProvider>
    </StyledEngineProvider>
  );
}

export default App;