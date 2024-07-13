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
    saleRate: 20,
    lecturer: {
      lecturerNm: '강사 1',
      desc: '강사 소개 \n 강사 소개2',
      career: ['경력1', '경력2'],
      books: ['저서1', '저서2']
    }
  }

  return <>
    {params.productNo}
    <ProductDetail productData={productData} />
  </>
}
