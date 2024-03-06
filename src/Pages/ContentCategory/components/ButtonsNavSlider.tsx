import { IconChevronLeft, IconChevronRight } from '@tabler/icons-react'

interface PropsButton {
  className: string,
  onClick: () => void
}

export const PrevArrow = (props: PropsButton) => {
  const { className, onClick } = props
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <IconChevronLeft size={32} />
    </button>
  )
}

export const NextArrow = (props: PropsButton) => {
  const { className, onClick } = props
  return (
    <button
      className={className}
      onClick={onClick}
    >
      <IconChevronRight size={32} />
    </button>
  )
}