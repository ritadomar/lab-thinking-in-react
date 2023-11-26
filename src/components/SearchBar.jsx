function SearchBar(props) {
  const { update, value, showStock } = props;

  return (
    <section id="search">
      <h2>Search</h2>
      <form>
        <input
          type="text"
          onChange={update}
          placeholder="Search..."
          value={value}
        />
        <input type="checkbox" name="stock" id="stock" onChange={showStock} />
        <label htmlFor="stock">Only show products in stock</label>
      </form>
    </section>
  );
}

export default SearchBar;
