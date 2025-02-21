import Image from 'next/image'

interface CardRakingProps {
  position: string
  name: string
  medal: string
}

export function CardRaking({ medal, name, position }: CardRakingProps) {
  return (
    <div className="relative flex flex-col justify-center gap-3 rounded-xl border border-gray-600 bg-gray-700 p-6 ">
      <span className="text-gray-300 text-sm leading-none">
        <span className="font-semibold">{position}</span> | {name}
      </span>
      <span className="font-heading font-semibold text-2xl text-gray-200 leading-none">
        1030
      </span>
      <Image
        src={medal}
        alt="medalha de ouro"
        className="absolute top-0 right-8"
      />
    </div>
  )
}
