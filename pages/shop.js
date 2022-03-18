import Layout from '../components/Layout'
import List from '../components/List'

const Shop = ({ guitars }) => {
    return (
        <Layout
            page='Tienda Virtual'
        >
            <main className='contenedor'>
                <h1 className='heading'>Nuestra Coleccion</h1>
                <List 
                    guitars={guitars}
                />
            </main>
        </Layout>
    )
}

// solo pueden ser ejecutadas en paginas

export async function getServerSideProps() {
    const url = 'http://localhost:1337/api/guitarras'
    const response = await fetch(url)
    const guitars = await response.json()
  
    return {
      props: {
        guitars
      }
    }
}

export default Shop