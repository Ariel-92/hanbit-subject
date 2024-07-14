import Link from "next/link"
import Image from "next/image"
import { RelatedContents } from "@/types/product/product-type"
import H from "@/components/common/h"

interface ProductDetailRelatedContentsProps {
  relatedContents: RelatedContents[]
}

export default function ProductDetailRelatedContents({ relatedContents }: ProductDetailRelatedContentsProps) {
  return (
    <div>
      <H as="h2" className="mb-4">함께 보면 좋아요</H>
      <div className="grid grid-cols-2">
        {relatedContents &&
          relatedContents.map((content) => (
            <div key={content.url} className="max-w-80 mx-auto mb-4">
              <Link href={content.url}>
                <Image className="mb-4" src={content.imgPath} alt={content.title} width={320} height={480} />
              </Link>
              <h3 className="text-lg mb-1 mx-auto w-fit">{content.title}</h3>
              <p className="mx-auto w-fit">
                {content.author} | {content.publisher} | {content.year}
              </p>
            </div>
          ))}
      </div>
    </div>
  )
}
