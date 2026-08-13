import './KakaoChat.css'

const KAKAO_CHAT_URL = 'https://open.kakao.com/o/susipCIi'

export default function KakaoChat() {
  const isConfigured = Boolean(KAKAO_CHAT_URL)

  return (
    <a
      className={`kakao-chat ${isConfigured ? '' : 'is-unconfigured'}`}
      href={isConfigured ? KAKAO_CHAT_URL : undefined}
      target={isConfigured ? '_blank' : undefined}
      rel={isConfigured ? 'noreferrer' : undefined}
      aria-label={isConfigured ? '카카오톡 상담' : '카카오톡 상담 링크 준비 중'}
      title={isConfigured ? '카카오톡 상담' : '카카오톡 채팅 링크를 설정해주세요'}
      aria-disabled={!isConfigured}
    >
      <span className="kakao-symbol" aria-hidden="true">TALK</span>
    </a>
  )
}
