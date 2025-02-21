import { Copy, Link } from 'lucide-react'
import Image from 'next/image'

import logo from '@/assets/Logo.svg'

import { InviteLinkInput } from '@/app/invite/invite-link-input'
import { Ranking } from '@/app/invite/raking'
import { Stats } from '@/app/invite/stats'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'invite',
}

export default function InvitePage() {
  const inviteLink = 'http://3000/invite/e23rwfsvvsdvbdgbdf'
  return (
    <div className="flex min-h-dvh flex-col items-center justify-between gap-16 md:flex-row">
      <div className="flex w-full max-w-[550px] flex-col gap-10">
        <Image src={logo} alt="devstage" width={108.5} height={30} />

        <div className="space-y-2">
          <h1 className="font-heading font-semibold text-4xl text-gray-100 leading-none">
            Inscrição confirmada!
          </h1>
          <p className="text-gray-300">
            Para entrar no evento, acesse o link enviado para seu e-mail.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-3">
            <h2 className="font-heading font-semibold text-gray-200 text-xl leading-none">
              Indique e Ganhe
            </h2>
            <p className="text-gray-300">
              Convide mais pessoas para o evento e concorra a prêmios
              exclusivos! É só compartilhar o link abaixo e acompanhar as
              inscrições:
            </p>
          </div>

          <InviteLinkInput inviteLink={inviteLink} />
          <Stats />
        </div>
      </div>
      <Ranking />
    </div>
  )
}
