import { useState, useEffect } from 'react'
import '../styles/normalize.css'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  const [cart, setCart] = useState([])

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

  useEffect(() => {
    const cartLS = JSON.parse(localStorage.getItem('cart')) ?? []
    setCart(cartLS)
  }, [])
  
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart))
  }, [cart])

  const addCart = product => {
    if (cart.some(x => x.id == product.id)) {
      const upgradedCart = cart.map(x => {
        if (x.id == product.id) {
          x.amount = product.amount
        }
        return x
      })
      setCart(upgradedCart)
    } else {
      setCart([...cart, product])
    }
  }

  const updateAmount = product => {
      const upgradedCart = cart.map(x => {
        if (x.id == product.id) {
          x.amount = product.amount
        }
        return x
      })

      setCart(upgradedCart)
  }

  const deleteProduct = id => {
    const upgradedCart = cart.filter(article => article.id !== id)
    setCart(upgradedCart)
  }


  return <Component {...pageProps}
    cart={cart}
    addCart={addCart}
    imagesA={images}
    updateAmount={updateAmount}
    deleteProduct={deleteProduct}
  />
}

export default MyApp
