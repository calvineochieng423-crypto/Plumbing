import type { ReactNode } from "react";
import { createContext, useContext, useReducer } from "react";

function parsePrice(priceString: string): number {
  const cleanedPrice = priceString.replace(/[$,\s]/g, "");
  const parsed = parseFloat(cleanedPrice);
  return isNaN(parsed) ? 0 : parsed;
}

export type Product = {
  id: number;
  name: string;
  category: string;
  price: string;
  image: string;
};

type CartItem = Product & {
  quantity: number;
};

type CartState = {
  items: CartItem[];
  total: number;
  itemCount: number;
};

type CartAction =
  | { type: "ADD_TO_CART"; product: Product }
  | { type: "REMOVE_FROM_CART"; id: number }
  | { type: "UPDATE_QUANTITY"; id: number; quantity: number }
  | { type: "CLEAR_CART" };

const initialState: CartState = {
  items: [],
  total: 0,
  itemCount: 0,
};

function cartReducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "ADD_TO_CART": {
      const existingItem = state.items.find(
        (item) => item.id === action.product.id
      );

      if (existingItem) {
        const updatedItems = state.items.map((item) =>
          item.id === action.product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return {
          items: updatedItems,
          total: updatedItems.reduce(
            (sum, item) => sum + parsePrice(item.price) * item.quantity,
            0
          ),
          itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      } else {
        const newItems = [...state.items, { ...action.product, quantity: 1 }];
        return {
          items: newItems,
          total: newItems.reduce(
            (sum, item) => sum + parsePrice(item.price) * item.quantity,
            0
          ),
          itemCount: newItems.reduce((sum, item) => sum + item.quantity, 0),
        };
      }
    }

    case "REMOVE_FROM_CART": {
      const filteredItems = state.items.filter((item) => item.id !== action.id);
      return {
        items: filteredItems,
        total: filteredItems.reduce(
          (sum, item) => sum + parsePrice(item.price) * item.quantity,
          0
        ),
        itemCount: filteredItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case "UPDATE_QUANTITY": {
      if (action.quantity <= 0) {
        return cartReducer(state, { type: "REMOVE_FROM_CART", id: action.id });
      }

      const updatedItems = state.items.map((item) =>
        item.id === action.id ? { ...item, quantity: action.quantity } : item
      );
      return {
        items: updatedItems,
        total: updatedItems.reduce(
          (sum, item) => sum + parsePrice(item.price) * item.quantity,
          0
        ),
        itemCount: updatedItems.reduce((sum, item) => sum + item.quantity, 0),
      };
    }

    case "CLEAR_CART":
      return initialState;

    default:
      return state;
  }
}

interface CartContextType {
  state: CartState;
  addToCart: (product: Product) => void;
  removeFromCart: (id: number) => void;
  updateQuantity: (id: number, quantity: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = (product: Product) => {
    dispatch({ type: "ADD_TO_CART", product });
  };

  const removeFromCart = (id: number) => {
    dispatch({ type: "REMOVE_FROM_CART", id });
  };

  const updateQuantity = (id: number, quantity: number) => {
    dispatch({ type: "UPDATE_QUANTITY", id, quantity });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return (
    <CartContext.Provider
      value={{
        state,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
}
