export function LogoSvg({ size = 22 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.4 8.8L21 11.2L14.4 13.6L12 20.4L9.6 13.6L3 11.2L9.6 8.8L12 2Z"
        fill="#6B5CE7"
        opacity=".9"
      />
      <path
        d="M19 15L20 17.5L22.5 18.5L20 19.5L19 22L18 19.5L15.5 18.5L18 17.5L19 15Z"
        fill="#6B5CE7"
        opacity=".4"
      />
    </svg>
  )
}

export function LogoSvgSmall() {
  return (
    <svg width={20} height={20} viewBox="0 0 24 24" fill="none">
      <path
        d="M12 2L14.4 8.8L21 11.2L14.4 13.6L12 20.4L9.6 13.6L3 11.2L9.6 8.8L12 2Z"
        fill="#6B5CE7"
        opacity=".6"
      />
    </svg>
  )
}
