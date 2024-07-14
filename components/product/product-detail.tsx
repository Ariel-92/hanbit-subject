import type { ProductInfo } from "@/types/product/product-type"
import ProductDetailBasicInfo from "@/components/product/product-detail/product-detail-basic-info"
import ProductDetailDesc from "@/components/product/product-detail/product-detail-desc"
import ProductDetailLecturerInfo from "@/components/product/product-detail/product-detail-lecturer-info"
import ProductDetailPlaylist from "@/components/product/product-detail/product-detail-playlist"
import ProductDetailRelatedContents from "@/components/product/product-detail/product-detail-related-contents"
import ProductDetailReview from "@/components/product/product-detail/product-detail-review"
import ProductDetailRefundPolicy from "@/components/product/product-detail/product-detail-refund-policy"
import ProductDetailContentsTab from "@/components/product/product-detail/product-detail-contents-tab"

interface ProductDetailProps {
  productData: ProductInfo
}

export default function ProductDetail({ productData }: ProductDetailProps) {
  return (
    <>
      <ProductDetailBasicInfo productNm={productData.productNm} tags={productData.tags} imgPath={productData.imgPath} />
      <div className="max-w-[1140px] mx-auto">
        <ProductDetailContentsTab productData={productData} />
      </div>
    </>
  )
}
