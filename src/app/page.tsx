import { Button } from '@/components/button'
import { IconButton } from '@/components/icon-button'
import { Input } from '@/components/input'
import { ArrowRight, Copy, User } from 'lucide-react'

export default function Home() {
  return (
    <main>
      <Button type="button">
        <Button.Title title="Enviar" />
        <Button.Icon icon={ArrowRight} />
      </Button>
      <IconButton>
        <IconButton.Icon icon={Copy} />
      </IconButton>

      <Input>
        <Input.Icon icon={User} />
        <Input.Field placeholder="Digite  seu e-mail " />
      </Input>
      <Input error>
        <Input.Icon icon={User} />
        <Input.Field placeholder="Digite  seu e-mail " />
      </Input>
    </main>
  )
}
