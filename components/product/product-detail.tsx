import type { ProductInfo } from "@/types/product/product-type"
import ProductDetailBasicInfo from "@/components/product/product-detail/product-detail-basic-info"
import ProductDetailDesc from "@/components/product/product-detail/product-detail-desc"
import ProductDetailLecturerInfo from "@/components/product/product-detail/product-detail-lecturer-info"
import ProductDetailPlaylist from "@/components/product/product-detail/product-detail-playlist"

interface ProductDetailProps {
  productData: ProductInfo
}

export default function ProductDetail({ productData }: ProductDetailProps) {
  return (
    <>
      <ProductDetailBasicInfo productNm={productData.productNm} tags={productData.tags} imgPath={productData.imgPath} />
      <div className="max-w-[1140px] mx-auto">
        <ProductDetailDesc className="mb-6" productDesc={productData.desc} />
        <ProductDetailLecturerInfo lecturerInfo={productData.lecturer} />
        <ProductDetailPlaylist playlist={productData.playList} />
      </div>
    </>
  )
}
