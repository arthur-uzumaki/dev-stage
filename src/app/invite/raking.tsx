import medalGold from '@/assets/Medal_1.svg'
import medalSilver from '@/assets/Medal_2.svg'
import medalCooper from '@/assets/Medal_3.svg'

import { CardRaking } from './card-raking'

export function Ranking() {
  return (
    <div className="w-full max-w-[440px] space-y-5 ">
      <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
        Ranking de indicações
      </h2>
      <div className="space-y-4">
        <CardRaking name="Arthur" position="1°" medal={medalGold} />
        <CardRaking name="Lucas" position="2°" medal={medalSilver} />
        <CardRaking name="Matheus" position="3°" medal={medalCooper} />
      </div>
    </div>
  )
}
