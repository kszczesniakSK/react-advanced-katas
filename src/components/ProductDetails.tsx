import { useSafeSelectedProduct } from "../contexts/AppContext";

const ProductDetails = () => {
  const { selectedProduct } = useSafeSelectedProduct();

  return (
    <div
      style={{
        border: "1px solid #ccc",
        padding: "20px",
        borderRadius: "8px",
        margin: "10px 0",
      }}
    >
      <h2>Product Details</h2>
      <p>
        <strong>ID:</strong> {selectedProduct.id}
      </p>
      <p>
        <strong>Name:</strong> {selectedProduct.name}
      </p>
      <p>
        <strong>Price:</strong> ${selectedProduct.price.toFixed(2)}
      </p>
    </div>
  );
};

export default ProductDetails;
