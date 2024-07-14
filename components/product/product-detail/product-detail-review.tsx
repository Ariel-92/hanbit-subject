import { Review } from "@/types/product/product-type"
import Stars from "@/components/common/stars"
import { TextareaAutosize } from "@mui/base"

interface ProductDetailReviewProps {
  reviews: Review[]
}

export default function ProductDetailReview({ reviews }: ProductDetailReviewProps){
  return (
    <div className="mb-10">
      <h2 className="text-2xl mb-4">리뷰</h2>
      <div className="border-t-2 border-b-2 border-[#EEEEEE] pb-4 mb-4">
        {reviews.map((review) => (
          <div key={review.reviewNo} className="flex w-full px-7 pt-7">
            <div className="w-28 my-auto">{review.reviewWriter}</div>
            <div className="w-full ml-7">
              <div><Stars rate={review.reviewRate } /></div>
              <div>{review.reviewContent}</div>
              <div>{review.reviewDate}</div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <TextareaAutosize className="w-full border border-[#EEEEEE] p-3" minRows={3} maxRows={5} placeholder="리뷰를 작성해주세요" />
      </div>
    </div>
  )
}