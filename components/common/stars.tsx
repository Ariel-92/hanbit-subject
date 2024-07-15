import Image from "next/image"
import { StarRate, StarRateOutlined } from "@mui/icons-material"
import { Rating } from "@mui/material"

interface StarsProps {
  rate: number
}

export default function Stars({ rate }: StarsProps) {
  return (
    <Rating
      name="review-rating"
      value={rate}
      readOnly
      icon={<StarRate />}
      emptyIcon={<StarRateOutlined />}
    />
  )
}