import { LecturerInfo } from "@/types/product/product-type"
import InfoList from "@/components/common/info-list"

interface ProductDetailLecturerInfoProps {
  lecturerInfo: LecturerInfo
}

export default function ProductDetailLecturerInfo({ lecturerInfo }: ProductDetailLecturerInfoProps) {
  return (
    <div className="w-full">
      <h2 className="text-2xl">강사 소개</h2>
      <div>
        <h3 className="text-xl">{lecturerInfo.lecturerNm}</h3>
        <pre>{lecturerInfo.desc}</pre>
      </div>
      <div className="flex w-full">
        {lecturerInfo.career && (
          <div className="p-2.5 w-1/2">
            <h3 className="text-xl">경력</h3>
            <InfoList info={lecturerInfo.career} />
          </div>
        )}
        {lecturerInfo.books && (
          <div className="p-2.5 w-1/2">
            <h3 className="text-xl">저서</h3>
            <InfoList info={lecturerInfo.books} />
          </div>
        )}
      </div>
    </div>
  )
}
