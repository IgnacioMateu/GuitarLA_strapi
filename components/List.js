import Guitar from "./Guitar"
import Styles from '../styles/List.module.css'

const List = ({ guitars }) => {

    const images = [
        '',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra1_yyd0du.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra2_nahmzs.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra3_mbr6qf.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra4_kiul29.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra5_fjz592.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra6_u05v8x.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra7_vvim9b.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445646/img/ImagenesStrapi/guitarra8_n9brkq.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra9_bhi0tq.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra10_bn7tim.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra11_hcfhb8.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1647445647/img/ImagenesStrapi/guitarra12_tziklq.jpg'
    ]
    
  return (
    <div className={Styles.listado}>
        {guitars.data.map(x => (
            <Guitar
                key={x.id}
                guitar={x}
                images={images}
            />
        ))}
    </div>
  )
}

export default List