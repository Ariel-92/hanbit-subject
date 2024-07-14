import { LecturerInfo } from "@/types/product/product-type"
import InfoList from "@/components/common/info-list"

interface ProductDetailLecturerInfoProps {
  lecturerInfo: LecturerInfo
}

export default function ProductDetailLecturerInfo({ lecturerInfo }: ProductDetailLecturerInfoProps) {
  return (
    <div className="w-full mb-5">
      <h2 className="text-2xl mb-4">강사 소개</h2>
      <div className="border rounded-2xl p-3 border-[#c6d0e9]">
        <div>
          <h3 className="text-xl border-b mb-3 pb-3 border-[#c6d0e9]">{lecturerInfo.lecturerNm}</h3>
          <pre>{lecturerInfo.desc}</pre>
        </div>
        <div className="flex w-full">
          {lecturerInfo.career && (
            <div className="py-3 pr-2.5 w-1/2">
              <h3 className="text-xl">경력</h3>
              <InfoList info={lecturerInfo.career} />
            </div>
          )}
          {lecturerInfo.books && (
            <div className="py-2.5 pl-2.5 w-1/2">
              <h3 className="text-xl">저서</h3>
              <InfoList info={lecturerInfo.books} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
