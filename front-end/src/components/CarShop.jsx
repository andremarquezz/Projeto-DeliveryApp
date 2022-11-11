import { useSelector, useDispatch } from 'react-redux';
import { actionRemoveItem, selectProduct } from '../redux/userProducts';
import dataTestIds from '../utils/dataTestIds';
import iconClose from '../imgs/iconClose.svg';

export default function CarShop() {
  const dispatch = useDispatch();
  const products = useSelector(selectProduct);

  const removeItemInShopCar = (index) => {
    dispatch(actionRemoveItem(index));
  };

  const totalPrice = () => {
    let total = 0;
    products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total.toFixed(2).replace('.', ',');
  };

  return (
    <div>
      {/* <table>
        <thead>
          <tr>
            <td>Item</td>
            <td>Descrição</td>
            <td>Quantidade</td>
            <td>Valor unitário</td>
            <td>Subtotal</td>
            <td>Remover Item</td>
          </tr>
        </thead>
        <thead>
          {products.map((product, i) => (
            <tr key={ i }>
              <td data-testid={ `${dataTestIds[22]}${i}` }>{i + 1}</td>
              <td data-testid={ `${dataTestIds[22]}${i}` }>{i + 1}</td>
              <td data-testid={ `${dataTestIds[23]}${i}` }>{product.name}</td>
              <td data-testid={ `${dataTestIds[24]}${i}` }>{product.quantity}</td>
              <td data-testid={ `${dataTestIds[25]}${i}` }>
                {product.price.replace('.', ',')}
              </td>
              <td data-testid={ `${dataTestIds[26]}${i}` }>
                {String((product.quantity * product.price).toFixed(2)).replace(
                  '.',
                  ',',
                )}
              </td>
              <button
                data-testid={ `${dataTestIds[27]}${i}` }
                type="button"
                onClick={ () => removeItemInShopCar(i) }
              >
                Remover
              </button>
            </tr>
          ))}
        </thead>
      </table> */}
      {products.map((product, i) => (
        <span
          key={ i }
        >
          <div
            className="flex items-start ml-5"
          >
            <img
              className="w-48"
              src={ product.img }
              alt={ product.name }
            />
            <div className="pt-9">
              <p
                className="font-bold"
                data-testid={ `${dataTestIds[23]}${i}` }
              >
                {product.name}

              </p>
              <p
                data-testid={ `${dataTestIds[25]}${i}` }
                className="text-gray-600"
              >
                {`Valor unitário: R$ ${product.price.replace('.', ',')}`}
              </p>
              <p
                data-testid={ `${dataTestIds[24]}${i}` }
                className="text-gray-600"
              >
                {`Quantidade: ${product.quantity} un.`}
              </p>
              <p
                data-testid={ `${dataTestIds[26]}${i}` }
                className="font-bold"
              >
                {`
                R$ 
                ${String((product.quantity * product.price).toFixed(2)).replace('.', ',')}
                `}
              </p>
            </div>
            <button
              data-testid={ `${dataTestIds[27]}${i}` }
              type="button"
              onClick={ () => removeItemInShopCar(i) }
              className="self-start pt-7 ml-5"
            >
              <img src={ iconClose } alt="close icon" />
            </button>
          </div>
          <hr className=" ml-5 w-[430px] border-gray-600" />
        </span>
      ))}

      <h2 data-testid={ dataTestIds[28] }>
        {`Total: R$ ${totalPrice()}`}
      </h2>
    </div>
  );
}
