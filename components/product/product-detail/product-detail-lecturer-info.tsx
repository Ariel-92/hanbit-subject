import { LecturerInfo } from "@/types/product/product-type"

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
            <ul>
              {lecturerInfo.career.map((career) => (
                <li key={career}>{career}</li>
              ))}
            </ul>
          </div>
        )}
        {lecturerInfo.books && (
          <div className="p-2.5 w-1/2">
            <h3 className="text-xl">저서</h3>
            <ul>
              {lecturerInfo.books.map((book) => (
                <li key={book}>{book}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
}
