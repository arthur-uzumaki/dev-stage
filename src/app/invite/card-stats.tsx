import type { LucideIcon } from 'lucide-react'

interface CardStatsProps {
  title: string
  subtitle: string
  icon: LucideIcon
}

export function CardStats({ icon: Icon, subtitle, title }: CardStatsProps) {
  return (
    <div className="relative flex flex-col items-center justify-center gap-1 rounded-xl border border-gray-600 bg-gray-700 px-4 py-7 ">
      <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
        {title}
      </span>
      <span className="text-center text-gray-300 text-sm leading-none">
        {subtitle}
      </span>
      <Icon className="absolute top-3 left-3 size-5 text-purple" />
    </div>
  )
}
