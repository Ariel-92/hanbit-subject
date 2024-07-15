import { ProductAdditionalInfo } from "@/types/product/product-type"

interface ProductDetailAdditionalInfoProps {
  additionalInfo: ProductAdditionalInfo
  className?: string
}

export default function ProductDetailAdditionalInfo({ additionalInfo, className }: ProductDetailAdditionalInfoProps) {
  return (
    <ul className={className}>
      <li>
        <div className="flex">
          <p className="w-40">카테고리</p>
          <p>{additionalInfo.category}</p>
        </div>
      </li>
      <li>
        <div className="flex">
          <p className="w-40">강사명</p>
          <p>{additionalInfo.author}</p>
        </div>
      </li>
      <li>
        <div className="flex">
          <p className="w-40">총 강의 수</p>
          <p>{additionalInfo.totalPlayTerm}</p>
        </div>
      </li>
      <li>
        <div className="flex">
          <p className="w-40">총 강의 길이</p>
          <p>{additionalInfo.totalPlayTime}</p>
        </div>
      </li>
      <li>
        <div className="flex">
          <p className="w-40">보관기간</p>
          <p>{additionalInfo.storagePeriod}</p>
        </div>
      </li>
      <li>
        <div className="flex">
          <p className="w-40">수강 권장 기간</p>
          <p>{additionalInfo.recommendPeriod}</p>
        </div>
      </li>
    </ul>
  )
}
