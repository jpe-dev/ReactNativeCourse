// Pas besoin de préciser le nom du fichier
import React from 'react'
import ReactDom from 'react-dom';

import './index.css';

const firstBook = {
  title: 'Random title',
  author: 'Amelia Radowski',
  img: 'https://m.media-amazon.com/images/I/810I+gtUtwL._AC_UL480_FMwebp_QL65_.jpg'
};

// Mettre la 1e lettre en Maj pour être reconnu comme composant
function BookList() {
  // return HTML but JSX
  return (
    <section className='bookList'>
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img}>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laudantium voluptate ipsam nihil tempora sequi cupiditate temporibus eius atque, maxime, ipsum accusantium id laboriosam quidem optio numquam commodi asperiores, blanditiis quisquam.</p>
      </Book>
      <Book title='Big Shot' author='Jeff Kinney' img='https://m.media-amazon.com/images/I/81z6xJd6mrS._AC_UL480_FMwebp_QL65_.jpg'/>
      <Book title='Dream Team' author='Ludovic Girodon' img='https://m.media-amazon.com/images/I/61JuteftYhL._AC_UL480_FMwebp_QL65_.jpg'/>  
    </section>);
}

const Book = (props) => {
  const {title, author, img, children} = props;
  return <article className='book'>
    <img src={props.img} />
    <h2>{props.title}</h2>
    <p>{props.author}</p>
    {props.children}
  </article>
}

ReactDom.render(<BookList/>, document.getElementById('root') );