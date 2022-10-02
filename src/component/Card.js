import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';

export default function CardUi(props) {
  return (
    <>
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={props.Img}
            alt="green iguana"
          />
          <CardContent>
            <Typography >
              {props.Title}
            </Typography>
            
          </CardContent>
        </CardActionArea>
        <CardActions>
          
        </CardActions>
      </Card>
  </>
  );
}
