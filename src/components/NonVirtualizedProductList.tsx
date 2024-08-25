const products = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (index + 1) * 10,
}));

const NonVirtualizedProductList = () => {
  return (
    <div style={{ maxHeight: '400px', overflowY: 'scroll' }}>
      {products.map((product) => (
        <div key={product.id} style={{ padding: '10px', borderBottom: '1px solid #ccc' }}>
          <h3>{product.name}</h3>
          <p>Price: ${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default NonVirtualizedProductList;