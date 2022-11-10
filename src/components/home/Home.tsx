import { Card, CardContent, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import Image from 'next/image';

import Happy from '@public/img/happy.jpg';

export const Home = () => (
  <>
    <Head>
      <title>My dev friends</title>
    </Head>
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Card
        sx={{
          maxWidth: 600,
          minWidth: 600,
          marginTop: 25,
        }}
      >
        <Image src={Happy} alt="Friends" width={600} height={600} priority />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            My dev friends
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            A new adventure begins 🚀
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  </>
);
