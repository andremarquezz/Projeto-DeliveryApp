import { useState } from 'react';
import PropTypes from 'prop-types';
import api from '../services';

export default function Product(props) {
  const { product, totalPrice, totalPriceFunc } = props;
  const { id, name, urlImage, price } = product;
  const [quantity, setQuantity] = useState(0);

  const addItem = (priceProduct) => {
    setQuantity(quantity + 1);
    totalPriceFunc(totalPrice + Number(priceProduct));
  };

  const removeItem = (priceProduct) => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      totalPriceFunc(totalPrice - Number(priceProduct));
    }
  };

  const defineQuantity = async ({ target }, priceProduct) => {
    // remove the CURRENT price amount of THIS product
    const removeCurrentProductAmount = totalPrice - (quantity * priceProduct);
    if (removeCurrentProductAmount > 0) {
      totalPriceFunc(removeCurrentProductAmount);
    } else {
      totalPriceFunc(0);
    }
    setQuantity(Number(target.value));
    // totalPriceFunc(totalPrice + (Number(target.value) * Number(priceProduct)));
  };

  return (
    <div key={ id }>
      <p
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { price.replace('.', ',') }

      </p>
      <p data-testid={ `customer_products__element-card-title-${id}` }>{ name }</p>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ api.get(`${urlImage}`) }
        alt={ name }
      />
      <span>
        <button
          type="button"
          onClick={ () => removeItem(price) }
          data-testid={ `customer_products__button-card-rm-item-${id}` }
        >
          -
        </button>
        <input
          type="number"
          value={ quantity }
          min="0"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => defineQuantity(e, price) }
        />
        <button
          type="button"
          onClick={ () => addItem(price) }
          data-testid={ `customer_products__button-card-add-item-${id}` }
        >
          +
        </button>
      </span>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.object,
}.isRequired;
