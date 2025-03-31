import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

export const CardPizza = () => {
  const [pizza, setPizza] = useState(null);

  useEffect(() => {
    const getApi = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/pizzas/p001");
        const data = await res.json();
        setPizza(data);
      } catch (error) {
        console.error("Error en la petición:", error);
      }
    };

    getApi();
  }, []);

  // fea la wea
  if (!pizza) {
    return null;
  }

  return (
    <>
      <div>Funciona perro ql</div>
      <Card key={pizza.id} style={{ width: "20rem", margin: "10px auto" }}>
        <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
        <Card.Body>
          <Card.Title>{pizza.name}</Card.Title>
          <Card.Text>{pizza.desc}</Card.Text>
          <Card.Text>
            <strong>Ingredientes:</strong> {pizza.ingredients?.join(", ")}
          </Card.Text>
          <Card.Text>
            <strong>Precio:</strong> ${pizza.price.toLocaleString()} CLP
          </Card.Text>
        </Card.Body>
      </Card>
    </>
  );
};

// export const CardPizza = () => {
//   const [Pizzas, setPizzas] = useState([]);

//   useEffect(() => {
//     const getApi = async () => {
//       const res = await fetch("http://localhost:5000/api/pizzas/")
//         .then((res) => res.json())
//         .then(setPizzas);
//       //   setImagen(res);
//     };
//     // console.log(res);
//     getApi();
//   }, []);

//   return (
//     <>
//       {/* {console.log(Pizzas)} */}
//       {Pizzas.map((pizza) => (
//         <Card key={pizza.id} style={{ width: "20rem", margin: "10px auto" }}>
//           <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
//           <Card.Body>
//             <Card.Title>{pizza.name}</Card.Title>
//             <Card.Text>{pizza.desc}</Card.Text>
//             <Card.Text>
//               <strong>Ingredientes:</strong> {pizza.ingredients.join(", ")}
//             </Card.Text>
//             <Card.Text>
//               <strong>Precio:</strong> ${pizza.price.toLocaleString()} CLP
//             </Card.Text>
//           </Card.Body>
//         </Card>
//       ))}
//     </>
//   );
// };
