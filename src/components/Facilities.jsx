import './Facilities.css'

export default function Facilities() {
  const facilities = [
    {
      id: 1,
      icon: '🏊',
      title: '공용 야외 수영장',
      description: '7~8월 무료 이용, 미온수 운영 가능 (추가 요금)',
      details: '평균 32도, 수심 약 1.1m',
    },
    {
      id: 2,
      icon: '🔥',
      title: '개별 바비큐',
      description: '객실별 개별 바비큐 이용 가능',
      details: '그릴·숯 비용 약 3만원, 산 전망과 함께',
    },
    {
      id: 3,
      icon: '🏔️',
      title: '마운틴뷰',
      description: '전 객실 통창 구조로 산 전망',
      details: '특히 3층 객실의 산 전망이 뛰어남',
    },
    {
      id: 4,
      icon: '🐕',
      title: '반려견 동반',
      description: '10kg 미만 소형견 동반 가능',
      details: '1마리당 3만원 추가, 수영장 미이용',
    },
  ]

  return (
    <section className="facilities">
      <div className="section-title">
        <img src="/menu2.png" alt="까사로마 시설" className="section-header-image" loading="lazy" />
        <h2>까사로마의 시설</h2>
        <p>산속에서 누릴 수 있는 특별한 경험들</p>
      </div>

      <div className="facilities-grid">
        {facilities.map((facility) => (
          <div key={facility.id} className="facility-card">
            <div className="facility-icon facility-emblem" aria-label={`${facility.title} 아이콘`}>
              {facility.icon}
            </div>
            <h3>{facility.title}</h3>
            <p className="facility-desc">{facility.description}</p>
            <p className="facility-details">{facility.details}</p>
          </div>
        ))}
      </div>

      <div className="facilities-highlight">
        <h3>아이와 함께라면</h3>
        <p>가족 여행객이 많고 아이들이 수영장을 특히 좋아합니다.</p>
        <p className="small-text">
          키 130cm 이하 어린이는 보호자 동반 및 구명조끼 착용이 필요합니다.
        </p>
      </div>
    </section>
  )
}
