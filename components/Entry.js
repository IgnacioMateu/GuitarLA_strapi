import Link from 'next/link'
import Image from 'next/image'
import { formatDate } from '../helpers'
import Styles from '../styles/Entry.module.css'

const Entry = ({ entry, images }) => {
    const { id } = entry
    const { titulo, resumen, contenido, publishedAt, url } = entry.attributes
    return (
        <article>
            <Image priority='true' layout='responsive' width={800} height={600} src={images} alt={`imagen blog ${titulo} `} />

            <div className={Styles.contendio}>
                <h3>{titulo} </h3>
                <p className={Styles.fecha}>{formatDate(publishedAt)}</p>
                <p className={Styles.resumen}>{resumen}</p>
                <Link href={`/blog/${id}`}>
                    <a className={Styles.enlace}>
                        Leer Entrada
                    </a>
                </Link>
            </div>
        </article>
    )
}

export default Entry