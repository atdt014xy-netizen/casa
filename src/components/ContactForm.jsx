import { useState } from 'react'
import './ContactForm.css'

export default function ContactForm() {
  const contactPhone = '010-8688-9998'
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    checkIn: '',
    guests: '',
    message: '',
    agree: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // 예약 정보 저장
    const booking = {
      id: Date.now(),
      ...formData,
      bookingDate: new Date().toLocaleDateString('ko-KR'),
      status: '예약 확정'
    }
    
    // 기존 예약 불러오기
    const existingBookings = JSON.parse(localStorage.getItem('casaRomaBookings') || '[]')
    existingBookings.push(booking)
    localStorage.setItem('casaRomaBookings', JSON.stringify(existingBookings))
    
    alert(`${formData.name}님의 예약이 완료되었습니다!\n\n체크인: ${formData.checkIn}\n인원: ${formData.guests}명\n\n곧 연락 드리겠습니다.`)
    setFormData({
      name: '',
      phone: '',
      checkIn: '',
      guests: '',
      message: '',
      agree: false,
    })
  }

  return (
    <section className="contact-form">
      <div className="section-title">
        <img
          src="/main3.png"
          alt="지금 예약하세요"
          className="section-header-image"
          onError={(event) => {
            event.currentTarget.onerror = null
            event.currentTarget.src = '/main2.png'
          }}
        />
        <h2>지금 예약하세요</h2>
        <p>특별한 경험이 기다리고 있습니다</p>
      </div>

      <form className="form-container" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름 *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="성함을 입력하세요"
          />
        </div>

        <div className="form-group">
          <label htmlFor="phone">휴대전화 *</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="010-0000-0000"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label htmlFor="checkIn">체크인 날짜 *</label>
            <input
              type="date"
              id="checkIn"
              name="checkIn"
              value={formData.checkIn}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="guests">인원 수 *</label>
            <select
              id="guests"
              name="guests"
              value={formData.guests}
              onChange={handleChange}
              required
            >
              <option value="">선택하세요</option>
              <option value="2">2명</option>
              <option value="3">3명</option>
              <option value="4">4명</option>
              <option value="5">5명</option>
              <option value="6">6명 이상</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="message">특별 요청사항</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="추가 요청이 있으신가요? (바비큐 신청, 반려견 동반 등)"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group checkbox">
          <input
            type="checkbox"
            id="agree"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />
          <label htmlFor="agree">
            개인정보 수집·이용에 동의합니다 * (<a href="#privacy-policy">개인정보처리방침 보기</a>)
          </label>
        </div>

        <button type="submit" className="submit-btn">
          예약 신청하기
        </button>
      </form>

      <div className="contact-info">
        <h3>직접 연락하기</h3>
        <div className="info-items">
          <div className="info-item">
            <span className="label">주소</span>
            <span className="value">경북 청도군 운문면 청려로 4772</span>
          </div>
          <div className="info-item">
            <span className="label">전화</span>
            <span className="value">{contactPhone}</span>
          </div>
          <div className="info-item">
            <span className="label">운영시간</span>
            <span className="value">09:00 ~ 18:00 (연중무휴)</span>
          </div>
        </div>
      </div>

      <div className="mobile-booking-bar" aria-label="모바일 예약 메뉴">
        <a href={`tel:${contactPhone}`}>전화 문의</a>
        <a href="#contact">예약하기</a>
      </div>
    </section>
  )
}
