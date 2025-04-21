import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Pizza = () => {
    const { id } = useParams();
    const [pizza, setPizza] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {  
            setError("No se proporcionó ID de pizza");
            setLoading(false);
            return;
        }

        const fetchPizza = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/pizzas/${id}`);
                if (!response.ok) throw new Error("Pizza no encontrada");
                const data = await response.json();
                setPizza(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPizza();
    }, [id]);  

    if (loading) return <div>Cargando...</div>;
    if (error) return <div>Error: {error}</div>;
    if (!pizza) return <div>No se encontró la pizza</div>;

    return (
        <div>
            <h1>{pizza.name}</h1>
            <p>{pizza.description}</p>
            <p>Precio: ${pizza.price}</p>
        </div>
    );
};

export default Pizza;