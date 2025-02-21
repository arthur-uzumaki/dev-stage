'use client'

import { IconButton } from '@/components/icon-button'
import { Input } from '@/components/input'
import { Copy, Link } from 'lucide-react'
import { toast } from 'sonner'

interface InviteLinkInputProps {
  inviteLink: string
}

export function InviteLinkInput({ inviteLink }: InviteLinkInputProps) {
  function copyInviteLinkInput() {
    navigator.clipboard.writeText(inviteLink)
    toast.success('Link copiado')
  }

  return (
    <Input>
      <Input.Icon className="size-5" icon={Link} />

      <Input.Field readOnly defaultValue={inviteLink} />
      <IconButton className="-mr-2" onClick={copyInviteLinkInput}>
        <IconButton.Icon icon={Copy} />
      </IconButton>
    </Input>
  )
}
