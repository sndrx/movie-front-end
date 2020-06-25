import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Paper, Button, Card, Grow, CardContent, Typography } from '@material-ui/core';
import { moviesOperations, moviesSelectors } from "../../state/ducks/movies";

import styles from './movies.module.scss';

export function Movies(props) {
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(moviesOperations.fetchFiftyMovies());
    }, [dispatch]);

    const fiftyRandomMovies = useSelector(moviesSelectors.selectMovies);
    // const [displayLoader, handleDisplayLoader] = React.useState(false);

    return (
        <div className={styles.container}>
            <Grow in={true}>
                <div className={styles.movies}>
                    {
                        fiftyRandomMovies[0] && fiftyRandomMovies[0].map(movie => {
                            return (
                                <Card variant="outlined" className={styles.movieCard}>
                                    <CardContent className={styles.movieCardContent}>
                                        <Typography className={styles.movieGenre} color="textSecondary">
                                            {movie.listed_in}
                                        </Typography>
                                        <Typography variant="h6" component="h4" className={styles.movieTitle}>
                                            {movie.title}
                                        </Typography>
                                        <Typography className={styles.movieGenre} color="textSecondary">
                                            {movie.duration}
                                        </Typography>
                                        <Typography variant="body2" component="p">
                                            {movie.description}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            )
                        })
                    }
                </div>
            </Grow >
        </div>
    )
}