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