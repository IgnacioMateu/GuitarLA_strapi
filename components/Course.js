import Styles from '../styles/Course.module.css'

const Course = ({ course }) => {
    const image = 'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647526714/img/ImagenesStrapi/curso_x2nhp0.jpg'
    const { titulo, contenido } = course.data.attributes
    return (
        <section style={{
            padding: '10rem 0',
            marginTop: '10rem',
            background: `url(${image}) no-repeat center`,
            backgroundSize: 'cover'
        }}>
            <div className={`contenedor ${Styles.grid}`}>
                <div className={Styles.contenido}>
                    <h2 className='heading'>{titulo}</h2>
                    <p className={Styles.texto}>{contenido}</p>

                    <a className={Styles.enlace} href="#">Mas informacion</a>
                </div>
            </div>

        </section>
    )
}

export default Course