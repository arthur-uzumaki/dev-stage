import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { ArrowRight, Mail, User } from 'lucide-react'

export function SubScriptionForm() {
  return (
    <form className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]">
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <Input>
          <Input.Icon icon={User} />
          <Input.Field type="text" placeholder="Nome completo" />
        </Input>

        <Input>
          <Input.Icon icon={Mail} />
          <Input.Field type="email" placeholder="E-mail" />
        </Input>

        <Button type="submit">
          <Button.Title title="Confirmar" />
          <Button.Icon icon={ArrowRight} />
        </Button>
      </div>
    </form>
  )
}
