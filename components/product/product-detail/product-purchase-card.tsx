import { AppBar, Button, Card, CardActions, CardContent } from "@mui/material"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import H from "@/components/common/h"
import { ProductAdditionalInfo, ProductPurchaseInfo } from "@/types/product/product-type"
import ProductDetailAdditionalInfo from "@/components/product/product-detail/product-detail-additional-info"

interface ProductPurchaseCardProps {
  purchaseInfo: ProductPurchaseInfo
  additionalInfo: ProductAdditionalInfo
}

export default function ProductPurchaseCard({ purchaseInfo, additionalInfo }: ProductPurchaseCardProps) {
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
          <ProductDetailAdditionalInfo additionalInfo={additionalInfo} />
        </CardContent>
      </Card>
    </AppBar>
  )
}
