import './Map.css'

export default function Map() {
  return (
    <section id="map" className="map-section">
      <div className="section-title">
        <img src="/menu5.png" alt="위치 안내" className="section-header-image" loading="lazy" />
        <h2>위치 안내</h2>
        <p>경북 청도에서 산속의 특별한 경험을 만나세요</p>
      </div>

      <div className="map-container">
        <div className="map-image">
          <iframe
            title="까사로마펜션 구글 지도"
            src="https://www.google.com/maps?q=경북%20청도군%20운문면%20청려로%204772&output=embed"
            width="600"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>

        <div className="location-info">
          <div className="info-card">
            <h3>주소</h3>
            <p>경북 청도군 운문면 청려로 4772</p>
          </div>

          <div className="info-card">
            <h3>가는 길</h3>
            <ul>
              <li>경주에서 약 30분</li>
              <li>대구에서 약 45분</li>
              <li>주변에 관광지 다수 위치</li>
              <li>주차장 완비</li>
            </ul>
          </div>

          <div className="info-card">
            <h3>연락처</h3>
            <p>전화: 010-8688-9998</p>
            <p>운영시간: 09:00 ~ 18:00</p>
            <p className="small-text">(연중무휴)</p>
          </div>

          <div className="info-card">
            <h3>주변 관광지</h3>
            <ul>
              <li>운문사 (약 10km)</li>
              <li>청도 포도 축제</li>
              <li>주금산 자연휴양림</li>
              <li>청도 읍성</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
