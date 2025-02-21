import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { CardStats } from './card-stats'

export function Stats() {
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <CardStats
        title="1024"
        subtitle="Acesse ao link"
        icon={MousePointerClick}
      />
      <CardStats title="1024" subtitle="Inscrição feitas " icon={BadgeCheck} />
      <CardStats title="3°" subtitle="Posição do ranking" icon={Medal} />
    </div>
  )
}
