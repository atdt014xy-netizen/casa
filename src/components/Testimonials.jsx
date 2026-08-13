import './Testimonials.css'

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: '김민수 님',
      date: '2026년 8월',
      rating: 5,
      text: '3층 뷰가 정말 멋있어요. 산이 바로 보이는 느낌이 최고입니다. 수영장도 깨끗하고 조용해서 가족과 함께 보내기 정말 좋았어요.',
    },
    {
      id: 2,
      name: '박지은 님',
      date: '2026년 7월',
      rating: 5,
      text: '조용하고 경치가 좋으며 가족과 함께 지내기 최고의 펜션입니다. 침구 준비도 넉넉하고 직원분들이 정말 친절해요.',
    },
    {
      id: 3,
      name: '이준호 님',
      date: '2026년 8월',
      rating: 5,
      text: '넓은 객실, 멋진 수영장, 산 전망 모두 만족합니다. 아이들이 수영을 정말 좋아해서 하루 종일 수영장에서 놀았어요.',
    },
  ]

  return (
    <section className="testimonials">
      <div className="section-title">
        <img src="/menu4.png" alt="고객 후기" className="section-header-image" loading="lazy" />
        <h2>고객 후기</h2>
        <p>까사로마를 경험한 분들의 목소리</p>
      </div>

      <div className="testimonials-grid">
        {testimonials.map((review) => (
          <div key={review.id} className="testimonial-card">
            <div className="star-rating">
              {[...Array(review.rating)].map((_, i) => (
                <span key={`${review.id}-star-${i}`} className="star">
                  ★
                </span>
              ))}
            </div>

            <p className="testimonial-text">"{review.text}"</p>

            <div className="testimonial-footer">
              <div>
                <p className="reviewer-name">{review.name}</p>
                <p className="review-date">{review.date}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonials-highlight">
        <p>
          최근 후기에서 <strong>산 전망, 수영장, 조용한 분위기, 넓은 객실, 가족여행</strong>
          을 특히 좋게 평가해주셨습니다.
        </p>
      </div>
    </section>
  )
}
