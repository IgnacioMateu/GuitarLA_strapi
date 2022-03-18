import Layout from '../components/Layout'
import ListBlog from '../components/ListBlog'



const Blog = ({ entry }) => {
    return (
        <Layout
            page='Blog'
        >
            <main className='contenedor'>
                <ListBlog
                    entry={entry.data}
                />

            </main>
        </Layout>
    )
}

export async function getStaticProps() {

    const url = 'http://localhost:1337/api/blogs'
    const response = await fetch(url)
    const entry = await response.json()

    return {
        props: {
            entry
        }
    }
}

export default Blog