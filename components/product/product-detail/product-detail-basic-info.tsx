import TagList from "@/components/common/tag-list"
import Image from "next/image"

interface ProductDetailBasicInfoProps {
  productNm: string
  tags: string[]
  imgPath: string
}

export default function ProductDetailBasicInfo({ productNm, tags, imgPath }: ProductDetailBasicInfoProps) {
  return (
    <div className="bg-[#D8E6DE] w-full h-40 flex items-center">
      <div className="flex w-full mx-20">
        <div className="w-[100%] flex flex-col justify-center">
          <h1 className="text-2xl mb-5">{productNm}</h1>
          <TagList tags={tags} />
        </div>
        <Image className="rounded-xl max-h-32 max-w-60" src={imgPath} alt={productNm} width={600} height={338} />
      </div>
    </div>
  )
}
