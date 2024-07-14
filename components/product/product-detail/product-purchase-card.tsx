import { AppBar, Button, Card, CardActions, CardContent } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import H from "@/components/common/h"
import { ProductPurchaseInfo } from "@/types/product/product-type"

interface ProductPurchaseCardProps {
  purchaseInfo: ProductPurchaseInfo
}

export default function ProductPurchaseCard({ purchaseInfo }: ProductPurchaseCardProps) {
  return (
    <AppBar className="border-0 shadow-none" position="sticky" color="inherit">
      <Card className="border border-[#c6d0e9] mt-5 shadow-none sticky">
        <CardContent>
          <H as={'h2'}>₩ {purchaseInfo.salePrice}</H>
        </CardContent>
        <CardActions className="mx-5">
          <Button>
            <ShoppingCartIcon className="text-accent" color="inherit" />
          </Button>
          <Button className="w-full bg-accent text-white font-bold hover:bg-[#11C4B4]">바로 결제</Button>
        </CardActions>
        <CardContent>
          <ul>
            <li>카테고리 : {purchaseInfo.category}</li>
            <li>강사명 : {purchaseInfo.author}</li>
            <li>총 강의 수 : {purchaseInfo.totalPlayTerm}</li>
            <li>총 강의 길이 : {purchaseInfo.totalPlayTime}</li>
            <li>보관기간 : {purchaseInfo.storagePeriod}</li>
            <li>수강 권장 기간 : {purchaseInfo.recommendPeriod}</li>
          </ul>
        </CardContent>
      </Card>
    </AppBar>
  )
}
