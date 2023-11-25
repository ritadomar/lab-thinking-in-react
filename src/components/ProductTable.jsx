import ProductRow from './ProductRow';

function ProductTable(props) {
  const { products } = props;
  return (
    <section id="products">
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <ProductRow key={product.id} product={product} />
          ))}
        </tbody>
      </table>
    </section>
  );
}

export default ProductTable;
