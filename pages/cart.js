import { useState, useEffect } from 'react'
import Layout from "../components/Layout"
import Image from 'next/image'
import Styles from '../styles/Cart.module.css'

const Cart = ({ cart, imagesA, updateAmount, deleteProduct }) => {

    const [total, setTotal] = useState(0)

    useEffect(() => {
        const totalCalculation = cart.reduce((acc, el) => acc + (el.amount * el.precio), 0)
        setTotal(totalCalculation)
    }, [cart])
    
    return (
        <Layout page={'Carrito de compras'}>
            <h1 className="heading">Carrito</h1>
            <main className={`${Styles.contenido} contenedor`}>
                <div className={Styles.carrito}>
                    <h2>Articulos</h2>
                    {cart.length === 0 ? 'Carrito vacio' : (
                        cart.map(x => (
                            <div
                                key={x.id}
                                className={Styles.producto}
                            >
                                <div>
                                    <Image layout="responsive" width={250} height={480} src={imagesA[`${x.id}`]} alt={x.nombre} />
                                </div>
                                <div>
                                    <p className={Styles.nombre}>{x.nombre}</p>
                                    <div className={Styles.cantidad}>
                                        <p>Cantidad: </p>
                                        <select
                                            value={x.amount}
                                            className={Styles.select}
                                            onChange={(e) => updateAmount({
                                                amount: e.target.value,
                                                id: x.id
                                            })}
                                        >
                                            <option value='1'>1</option>
                                            <option value='2'>2</option>
                                            <option value='3'>3</option>
                                            <option value='4'>4</option>
                                            <option value='5'>5</option>
                                            <option value='6'>6</option>
                                            <option value='7'>7</option>
                                        </select>
                                    </div>
                                    <p className={Styles.precio}>${x.precio}</p>
                                    <p className={Styles.subtomtal}>
                                        Subtotal: $<span>{x.precio * x.amount}</span></p>
                                </div>

                                <button
                                    type="button"
                                    className={Styles.eliminar}
                                    onClick={() => deleteProduct(x.id)}
                                >
                                    x
                                </button>

                            </div>
                        ))
                    )}
                </div>
                <div className={Styles.resumen}>
                    <h3>Resumen del pedido: </h3>

                    {total > 0 ? (
                        <>
                            <p>Total a pagar: {total} </p>
                        </>
                    ) : <p>No hay productos en el carrito</p>}
                </div>
            </main>
        </Layout>
    )
}

export default Cart