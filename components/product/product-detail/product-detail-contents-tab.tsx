"use client"

import { AppBar, Tab, Tabs } from "@mui/material"
import { SyntheticEvent, useRef, useState } from "react"
import ProductDetailDesc from "@/components/product/product-detail/product-detail-desc"
import ProductDetailLecturerInfo from "@/components/product/product-detail/product-detail-lecturer-info"
import ProductDetailPlaylist from "@/components/product/product-detail/product-detail-playlist"
import ProductDetailRelatedContents from "@/components/product/product-detail/product-detail-related-contents"
import ProductDetailReview from "@/components/product/product-detail/product-detail-review"
import ProductDetailRefundPolicy from "@/components/product/product-detail/product-detail-refund-policy"
import type { ProductInfo } from "@/types/product/product-type"

interface ProductDetailContentsTabProps {
  productData: ProductInfo
  className?: string
}

export default function ProductDetailContentsTab({ productData, className }: ProductDetailContentsTabProps) {
  const [currentTab, setCurrentTab] = useState(0)

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setCurrentTab(newValue)
  }

  return (
    <div className={className}>
      <AppBar className="border-0 shadow-none" position="sticky" color="inherit">
        <Tabs value={currentTab} onChange={handleChange} className="border-b">
          <Tab label="소개" />
          <Tab label="목차" />
          <Tab label="리뷰" />
        </Tabs>
      </AppBar>
      <div className='mx-4'>
        <TabPanel value={currentTab} index={0}>
          <ProductDetailDesc className="mt-4 mb-16" productDesc={productData.desc} />
          <ProductDetailLecturerInfo lecturerInfo={productData.lecturer} />
          <ProductDetailRelatedContents relatedContents={productData.relatedContents} />
          <ProductDetailRefundPolicy />
        </TabPanel>
        <TabPanel value={currentTab} index={1}>
          <ProductDetailPlaylist playlist={productData.playList} />
        </TabPanel>
        <TabPanel value={currentTab} index={2}>
          <ProductDetailReview reviews={productData.reviews} />
        </TabPanel>
      </div>
    </div>
  )
}

interface TabPanelProps {
  children: React.ReactNode
  value: number
  index: number
}

function TabPanel({ children, value, index }: TabPanelProps) {
  return <>{value === index && <>{children }</>}</>
}
