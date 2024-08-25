import { createContext, Dispatch, PropsWithChildren, SetStateAction, useContext, useState } from "react";
  // Type a context with default ‘undefined’ as default value
  
type Product = {
  id: number;
  name: string;
  price: number;
};

type SelectedProductContextType = {
  selectedProduct?: Product; // selectedProduct can be undefined
  setSelectedProduct: Dispatch<SetStateAction<Product | undefined>>;
};

export const SelectedProductContext = createContext<
  SelectedProductContextType | undefined
>(undefined);

export const SelectedProductProvider = ({
  children,
}: PropsWithChildren) => {

  const [selectedProduct, setSelectedProduct] = useState<Product | undefined>(
    undefined
  );

  return (
    <SelectedProductContext.Provider
      value={{ selectedProduct, setSelectedProduct }}
    >
      {children}
    </SelectedProductContext.Provider>
  );
};

export const useSelectedProduct = () => {
  const context = useContext(SelectedProductContext);
  if (!context) {
    throw new Error(
      "useSelectedProduct must be used within a SelectedProductProvider"
    );
  }
  return context;
};

export const useSafeSelectedProduct = () => {
  const context = useSelectedProduct();

  if (!context.selectedProduct) {
    throw new Error("selectedProduct is undefined");
  }

  return context as Required<SelectedProductContextType>;
};
