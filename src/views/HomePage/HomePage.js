import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';

import { getTrendingMovies } from '../../services/movies-Api';

import styles from './HomePage.module.css';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
}));

export default function HomePage(props) {
  const classes = useStyles();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getTrendingMovies().then(responseMovies =>
      setMovies(responseMovies.results),
    );
  }, []);
  console.log(movies);
  // static defaultProps = {
  //   image:
  //     'https://lh3.googleusercontent.com/proxy/gCazWuMuIGY_An8jiafKtH1X23xeiRrTrVlJsWoUuKOxuFNkWsgeAI1KuAQSrTGE67pbvmL87lvEFM8ZOQQa_o9TmMl34Nm_VY_mCfi9Y9RDZfsnKY0PEeM',
  // };
  // state = {
  //   movies: [],
  // };

  // async componentDidMount() {
  //   const { data } = await getTrendingMovies();

  //   this.setState(prevState => ({
  //     movies: data.results,
  //   }));
  // }

  // render() {
  //   const { movies } = this.state;
  //   const { image } = this.props;

  return (
    <div className={classes.root}>
      <h1>Популярно:</h1>

      {movies.length > 0 && (
        <GridList
          cellHeight="auto"
          className={classes.gridList}
          cols={5}
          spacing={30}
        >
          {movies.map(movie => {
            return (
              <GridListTile className={styles.item} key={movie.id}>
                <img
                  src={`https://image.tmdb.org/t/p/w300/${movie.poster_path}`}
                  alt={movie.title}
                />
                <Link
                  className={styles.link}
                  to={{
                    pathname: `movies/${movie.id}`,
                    state: {
                      from: props.location,
                    },
                  }}
                >
                  <GridListTileBar
                    title={movie.title ? movie.title : movie.name}
                  />
                </Link>
              </GridListTile>
            );
          })}
        </GridList>
      )}
    </div>
  );
}
{
  /* <Link
  className={styles.link}
  to={{
    pathname: `movies/${movie.id}`,
    state: {
      from: props.location,
    },
  }}

  // {`movies/${movie.id}`}
>
  <GridListTileBar
    title={movie.title ? movie.title : movie.name}
    subtitle={<span>by: {movie.author}</span>}
  />
</Link>; */
}
