import { ReactNode } from "react"

interface HProps {
  as: string
  className?: string
  children: ReactNode
}

export default function H({ as, className, children }: HProps) {
  return (
    <>
      {as === 'h1' && <h1 className={className + ' text-3xl font-bold'}>{children}</h1>}
      {as === 'h2' && <h2 className={className + ' text-2xl font-bold'}>{children}</h2>}
      {as === 'h3' && <h3 className={className + ' text-xl font-bold'}>{children}</h3>}
    </>
  )
}