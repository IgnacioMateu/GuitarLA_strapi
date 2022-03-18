import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'
import styles from '../styles/Header.module.css'

const Header = ({ guitars }) => {
    const router = useRouter()
    return (
        <header className={styles.header}>
            <div className="contenedor">
                <div className={styles.barra}>
                    <Link href='/' >
                        <a>
                            <Image width={400} height={100} src='/img/logo.svg' />
                        </a>
                    </Link>

                    <nav className={styles.navegacion}>
                        <Link href='/'>Inicio</Link>
                        <Link href='/us'>Nostros</Link>
                        <Link href='/blog'>Blog</Link>
                        <Link href='/shop'>Tienda</Link>
                        <Link href='/cart'>
                            <a>
                                <Image layout='fixed' width={30} height={25} src='/img/carrito.png' alt='Imagen carrito' />
                            </a>
                        </Link>
                    </nav>
                </div>

                {guitars && (
                    <div className={styles.modelo}>
                        <h2>Modelo {guitars.attributes.nombre}</h2>
                        <p>{guitars.attributes.descripcion}</p>
                        <p className={styles.precio}>${guitars.attributes.precio}</p>
                        <Link href={`/guitars/${guitars.id}`}>
                            <a className={styles.enlace}>
                                Ver producto
                            </a>
                        </Link>
                    </div>
                )}
            </div>

            {router.pathname == '/' && (
                <img className={styles.guitarra} src='https://res.cloudinary.com/ignacio-mateu/image/upload/v1647536235/img/ImagenesStrapi/imagen_index_z8wxqi.png' alt='imagen header guitarra' />
            )}


        </header>
    )
}

export default Header