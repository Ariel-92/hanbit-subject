import TagList from "@/components/common/tag-list"
import Image from "next/image"
import H from "@/components/common/h"
import Stars from "@/components/common/stars"

interface ProductDetailBasicInfoProps {
  productNm: string
  tags: string[]
  imgPath: string
  avgRate?: number
}

export default function ProductDetailBasicInfo({ productNm, tags, imgPath, avgRate }: ProductDetailBasicInfoProps) {
  return (
    <div className="bg-[#D8E6DE] w-full h-[200px] flex items-center">
      <div className="flex w-full max-w-[1055px] mx-5 md:mx-auto">
        <div className="w-[100%] flex flex-col justify-center">
          <H as="h1" className="mb-5">
            {productNm}
          </H>
          <TagList className="mb-4" tags={tags} />
          {avgRate && (
            <div className="flex">
              <p className="mr-1 text-[#EEBE00] font-bold">{avgRate}</p>
              <Stars rate={avgRate} />
            </div>
          )}
        </div>
        <Image
          className="rounded-xl max-h-[180px] max-w-[300px] hidden md:block"
          src={imgPath}
          alt={productNm}
          width={600}
          height={338}
        />
      </div>
    </div>
  )
}
