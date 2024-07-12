interface ProductDetailProps {
  params: {
    productNo: string
  }
}

export default function ProductDetailPage({ params }: ProductDetailProps) {
  return <>{params.productNo}</>
}
