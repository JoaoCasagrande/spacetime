import { getUser } from '@/lib/auth'
import Image from 'next/image'

export function Profile() {
  const { name, avatarUrl } = getUser()

  return (
    <div className="flex items-center gap-3 text-left">
      <Image
        src={avatarUrl}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <p className="text-sm max-w-[180px] leading-snug">
        {name}
        <a href="" className="block text-orange-500 hover:text-orange-300">
          Quero sair
        </a>
      </p>
    </div>
  )
}
