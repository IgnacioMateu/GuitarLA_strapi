import Head from 'next/head'
import Header from '../components/Header'
import Footer from './Footer'


const Layout = ({ children, page, guitars }) => {
    return (
        <div>
            <Head>
                <title>GuitarLa - {page}</title>
                <meta name='description' content='Sitio Web de venta de guitarras' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
                <link href="https://fonts.googleapis.com/css2?family=Lato:wght@400;700;900&display=swap" rel="stylesheet" />
            </Head>


            <Header 
                guitars={guitars}
            />

            {children}

            <Footer />
        </div>
    )
}

Layout.defaultProps = {
    guitars: null
}

export default Layout