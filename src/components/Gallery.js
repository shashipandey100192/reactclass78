import React from 'react'
import ImageGallery from 'react-image-gallery';
import './global.css';

const images = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
    {
        original: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg',
        thumbnail: 'https://cdn.pixabay.com/photo/2018/01/12/10/19/fantasy-3077928__480.jpg',
      },
      {
        original: 'image/notfound.jpg',
        thumbnail: 'image/notfound.jpg',
      }
  ];



function Gallery() {
  return (
  <ImageGallery items={images} />
  )
}

export default Gallery