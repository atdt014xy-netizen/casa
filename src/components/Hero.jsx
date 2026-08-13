import './Hero.css'

export default function Hero() {
  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="hero">
      <img
        src="/main2.png"
        alt="까사로마 풀빌라 펜션 메인 이미지"
        className="hero-image"
        width="1254"
        height="1254"
        fetchPriority="high"
      />
      <div className="hero-content">
        <p className="hero-eyebrow">CASA ROMA PRIVATE VILLA</p>
        <h1>까사로마 풀빌라 펜션</h1>
        <p className="hero-features">산속 마운틴뷰 · 수영장 · 개별 바비큐</p>
        <p className="subtitle">
          경북 청도의 감성형 풀빌라에서<span className="mobile-break"><br /></span>{' '}
          특별한 하루를 보내세요
        </p>
        <div className="hero-actions">
          <button type="button" className="button button-primary" onClick={scrollToBooking}>
            예약하기
          </button>
        </div>
      </div>
    </section>
  )
}
