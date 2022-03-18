import Image from "next/image"
import Layout from "../../components/Layout"
import { formatDate } from '../../helpers'
import Styles from '../../styles/Entry.module.css'

const EntryBlog = ({ entrys }) => {
    console.log(entrys);

    const images = [
        '',
        '',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931350/img/ImagenesStrapi/blog_2_ixazl8.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931487/img/ImagenesStrapi/blog_1_qllnwi.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931349/img/ImagenesStrapi/blog_3_fofi1k.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931350/img/ImagenesStrapi/blog_4_is63m1.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931349/img/ImagenesStrapi/blog_5_snpclx.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931350/img/ImagenesStrapi/blog_6_ptvngd.jpg'
    ]

    const { contenido, publishedAt, titulo } = entrys.data.attributes
    const { id } = entrys.data
    const image = images[`${id}`]

    return (
        <Layout>
            <main className="contenedor">
                <h1 className="heading">{titulo}</h1>
                <article className={Styles.entrada}>
                    <Image layout="responsive" width={800} height={600} src={image} alt={`Imagen entrada ${titulo}`}  />

                    <div className={Styles.contenido}>
                        <p className={Styles.fecha}>{formatDate(publishedAt)}</p>
                        <p className={Styles}>{contenido}</p>
                    </div>
                    
                </article>
            </main>
        </Layout>
    )
}

// para routing dinamico (parte de la url cambia (id)), es necesario getStaticPaths
// de lo contrario solo con getStaticProps andaria


export async function getStaticPaths() {
    const url = 'http://localhost:1337/api/blogs'
    const response = await fetch(url)
    const entrys = await response.json()

    const paths = entrys.data.map(x => ({
        params: { id: x.id.toString() }
    }))

    return {
        paths,
        fallback: false
        // fallback. Muchas entradas: true, pocas entradas: false
    }
}

export async function getStaticProps({ params: { id } }) {
    const urlBlog = `http://localhost:1337/api/blogs/${id}`
    const response = await fetch(urlBlog)
    const entrys = await response.json()

    return {
        props: {
            entrys
        }
    }
}

/* export async function getStaticPaths() {
    const url = 'http://localhost:1337/api/blogs'
    const response = await fetch(url)
    const entrys = await response.json()

    const paths = entrys.data.map(x => ({
        params: { url: x.attributes.URL.toString() }
    }))

    console.log(paths);

    return {
        paths,
        fallback: false
        // fallback. Muchas entradas: true, pocas entradas: false
    }
}

export async function getStaticProps({ params: { url } }) {
    const urlBlog = `http://localhost:1337/api/blogs?url=${url}`
    const response = await fetch(urlBlog)
    const entrys = await response.json()

    return {
        props: {
            entrys: entrys[0]
        }
    }
} */



export default EntryBlog