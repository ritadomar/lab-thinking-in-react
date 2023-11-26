import { useState } from 'react';
import productData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductPage() {
  const initialList = productData;
  const [products, setProducts] = useState(initialList);
  const [value, setValue] = useState('');
  const [inStock, setInStock] = useState(false);

  const updateValue = (e) => {
    const newValue = e.target.value;
    setValue(newValue);
    searchFilter(newValue);
  };

  const searchFilter = (value) => {
    value = value.toLowerCase();
    const filteredProducts = initialList.filter((product) =>
      product.name.toLowerCase().includes(value)
    );
    setProducts(filteredProducts);
  };

  const showStock = (e) => setInStock(!inStock);

  return (
    <main>
      <h1 id="page-name">IronStore</h1>
      <SearchBar
        products={products}
        update={updateValue}
        value={value}
        inStock={inStock}
        showStock={showStock}
      />
      <ProductTable products={products} inStock={inStock} />
    </main>
  );
}

export default ProductPage;
