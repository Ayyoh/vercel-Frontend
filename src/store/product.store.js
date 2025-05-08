import {create} from 'zustand';

export const useProductStore = create((set) => ({
    products: [],
    setProducts: (products) => set({ products }),
    createProduct: async (newProduct) => {
        if (!newProduct.name || !newProduct.price || !newProduct.image) {
            return { success: false, message: "Please provide all fields" }
        }

        const res = await fetch("/api/products", {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(newProduct)
        });
        const data = await res.json();
        set((state) => ({ products:[...state.products, data.data] }))
        return { success: true, message: "Created a new product" }
    },

    deleteProduct: async (_id) => {
  const response = await fetch(`/api/products/${product._id}`, { method: "DELETE" });
  const text = await response.text(); // Get the response as text
  if (text.length) { // Check if there is any text content
    await JSON.parse(text); // If so, parse it as JSON
  }
  i(f => ({ products: f.products.filter(d => d._id !== _id) }));
},
    
    updateProduct: async (_id, updatedProduct) => {
        const res = await fetch(`/api/products/${_id}`, {
            method:"PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedProduct)
        })

        const data = await res.json();
        set((state) => ({
            products: state.products.map((product) => product._id === _id ? data.data : product)
        }))
    }
    }
));
