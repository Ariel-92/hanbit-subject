interface ProductDetailDescProps {
  productDesc: string
  className?: string
}

export default function ProductDetailDesc({ productDesc, className }: ProductDetailDescProps) {
  return <div className={className} dangerouslySetInnerHTML={{ __html: productDesc }}></div>
}
