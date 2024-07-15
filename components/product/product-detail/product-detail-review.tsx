import { Review } from "@/types/product/product-type"
import Stars from "@/components/common/stars"
import { TextareaAutosize } from "@mui/base"
import H from "@/components/common/h"
import P from "@/components/common/p"
import { Button, Rating } from "@mui/material"
import { StarRate, StarRateOutlined } from "@mui/icons-material"

interface ProductDetailReviewProps {
  reviews: Review[]
}

export default function ProductDetailReview({ reviews }: ProductDetailReviewProps) {
  return (
    <div className="mb-10">
      <H as="h2" className="mt-4 mb-9">
        리뷰
      </H>
      <div className="border-t-2 border-b-2 border-[#EEEEEE] pb-4 mb-4">
        {reviews.map((review) => (
          <div key={review.reviewNo} className="flex w-full px-7 pt-7">
            <div className="w-28 my-auto">{review.reviewWriter}</div>
            <div className="w-full ml-7">
              <div>
                <Stars rate={review.reviewRate} />
              </div>
              <P>{review.reviewContent}</P>
              <P>{review.reviewDate}</P>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Rating
          name="write-review-rating"
          defaultValue={3}
          max={5}
          icon={<StarRate />}
          emptyIcon={<StarRateOutlined />}
        />
        <TextareaAutosize
          className="w-full border border-[#EEEEEE] p-3"
          minRows={3}
          maxRows={5}
          placeholder="리뷰를 작성해주세요"
        />
        <Button className="w-40 ml-full bg-accent text-white font-bold hover:bg-[#11C4B4]">리뷰 등록</Button>
      </div>
    </div>
  )
}
