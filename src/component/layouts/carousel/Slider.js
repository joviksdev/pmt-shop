import React from 'react';
import styles from './styles';

import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import 'normalize.css/normalize.css';

import contents from '../../data/carousel.js';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';

const useStyles = makeStyles(styles);

const Carousel = () => {
  const classes = useStyles();
  return (
    <Slider autoplay={4000} className={classes.sliderWrapper}>
      {contents.map((content, key) => (
        <Box
        className={classes.slideContent}
          key={key}
          textAlign='center'
          width='100%'
          style={{
            background: `url('${content.img}') no-repeat center center`
          }}
        >
          <Box className={classes.inner}>
            <Typography className={classes.headerText} variant='h4'>
              {content.title}
            </Typography>
            <Typography variant='body1' paragraph>
              {content.description}
            </Typography>
            <Button className={classes.btn}>{content.btnText}</Button>
          </Box>
        </Box>
      ))}
    </Slider>
  );
};

export default Carousel;
