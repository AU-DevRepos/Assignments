import { useContext } from "react"
import MyContext from "../context/TestContext"

const Contador = () => {
    const { incrementar, disminuir, total } = useContext(MyContext)
    return (
        <>
            <div>Contador: {total}</div>
            <button onClick={incrementar}>Sumar</button>
            <button onClick={disminuir}>Sumar</button>
        </>
    )
}
export default Contador;