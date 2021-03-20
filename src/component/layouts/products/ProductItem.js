import React from 'react';
import { Link } from 'react-router-dom';
import numberWithCommas from '../../utils/numberWithCommas';
import styles from './styles';

// MAterial-UI/Core
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles(styles);

const ProductItem = props => {
  const { id, img, discount, name, price } = props.product;
  const classes = useStyles();
  return (
    <Link className={classes.link} to={`/item/${name}/${id}`}>
      <Card className={classes.card}>
        <CardContent className={classes.cardContent}>
          <Typography
            className={classes.discountText}
            variant='body2'
            paragraph
          >
            {discount}
          </Typography>
          <div className={classes.imageWrapper}>
            <img src={img} alt={name} />
          </div>
          <div className={classes.description}>
            <Typography
              className={classes.cardText}
              paragraph
              variant='body2'
              color='textSecondary'
            >
              {name}
            </Typography>
            <Typography
              className={`${classes.cardText} ${classes.price}`}
              paragraph
              variant='body2'
              color='textSecondary'
            >
              <span>&#8358;</span>
              {numberWithCommas(price)}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default ProductItem;
