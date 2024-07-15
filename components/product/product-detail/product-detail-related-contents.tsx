import Link from "next/link"
import Image from "next/image"
import { RelatedContents } from "@/types/product/product-type"
import H from "@/components/common/h"
import P from "@/components/common/p"

interface ProductDetailRelatedContentsProps {
  relatedContents: RelatedContents[]
}

export default function ProductDetailRelatedContents({ relatedContents }: ProductDetailRelatedContentsProps) {
  return (
    <>
      {relatedContents && (
        <div className="mb-16">
          <H as="h2" className="mb-4">
            함께 보면 좋아요
          </H>
          <div className={"grid grid-cols-1 " + (relatedContents.length > 1 ? "md:grid-cols-2" : "md:grid-cols-1")}>
            {relatedContents &&
              relatedContents.map((content, index) => (
                <div key={content.url + index} className="max-w-80 mx-auto p-2">
                  <Link href={content.url}>
                    <Image className="mb-4" src={content.imgPath} alt={content.title} width={320} height={480} />
                  </Link>
                  <h3 className="text-lg mb-1 mx-auto w-fit">{content.title}</h3>
                  <P className="mx-auto w-fit">
                    {content.author} | {content.publisher} | {content.year}
                  </P>
                </div>
              ))}
          </div>
        </div>
      )}
    </>
  )
}
