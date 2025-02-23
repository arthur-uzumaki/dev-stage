'use client'
import { ArrowRight, Mail, User } from 'lucide-react'
import { useForm } from 'react-hook-form'

import { Button } from '@/components/button'
import { Input } from '@/components/input'
import { subscribeToEvent } from '@/http/api'
import { zodResolver } from '@hookform/resolvers/zod'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from 'sonner'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(6, 'Digite seu nome completo'),
  email: z.string().email('Digite um e-mail valido').toLowerCase(),
})

type FormSchema = z.infer<typeof formSchema>

export function SubScriptionForm() {
  const { push } = useRouter()
  const searchParams = useSearchParams()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  })

  async function handleSubscribe({ email, name }: FormSchema) {
    try {
      const referrer = searchParams.get('referrer')
      const { subscriberId } = await subscribeToEvent({ email, name, referrer })

      push(`/invite/${subscriberId}`)
    } catch (error) {
      toast.error('Não foi possível fazer sua inscrição.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit(handleSubscribe)}
      className="w-full space-y-6 rounded-2xl border border-gray-600 bg-gray-700 p-8 md:max-w-[440px]"
    >
      <h2 className="font-heading font-semibold text-gray-200 text-xl">
        Inscrição
      </h2>

      <div className="space-y-3">
        <div className="space-y-2">
          <Input error={!!errors.name}>
            <Input.Icon icon={User} />
            <Input.Field
              type="text"
              placeholder="Nome completo"
              {...register('name')}
            />
          </Input>

          {errors.name && (
            <span className="font-semibold text-danger text-xs">
              {errors.name.message}
            </span>
          )}
        </div>
        <div className="space-y-2">
          <Input error={!!errors.email}>
            <Input.Icon icon={Mail} />
            <Input.Field
              type="email"
              placeholder="E-mail"
              {...register('email')}
            />
          </Input>
          {errors.email && (
            <span className="font-semibold text-danger text-xs">
              {errors.email.message}
            </span>
          )}
        </div>

        <Button type="submit">
          <Button.Title title="Confirmar" />
          <Button.Icon icon={ArrowRight} />
        </Button>
      </div>
    </form>
  )
}
