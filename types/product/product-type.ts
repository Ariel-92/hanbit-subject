export type ProductInfo = {
  productNo: string
  productNm: string
  tags: string[]
  imgPath: string
  desc: ProductDescription
  norPrice: number
  salePrice: number
  saleRate: number
  lecturer: LecturerInfo
  playList: PlayList[]
  relatedContents: RelatedContents[]
  reviews: Review[]
}

export type LecturerInfo = {
  lecturerNm: string
  desc: string
  career?: string[]
  books?: string[]
}

export type PlayList = {
  title: string
  url: string
  hasPreview: boolean
  playTime: string
}

export type RelatedContents = {
  title: string
  url: string
  imgPath: string
  author: string
  publisher: string
  year: string
}

export type Review = {
  reviewNo: string
  reviewWriter: string
  reviewContent: string
  reviewRate: number
  reviewDate: string
}

export type ProductDescription = {
  title: string
  subTitle: string
  description: string
  whatToLearn: string
  WhoFor: string
  afterClass: string
}