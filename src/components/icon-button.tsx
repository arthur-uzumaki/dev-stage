import type { LucideIcon } from 'lucide-react'
import type { ComponentProps, JSX, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface IconButtonProps extends ComponentProps<'button'> {}
function IconButton({ children, className, ...rest }: IconButtonProps) {
  return (
    <button
      className={twMerge(
        ' rounded-md bg-gray-500 p-1.5 text-blue transition-colors duration-300 hover:bg-blue hover:text-gray-900',
        className
      )}
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
  return <Icon className="size-5" />
}

IconButton.Icon = Icon

export { IconButton }
