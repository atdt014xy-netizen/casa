import './Rooms.css'

export default function Rooms() {
  const rooms = [
    {
      id: 1,
      name: '디럭스 룸',
      capacity: '2인',
      features: ['산 전망', '독립 침실', '온수 욕실'],
      image: '/r1.png',
    },
    {
      id: 2,
      name: '스위트 룸',
      capacity: '2~6인',
      features: ['넓은 거실', '산 조망', '미니바'],
      image: '/r2.png',
    },
    {
      id: 3,
      name: '스위트 풀빌라',
      capacity: '4~6인',
      features: ['개별 수영장', '바비큐', '완전 독채'],
      image: '/r3.png',
    },
    {
      id: 4,
      name: '3층 룸',
      capacity: '2~4인',
      features: ['최고 전망', '산 개방감', '특별 경험'],
      image: '/r4.png',
    },
    {
      id: 5,
      name: '로얄 스위트',
      capacity: '2~4인',
      features: ['프리미엄 침구', '럭셔리 인테리어', '특별 서비스'],
      image: '/r5.png',
    },
    {
      id: 6,
      name: '독채 로얄스위트',
      capacity: '4~6인',
      features: ['최고급 시설', '프라이빗', '모든 특전'],
      image: '/r6.png',
    },
  ]

  const scrollToBooking = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="rooms">
      <div className="section-title">
        <img src="/menu1.png" alt="객실 안내" className="section-header-image" loading="lazy" />
        <h2>객실 안내</h2>
        <p>까사로마의 특별한 객실들을 만나보세요</p>
      </div>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <div key={room.id} className="room-card">
            <img src={room.image} alt={room.name} className="room-image" />
            
            <div className="room-header">
              <h3>{room.name}</h3>
              <span className="capacity">{room.capacity}</span>
            </div>

            <div className="room-features">
              {room.features.map((feature) => (
                <span key={`${room.id}-${feature}`} className="feature-tag">
                  ✓ {feature}
                </span>
              ))}
            </div>

            <div className="room-footer">
              <p className="price">시즌별 요금 안내</p>
              <button type="button" className="room-btn" onClick={scrollToBooking}>
                예약 문의
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="rooms-info">
        <p>
          <strong>체크인:</strong> 15시 | <strong>체크아웃:</strong> 11시
        </p>
        <p>
          높은 층이나 개별 수영장이 딸린 객실을 선택하시면 더욱 특별한 경험을 할 수
          있습니다.
        </p>
      </div>
    </section>
  )
}
