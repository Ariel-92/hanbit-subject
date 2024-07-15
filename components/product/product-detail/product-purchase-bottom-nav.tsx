import { Button, Card, CardActions, CardContent } from "@mui/material"
import H from "@/components/common/h"
import type { ProductPurchaseInfo } from "@/types/product/product-type"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"

interface ProductPurchaseBottomNavProps {
  purchaseInfo: ProductPurchaseInfo
}

export default function ProductPurchaseBottomNav({ purchaseInfo }: ProductPurchaseBottomNavProps) {
  return (
    <Card className="border border-[#c6d0e9] shadow-none pb-4">
      <CardContent>
        <H as={"h2"}>₩ {purchaseInfo.salePrice}</H>
      </CardContent>
      <CardActions className="mx-5">
        <Button>
          <ShoppingCartIcon className="text-accent" color="inherit" />
        </Button>
        <Button className="w-full bg-accent text-white font-bold hover:bg-[#11C4B4]">바로 결제</Button>
      </CardActions>
    </Card>
  )
}
