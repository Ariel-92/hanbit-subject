import { productData } from "@/mock/product-data"
import NotFound from "next/dist/client/components/not-found-error"
import ProductDetail from "@/components/product/product-detail"

export default function GetProduct({ productNo }: { productNo: string }) {
  const res = productData.find((product) => product.productNo === productNo)

  if (!res) {
    return NotFound()
  }

  return <ProductDetail productData={res} />
}
