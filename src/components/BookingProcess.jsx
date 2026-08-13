import './BookingProcess.css'

export default function BookingProcess() {
  const steps = [
    {
      number: '1',
      icon: '📝',
      title: '예약 신청',
      description: '원하는 날짜와 객실을 선택해주세요',
    },
    {
      number: '2',
      icon: '🔎',
      title: '정보 확인',
      description: '투숙자 정보 및 특별 요청사항을 입력합니다',
    },
    {
      number: '3',
      icon: '✅',
      title: '예약 확정',
      description: '결제 후 예약이 확정되며 안내문을 드립니다',
    },
    {
      number: '4',
      icon: '🌿',
      title: '즐거운 숙박',
      description: '체크인 후 산속의 특별한 시간을 즐기세요',
    },
  ]

  return (
    <section className="booking-process">
      <div className="section-title">
        <img src="/menu3.png" alt="예약 프로세스" className="section-header-image" loading="lazy" />
        <h2>예약 프로세스</h2>
        <p>간단한 4단계로 예약 완료</p>
      </div>

      <div className="steps-container">
        {steps.map((step, index) => (
          <div key={step.number} className="step">
            <div className="step-heading">
              <span className="step-icon" aria-hidden="true">{step.icon}</span>
              <span className="step-number">{step.number}</span>
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
            {index < steps.length - 1 && <div className="step-arrow">→</div>}
          </div>
        ))}
      </div>

      <div className="booking-info">
        <h3>예약 전 확인사항</h3>
        <ul>
          <li>개별 수영장을 이용할 경우 예약 전에 숙소에 미온수 온도와 요금을 확인해주세요</li>
          <li>바비큐는 상황에 따라 추가 요금이 발생할 수 있습니다</li>
          <li>최상의 경험을 위해 가능하면 높은 층의 객실을 선택하세요</li>
          <li>주변이 숲인 숙소 특성상 자연 현상을 참고하시기 바랍니다</li>
        </ul>
      </div>
    </section>
  )
}
