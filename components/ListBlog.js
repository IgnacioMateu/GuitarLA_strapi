import Entry from '../components/Entry';
import Styles from '../styles/Blog.module.css'

const ListBlog = ({ entry }) => {
    
    const images = [
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931350/img/ImagenesStrapi/blog_2_ixazl8.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931487/img/ImagenesStrapi/blog_1_qllnwi.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931349/img/ImagenesStrapi/blog_3_fofi1k.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931350/img/ImagenesStrapi/blog_4_is63m1.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931349/img/ImagenesStrapi/blog_5_snpclx.jpg',
        'https://res.cloudinary.com/ignacio-mateu/image/upload/v1646931350/img/ImagenesStrapi/blog_6_ptvngd.jpg'
    ]
    
    return (
        <>
            <h2 className='heading'>Blog</h2>

            <div className={Styles.blog}>
                {entry.map((x, i) => (
                    <Entry
                        key={x.id}
                        entry={x}
                        images={images[i]}
                    />
                ))}
            </div>
        </>
    )
}

export default ListBlog