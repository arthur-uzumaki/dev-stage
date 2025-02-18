import type { ComponentProps, JSX, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface ButtonProps extends ComponentProps<'button'> {}
function Button({ children, ...rest }: ButtonProps) {
  return (
    <button
      className="flex h-12 w-full items-center justify-between rounded-xl bg-gray-500 px-5 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900 "
      {...rest}
    >
      {children}
    </button>
  )
}

interface TitleProps {
  title: string
}

function Title({ title }: TitleProps) {
  return <p className="font-semibold ">{title}</p>
}

interface IconProps {
  icon: LucideIcon
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon className="siz-6" />
}

Button.Title = Title
Button.Icon = Icon

export { Button }
