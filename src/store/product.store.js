import { create } from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  // Create a new product
  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price || !newProduct.image) {
      return { success: false, message: "Please provide all fields" };
    }

    try {
      const res = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (res.ok && data?.data) {
        set((state) => ({ products: [...state.products, data.data] }));
        return { success: true, message: "Created a new product" };
      } else {
        return { success: false, message: data?.error || "Something went wrong" };
      }
    } catch (error) {
      return { success: false, message: "Network error" };
    }
  },

  // Delete an existing product by ID
  deleteProduct: async (id) => {
    try {
      const res = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (res.ok) {
        set((state) => ({
          products: state.products.filter((product) => product._id !== id),
        }));
        return { success: true, message: "Deleted product successfully" };
      } else {
        return { success: false, message: data?.error || "Error deleting product" };
      }
    } catch (error) {
      return { success: false, message: "Network error" };
    }
  },

  // Update an existing product by ID
  updateProduct: async (_id, updatedProduct) => {
    try {
      const res = await fetch(`/api/products/${_id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      const text = await res.text();
      const data = text ? JSON.parse(text) : null;

      if (res.ok && data?.data) {
        set((state) => ({
          products: state.products.map((product) =>
            product._id === _id ? data.data : product
          ),
        }));
        return { success: true, message: "Updated product successfully" };
      } else {
        return { success: false, message: data?.error || "Error updating product" };
      }
    } catch (error) {
      return { success: false, message: "Network error" };
    }
  },
}));
