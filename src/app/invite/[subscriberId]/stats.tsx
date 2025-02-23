import {
  getSubscriberInviteClicks,
  getSubscriberRankingPosition,
} from '@/http/api'
import { BadgeCheck, Medal, MousePointerClick } from 'lucide-react'
import { CardStats } from './card-stats'

interface StatsProps {
  subscriberId: string
}

export async function Stats({ subscriberId }: StatsProps) {
  const { count: accessCount } = await getSubscriberInviteClicks(subscriberId)
  const { count: inviteCount } = await getSubscriberInviteClicks(subscriberId)
  const { position: rakingPosition } =
    await getSubscriberRankingPosition(subscriberId)
  return (
    <div className="grid gap-3 md:grid-cols-3">
      <CardStats
        title={accessCount}
        subtitle="Acesse ao link"
        icon={MousePointerClick}
      />
      <CardStats
        title={inviteCount}
        subtitle="Inscrição feitas "
        icon={BadgeCheck}
      />
      <CardStats
        title={`${rakingPosition ? `${rakingPosition}°` : '-'}`}
        subtitle="Posição do ranking"
        icon={Medal}
      />
    </div>
  )
}
