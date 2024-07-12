import Link from "next/link"

export default function Home() {
  return (
    <div>
      <h1>메인 페이지</h1>
      <Link href="/product/001">상품001</Link>
    </div>
  )
}
