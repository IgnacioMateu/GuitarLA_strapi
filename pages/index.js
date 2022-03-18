import Layout from '../components/Layout'
import List from '../components/List'
import Course from '../components/Course'
import ListBlog from '../components/ListBlog'

export default function Home({ guitars, course, entrys }) {
  const entrys2 = entrys.data.slice(0, 3)
  return (
    <div>
      <Layout
        page='Inicio'
        guitars={guitars.data[3]}
      >
        <main className='contenedor'>
          <h1 className='heading'>Nuestra Coleccion</h1>
          <List
            guitars={guitars}
          />
        </main>

        <Course
          course={course}
        />

        <section className='contenedor'>
          <ListBlog
            entry={entrys2}
          />
        </section>
      </Layout>
    </div>

  )
}

export async function getServerSideProps() {
  const urlGuitars = 'http://localhost:1337/api/guitarras'
  const urlCourses = 'http://localhost:1337/api/curso'
  const urlBlog = 'http://localhost:1337/api/blogs'

  const [resGuitars, resCourses, resBlog] = await Promise.all([
    fetch(urlGuitars),
    fetch(urlCourses),
    fetch(urlBlog)
  ])

  const [guitars, course, entrys] = await Promise.all([
    resGuitars.json(),
    resCourses.json(),
    resBlog.json()
  ])

  return {
    props: {
      guitars,
      course,
      entrys
    }
  }
}
