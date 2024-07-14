export type ProductInfo = {
  productNo: string
  productNm: string
  tags: string[]
  imgPath: string
  desc: string
  norPrice: number
  salePrice: number
  saleRate: number
  lecturer: LecturerInfo
  playList: PlayList[]
  relatedContents: RelatedContents[]
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