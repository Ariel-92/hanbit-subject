import { LecturerInfo } from "@/types/product/product-type"
import InfoList from "@/components/common/info-list"
import H from "@/components/common/h"

interface ProductDetailLecturerInfoProps {
  lecturerInfo: LecturerInfo
}

export default function ProductDetailLecturerInfo({ lecturerInfo }: ProductDetailLecturerInfoProps) {
  return (
    <div className="w-full mb-5">
      <H as="h2" className="mb-4">강사 소개</H>
      <div className="border rounded-2xl p-3 border-[#c6d0e9]">
        <div className="mb-7">
          <H as="h3" className="border-b mb-3 pb-3 border-[#c6d0e9]">{lecturerInfo.lecturerNm}</H>
          <pre className="font-normal text-text">{lecturerInfo.desc}</pre>
        </div>
        <div className="flex w-full">
          {lecturerInfo.career && (
            <div className="py-3 pr-2.5 w-1/2">
              <H as="h3" className="mb-4">경력</H>
              <InfoList info={lecturerInfo.career} />
            </div>
          )}
          {lecturerInfo.books && (
            <div className="py-2.5 pl-2.5 w-1/2">
              <H as="h3" className="mb-4">저서</H>
              <InfoList info={lecturerInfo.books} />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
