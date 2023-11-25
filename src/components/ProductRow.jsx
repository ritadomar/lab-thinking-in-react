function ProductRow(props) {
  const { product } = props;
  return (
    <tr className="product">
      {product.inStock ? (
        <td>{product.name}</td>
      ) : (
        <td className="red">{product.name}</td>
      )}
      <td>{product.price}</td>
    </tr>
  );
}

export default ProductRow;
