import type { LucideIcon } from 'lucide-react'
import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface InputProps extends ComponentProps<'div'> {
  error?: boolean
}

function Input({ children, error = false }: InputProps) {
  return (
    <div
      data-error={error}
      className="group flex h-12 items-center gap-2 rounded-xl border border-gray-600 bg-gray-800 px-4 focus-within:border-gray-100 data-[error=true]:border-danger"
    >
      {children}
    </div>
  )
}

interface IconProps {
  icon: LucideIcon
  className?: string
}

function InputIcon({ icon: Icon, className }: IconProps) {
  return (
    <Icon
      className={twMerge(
        'text-gray-400 group-focus-within:text-gray-100 group-[&:not(:has(input:placeholder-shown))]:text-gray-100 group-data-[error=true]:text-danger',
        className
      )}
    />
  )
}

interface InputFieldProps extends ComponentProps<'input'> {}

function InputField({ ...rest }: InputFieldProps) {
  return (
    <input className="flex-1 outline-0 placeholder:text-gray-400" {...rest} />
  )
}

Input.Icon = InputIcon
Input.Field = InputField

export { Input }
