import type { ProductInfo } from "@/types/product/product-type"
import ProductDetailBasicInfo from "@/components/product/product-detail/product-detail-basic-info"
import ProductDetailDesc from "@/components/product/product-detail/product-detail-desc"

interface ProductDetailProps {
  productData: ProductInfo
}

export default function ProductDetail({ productData }: ProductDetailProps) {
  return (
    <>
      <ProductDetailBasicInfo productNm={productData.productNm} tags={productData.tags} imgPath={productData.imgPath} />
      <ProductDetailDesc productDesc={productData.desc} />
    </>
  )
}
