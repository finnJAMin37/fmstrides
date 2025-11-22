import Image from 'next/image'

type HeaderProps = {
  logo?: boolean
  title?: string
}

export default function Header({
  logo = true,
  title = 'Fort Mill Strides',
}: HeaderProps) {
  return (
    <div className="flex flex-col items-center text-center gap-2">
      {logo && (
        <a href="/" className="block">
          <Image
            src="/fmslogo.jpeg"
            alt="Logo image"
            width={160}
            height={160}
            priority
            draggable={false}
          />
        </a>
      )}
      <h1 className="text-6xl font-semibold">{title}</h1>
    </div>
  )
}
