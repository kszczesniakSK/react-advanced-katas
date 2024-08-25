import { FixedSizeList as List } from "react-window";
//Implement virtualized list in the application. Show the difference with and without virtualization.

const items = Array.from({ length: 1000 }, (_, index) => ({
  id: index + 1,
  name: `Product ${index + 1}`,
  price: (index + 1) * 10,
}));

const Row = ({ index }: { index: number }) => {
  const item = items[index];
  return (
    <div
      style={{ padding: "10px", borderBottom: "1px solid #ccc" }}
      className="product-row"
    >
      <h3>{item.name}</h3>
      <p>Price: ${item.price}</p>
    </div>
  );
};

const VirtualizedProductList = () => {
  return (
    <List
      height={400}
      itemCount={items.length}
      itemSize={50}
      width={300}
    >
      {Row}
    </List>
  );
};

export default VirtualizedProductList;
