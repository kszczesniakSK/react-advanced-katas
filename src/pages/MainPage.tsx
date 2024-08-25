import React, { Suspense, useState } from "react";
import ComponentWithChildren from "../components/ComponentWithChildren";
import ComponentWithCustomMemo from "../components/ComponentWithCustomMemo";
import ComponentWithoutChildren from "../components/ComponentWithoutChildren";
import ProductDetails from "../components/ProductDetails";
import { useSelectedProduct } from "../contexts/AppContext";
import ErrorBoundary from "../components/ErrorBoundary";
import MouseTracker from "../components/MouseTracker";
import Modal from "../components/Modal";
import ProfileCard from "../components/ProfileCard";
import ProductCard from "../components/ProductCard";
import PokemonList from "../components/PokemonList";
import DelayedResponseExample from "../components/DelayedResponseExample";

const VirtualizedProductList = React.lazy(
  () => import("../components/VirtualizedProductList")
);
const NonVirtualizedProductList = React.lazy(
  () => import("../components/NonVirtualizedProductList")
);

function MainPage() {
  const { setSelectedProduct, selectedProduct } = useSelectedProduct();
  const handleSetSelectedProduct = () => {
    setSelectedProduct({ id: 1, price: 50, name: "Washing machine" });
  };
  const [displayLists, setDisplayLists] = useState(false);
  const [titleObject, setTitleObject] = useState({ value: "Title" });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [renderDelayedResponseComponent, setRenderDelayedResponseComponent] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <div>{process.env.NODE_ENV}</div>
      <ComponentWithChildren
        title={{ value: "Hello from Component with Children" }}
      >
        <p>This is a child component.</p>
      </ComponentWithChildren>
      <ComponentWithoutChildren
        title={{ value: "This component has no children" }}
      />
      <button onClick={() => setTitleObject({ value: "Title" })}>
        Set title
      </button>
      <ComponentWithCustomMemo title={titleObject} />
      <ComponentWithoutChildren title={titleObject} />
      <button onClick={handleSetSelectedProduct}>set selected product</button>
      {/* //Add error boundary to your app. And demonstrate how it handles error from the child component. */}
      <ErrorBoundary>
        <ProductDetails />
      </ErrorBoundary>
      {selectedProduct && <ProductDetails />}
      <button
        onClick={() => {
          setDisplayLists(true);
        }}
      >
        Show lists
      </button>
      {displayLists && (
        <Suspense fallback={<p>Loading...</p>}>
          (
          <>
            <VirtualizedProductList />
            <NonVirtualizedProductList />
          </>
          )
        </Suspense>
      )}
      {/* Share functionality with render prop */}
      <MouseTracker
        render={(mouse) => (
          <div>
            <h2>Mouse Position</h2>
            <p>
              X: {mouse.x}, Y: {mouse.y}
            </p>
          </div>
        )}
      />

      <h1>Specialized Components Example</h1>

      <ProfileCard
        name="John Doe"
        bio="A passionate software developer."
        age={30}
      />
      <ProfileCard
        name="Jane Smith"
        bio="An experienced product manager."
        age={35}
      />

      <ProductCard
        productName="MacBook Pro"
        description="A high-end laptop for professionals."
        price={1999.99}
      />
      <ProductCard
        productName="iPhone 13"
        description="The latest smartphone from Apple."
        price={999.99}
      />
      
      <button
        onClick={() => {
          setRenderDelayedResponseComponent((prevValue) => !prevValue);
        }}
      >
        Toggle delayed response example component
      </button>
      {renderDelayedResponseComponent && <DelayedResponseExample />}
      <PokemonList />
      <button onClick={handleOpenModal}>Open modal</button>
      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <h2 style={{ color: "black" }}>This is a Modal</h2>
        <p style={{ color: "black" }}>
          Content inside the modal is passed as children.
        </p>
      </Modal>
    </div>
  );
}

export default MainPage;
