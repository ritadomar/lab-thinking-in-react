function SearchBar(props) {
  const { filter } = props;
  return (
    <section id="search">
      <h2>Search</h2>
      <form>
        <input type="text" onChange={filter} id="search-bar" />
        <input type="checkbox" name="stock" id="stock" />
        <label htmlFor="stock">Only show products in stock</label>
      </form>
    </section>
  );
}

export default SearchBar;
