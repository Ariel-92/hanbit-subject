import GetProduct from "@/actions/product/get-product"

interface ProductDetailProps {
  params: {
    productNo: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  return <GetProduct productNo={params.productNo} />
}
