import type { ProductInfo } from "@/types/product/product-type"
import ProductDetailBasicInfo from "@/components/product/product-detail/product-detail-basic-info"
import ProductDetailContentsTab from "@/components/product/product-detail/product-detail-contents-tab"
import ProductPurchaseCard from "@/components/product/product-detail/product-purchase-card"
import ProductPurchaseBottomNav from "@/components/product/product-detail/product-purchase-bottom-nav"

interface ProductDetailProps {
  productData: ProductInfo
}

export default function ProductDetail({ productData }: ProductDetailProps) {
  return (
    <>
      <ProductDetailBasicInfo productNm={productData.productNm} tags={productData.tags} imgPath={productData.imgPath} avgRate={productData.avgRate}/>
      <div className="max-w-[1140px] mx-auto md:flex">
        <ProductDetailContentsTab className="w-full" productData={productData} />
        <div className="md:hidden w-full fixed bottom-0 left-0 right-0">
          <ProductPurchaseBottomNav purchaseInfo={productData.purchaseInfo} />
        </div>
        <div className="hidden md:block md:ml-5 w-full md:w-1/2">
          <ProductPurchaseCard purchaseInfo={productData.purchaseInfo} additionalInfo={productData.additionalInfo}/>
        </div>
      </div>
    </>
  )
}
