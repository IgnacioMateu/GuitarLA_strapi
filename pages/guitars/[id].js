import { useState } from 'react'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Styles from '../../styles/Guitar.module.css'

const Product = ({ guitar, addCart }) => {

    const [amount, setAmount] = useState(1)

    const images = [
        '',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra1_yyd0du.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra2_nahmzs.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra3_mbr6qf.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra4_kiul29.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra5_fjz592.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra6_u05v8x.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra7_vvim9b.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra8_n9brkq.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra9_bhi0tq.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra10_bn7tim.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra11_hcfhb8.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra12_tziklq.jpg'
    ]

    guitar = guitar.data
    const { descripcion, nombre, precio } = guitar.attributes
    const { id } = guitar

    const handleSubmit = e => {
        e.preventDefault()

        if (amount < 1) {
            window.alert('Cantidad no valida')
            return
        }

        const guitarSelected = {
            id,
            imagen: images[`${id}`],
            nombre,
            precio,
            amount
        }

        addCart(guitarSelected)
    }

    return (
        <Layout
            page={`${nombre}`}
        >
            <div className={Styles.guitarra}>
                <Image layout='responsive' width={200} height={350} src={images[`${id}`]} alt={`Imagen Guitarra ${nombre}`} />
                <div className={Styles.contenido}>
                    <h1>{nombre}</h1>
                    <p className={Styles.descripcion}>{descripcion}</p>
                    <p className={Styles.precio}>{precio}</p>

                    <form className={Styles.formulario} onSubmit={handleSubmit}>
                        <label>Cantidad</label>
                        <select
                            value={amount}
                            onChange={e => setAmount(parseInt(e.target.value))}
                        >
                            <option value="0">-- Seleccione --</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                            <option value="6">6</option>
                            <option value="7">7</option>
                        </select>

                        <input
                            type='submit'
                            value='Agregar al carrito'
                        />

                    </form>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ query: { id } }) {

    const urlGuitar = `http://localhost:1337/api/guitarras/${id}`
    const response = await fetch(urlGuitar)
    const guitar = await response.json()

    return {
        props: {
            guitar
        }
    }
}

export default Product