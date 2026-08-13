import { useState } from 'react'
import './Gallery.css'

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  const galleryItems = [
    { id: 1, title: '이미지 1', image: '/g1.png' },
    { id: 2, title: '이미지 2', image: '/g2.png' },
    { id: 3, title: '이미지 3', image: '/g3.png' },
    { id: 4, title: '이미지 4', image: '/g4.png' },
    { id: 5, title: '이미지 5', image: '/g5.png' },
    { id: 6, title: '이미지 6', image: '/g6.png' },
    { id: 7, title: '이미지 7', image: '/g7.png' },
    { id: 8, title: '이미지 8', image: '/g8.png' },
    { id: 9, title: '이미지 9', image: '/g9.png' },
    { id: 10, title: '이미지 10', image: '/g10.png' },
  ]

  return (
    <section id="gallery" className="gallery">
      <div className="section-title">
        <h2>갤러리</h2>
        <p>까사로마의 아름다운 모습들</p>
      </div>

      <div className="gallery-grid">
        {galleryItems.map((item) => (
          <button
            key={item.id}
            type="button"
            className="gallery-item"
            onClick={() => setSelectedImage(item)}
            aria-label={`${item.title} 크게 보기`}
          >
            <img src={item.image} alt={`까사로마 갤러리 ${item.id}번 이미지`} width="600" height="600" loading="lazy" />
            <div className="gallery-overlay">
              <h3>{item.title}</h3>
            </div>
          </button>
        ))}
      </div>

      {selectedImage && (
        <div
          className="gallery-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${selectedImage.title} 크게 보기`}
          onClick={() => setSelectedImage(null)}
        >
          <button
            type="button"
            className="gallery-lightbox-close"
            onClick={() => setSelectedImage(null)}
            aria-label="이미지 닫기"
          >
            ×
          </button>
          <img
            src={selectedImage.image}
            alt={selectedImage.title}
            width="1200"
            height="900"
            onClick={(event) => event.stopPropagation()}
          />
        </div>
      )}

      <div className="gallery-info">
        <p>
          <strong>사진 추가 예정:</strong> 더 많은 객실 사진, 시설 사진, 그리고 손님들의
          추억이 담긴 사진들을 곧 추가 예정입니다.
        </p>
      </div>
    </section>
  )
}
