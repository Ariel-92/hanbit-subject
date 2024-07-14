import H from "@/components/common/h"
import type { ProductDescription } from "@/types/product/product-type"

interface ProductDetailDescProps {
  productDesc: ProductDescription
  className?: string
}

export default function ProductDetailDesc({ productDesc, className }: ProductDetailDescProps) {
  return (
    <section className={className + ' whitespace-normal'}>
      <H as='h2' className='mb-9'>{productDesc.title}</H>
      <H as='h3' className='mb-5'>{productDesc.subTitle}</H>
      <pre className='text-text mb-5 whitespace-pre-wrap'>{productDesc.description}</pre>
      <H as='h2' className='mb-5'>무엇을 배우는 클래스인가요?</H>
      <div className='text-text mb-5' dangerouslySetInnerHTML={{ __html: productDesc.whatToLearn }}></div>
      <H as='h2' className='mb-5'>누구를 위한 클래스인가요?</H>
      <pre className='text-text mb-5 whitespace-pre-wrap'>{productDesc.WhoFor}</pre>
      <H as='h2' className='mb-5'>클래스를 수료하고 나면?</H>
      <pre className='text-text mb-5 whitespace-pre-wrap'>{productDesc.afterClass}</pre>
    </section>
  )
}
