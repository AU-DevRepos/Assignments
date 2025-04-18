import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    // Obtener datos desde la API al iniciar
    useEffect(() => {
        const getApi = async () => {
            try {
                const res = await fetch("http://localhost:5000/api/pizzas/");
                if (!res.ok) throw new Error("Error al cargar las pizzas");
                const data = await res.json();
                const pizzasConCantidad = data.map((pizza) => ({
                    ...pizza,
                    count: 0,
                }));
                setCart(pizzasConCantidad);
            } catch (error) {
                console.error("Error al obtener pizzas:", error);
            }
        };

        getApi();
    }, []);

    const increaseQuantity = (id) => {
        const updatedCart = cart.map((item) =>
            item.id === id ? { ...item, count: item.count + 1 } : item
        );
        setCart(updatedCart);
    };

    const decreaseQuantity = (id) => {
        const updatedCart = cart.reduce((acc, item) => {
            if (item.id === id) {
                if (item.count > 0) {
                    acc.push({ ...item, count: item.count - 1 });
                } else if (item.count === 0) {
                    acc.push(item);
                }
            } else {
                acc.push(item);
            }
            return acc;
        }, []);
        setCart(updatedCart);
    };

    const getTotal = () =>
        cart.reduce((total, item) => total + item.price * item.count, 0);

    return (
        <CartContext.Provider
            value={{
                cart,
                setCart,
                increaseQuantity,
                decreaseQuantity,
                getTotal,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};
