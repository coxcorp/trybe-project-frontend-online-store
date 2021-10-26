import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import React from 'react';

class ProductCard extends React.Component {
  handleChange = ({ target }) => {
    console.log(target);
  }

  render() {
    const { element } = this.props;
    return (
      <Link
        to={{ pathname: `/product-details/${element.id}`, state: { element } }}
        data-testid="product-detail-link"
      >
        <div className="card" data-testid="product">
          <h1>{ element.title }</h1>
          <img src={ element.thumbnail } alt={ element.title } />
          <h3>{`R$: ${element.price}`}</h3>
        </div>
      </Link>
    );
  }
}

ProductCard.propTypes = {
  element: PropTypes.shape({
    id: PropTypes.string,
    price: PropTypes.number,
    thumbnail: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

export default ProductCard;
