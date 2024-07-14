import { ReactNode } from "react"

interface PProps {
  className?: string
  children: ReactNode
}

export default function P({ className, children }: PProps) {
  return (
    <p className={className + ' font-normal text-text'}>{children}</p>
  )
}