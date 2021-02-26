import React from 'react';

import c3 from '../../assets/img/c3.png';

// Material-UI/Core
import { makeStyles } from '@material-ui/core/styles';

// CSS Styling
const styles = makeStyles({
  container: {
    width: '100%',
    position: 'relative'
  },
  paper: {
    padding: '10px'
  },
  slide: {},
  slideContent: {
    position: 'relative',
    height: '100% !important'
  },
  slideImg: {
    position: 'absolute',
    display: 'block',
    top: '0px',
    left: '0px',
    backgroundPosition: 'center'
  }
});

const CarouselView = props => {
  const { data } = props;
  const classes = styles();
  return (
    <div className={classes.container}>
      <img className={classes.slideImg} src={c3} alt='slide' />
      {/*  <Slider autoplay={5000}>
        {data.map((article, index) => (
          <Paper className={classes.slideContent} key={index}>
            <div>
              <h2>{article.name}</h2>
              <div>{article.description}</div>
            </div>
            <img className={classes.slideImg} src={c3} alt='slide' />
          </Paper>
        ))}
      </Slider> */}
    </div>
  );
};

export default CarouselView;
