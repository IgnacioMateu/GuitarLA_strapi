import Image from 'next/image'
import Link from 'next/link'
import Styles from '../styles/Guitar.module.css'

const Guitar = ({ guitar, images }) => {
    const { descripcion, nombre, precio } = guitar.attributes
    const { id } = guitar
    const image = images[`${id}`]

    return (
        <div className={Styles.guitarra}>
            <Image layout='responsive' width={230} height={350} src={image} alt={`Imagen Guitarra ${nombre}`} />
            <div className={Styles.contenido}>
                <h3>{nombre}</h3>
                <p className={Styles.descripcion}>{descripcion}</p>
                <p className={Styles.precio}>${precio}</p>
                <Link href={`/guitars/${id}`} >
                    <a className={Styles.enlace}>
                        Ver Producto
                    </a>
                </Link>
            </div>
        </div>
    )
}

export default Guitar