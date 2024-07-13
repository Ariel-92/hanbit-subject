interface ProductDetailDescProps {
  productDesc: string
}

export default function ProductDetailDesc({ productDesc }: ProductDetailDescProps) {
  return <div dangerouslySetInnerHTML={{ __html: productDesc }}></div>
}
