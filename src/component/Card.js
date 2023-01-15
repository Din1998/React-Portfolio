import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardActions } from '@mui/material';
import '../styles/card.css'

export default function CardUi(props) {
  return (
    <>
    <a href={props.Link} target='blank' className='card-link'>
      <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
              image={props.Img}
              alt="green iguana"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {props.Title}
              </Typography>
              
            </CardContent>
          </CardActionArea>
          <CardActions>
            
          </CardActions>
        </Card>
    </a>
      
  </>
  );
}
