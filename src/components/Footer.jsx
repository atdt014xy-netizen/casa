import './Footer.css'
import PrivacyPolicy from './PrivacyPolicy'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-heading"><span aria-hidden="true">🏡</span><h3>까사로마펜션</h3></div>
          <p>산속 마운틴뷰와 수영장,</p>
          <p>개별 바비큐를 갖춘</p>
          <p>감성형 풀빌라</p>
        </div>

        <div className="footer-section">
          <div className="footer-heading"><span aria-hidden="true">📍</span><h4>주소</h4></div>
          <p>경북 청도군 운문면 청려로 4772</p>
        </div>

        <div className="footer-section">
          <div className="footer-heading"><span aria-hidden="true">📞</span><h4>연락처</h4></div>
          <p>전화: 010-8688-9998</p>
          <p>운영시간: 09:00 ~ 18:00</p>
          <p className="small">(연중무휴)</p>
        </div>

        <div className="footer-section">
          <div className="footer-heading"><span aria-hidden="true">🗓️</span><h4>예약 안내</h4></div>
          <p>체크인: 15시</p>
          <p>체크아웃: 11시</p>
          <p className="small">온라인 예약 가능</p>
        </div>
      </div>

      <PrivacyPolicy />

      <div className="footer-bottom">
        <p>
          &copy; {currentYear} 까사로마펜션. 모든 권리 예약되어 있습니다. | 산속의
          특별한 경험을 함께하세요.
        </p>
      </div>
    </footer>
  )
}
