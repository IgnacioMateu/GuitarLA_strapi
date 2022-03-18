import Link from "next/link"
import Layout from "../components/Layout"
import Styles from '../styles/NotFound.module.css'

const NotFound = () => {
    return (
        <Layout>
            <div className={Styles.no_encontrado}>
                <h1 className="heading">No encontrado</h1>

                <Link href="/">Volver al inicio</Link>
            </div>
        </Layout>
    )
}

export default NotFound