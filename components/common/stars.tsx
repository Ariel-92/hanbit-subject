import Image from "next/image"

interface StarsProps {
  rate: number
}

export default function Stars({ rate }: StarsProps) {
  return (
    <div className="flex">
      {
        Array.from({ length: 5 }, (_, index) => {
          const isFilled = index < rate

          if(isFilled) {
            return (
              <Image className="mr-1" src="/icons/icon_star.svg" alt={`별 ${index + 1}`} width={16} height={16} key={index} />
            )
          }
          else {
            return (
              <Image className="mr-1" src="/icons/icon_star_line.svg" alt={`별 ${index + 1}`} width={16} height={16} key={index} />
            )
          }
        })
      }
    </div>
  )
}