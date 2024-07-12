import type { ProductInfo } from "@/types/product/product-type"
import ProductDetail from "@/components/product/product-detail"

interface ProductDetailProps {
  params: {
    productNo: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  const productData: ProductInfo = {
    productNo: '1',
    productNm: '강의 1',
    tags: ['Java Script', 'Apple'],
    imgPath: 'https://www.hanbitn.com/wp-content/uploads/aa24050004.png',
    desc: 'description',
    norPrice: 10000,
    salePrice: 8000,
    saleRate: 20
  }

  return <>
    {params.productNo}
    <ProductDetail productData={productData} />
  </>
}
