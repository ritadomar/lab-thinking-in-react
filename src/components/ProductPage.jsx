import { useState } from 'react';
import productData from '../data.json';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function ProductPage() {
  console.log(document.getElementsByName('stock').value);
  const [products, setProducts] = useState(productData);

  const searchFilter = () => {
    const searchBar = document.getElementsById('search-bar');
    if (searchBar.value.length > 0) {
      const filteredProducts = [...products].filter((product) => {
        if (product.name.includes(searchBar.value)) return true;
        else return false;
      });
      setProducts(filteredProducts);
    }
  };
  return (
    <main>
      <h1>IronStore</h1>
      <SearchBar products={products} filter={searchFilter} />
      <ProductTable products={products} />
    </main>
  );
}

export default ProductPage;
