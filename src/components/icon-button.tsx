import type { ComponentProps, JSX, ReactNode } from 'react'
import type { LucideIcon } from 'lucide-react'

interface IconButtonProps extends ComponentProps<'button'> {}
function IconButton({ children, ...rest }: IconButtonProps) {
  return (
    <button
      className=" rounded-md bg-gray-500 p-1.5 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900 "
      {...rest}
    >
      {children}
    </button>
  )
}

interface IconProps {
  icon: LucideIcon
}

function Icon({ icon: Icon }: IconProps) {
  return <Icon className="siz-5" />
}

IconButton.Icon = Icon

export { IconButton }
