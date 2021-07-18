import {
  Card,
  CardContent,
  Grid,
  makeStyles,
  Typography,
} from '@material-ui/core';
import Head from 'next/head';
import Image from 'next/image';
import React from 'react';

import Happy from '@public/img/happy.jpg';

const styles = makeStyles({
  card: {
    maxWidth: 600,
    minWidth: 600,
    marginTop: 25,
  },
  media: {
    height: 300,
  },
});

export const Home = (): JSX.Element => {
  const classes = styles();

  return (
    <>
      <Head>
        <title>Index</title>
      </Head>
      <Grid container direction="row" justify="center" alignItems="center">
        <Card className={classes.card}>
          <Image src={Happy} alt="Friends" priority />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              My dev friends
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              Index
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default Home;
