import type { ProductInfo } from "@/types/product/product-type"
import ProductDetailBasicInfo from "@/components/product/product-detail/product-detail-basic-info"

interface ProductDetailProps {
  productData: ProductInfo
}

export default function ProductDetail({ productData }: ProductDetailProps) {
  return (
    <>
      <ProductDetailBasicInfo productNm={productData.productNm} tags={productData.tags} imgPath={productData.imgPath} />
    </>
  )
}
