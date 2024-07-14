import { PlayList } from "@/types/product/product-type"
import H from "@/components/common/h"
import P from "@/components/common/p"
import Link from "next/link"

interface ProductDetailPlaylistProps {
  playlist: PlayList[]
}

export default function ProductDetailPlaylist({ playlist }: ProductDetailPlaylistProps) {
  return (
    <div>
      <H as="h2" className="my-4">목차</H>
      <div className="border rounded-lg border-[#c6d0e9]">
        <table className="w-full table-fixed">
          <tbody>
          {playlist.map((item) => (
            <tr key={item.title}>
              <td className="w-4 h-4 py-3 pl-5 pr-4">
                <i
                  className="before:bg-[url('/icons/icon_play_button.svg')] before:block before:w-4 before:h-4 before:bg-cover" />
              </td>
              <td className="py-3 pl-7 pr-4 w-full">
                {item.hasPreview ? <Link className="text-[#00b3a3]" href={item.url}>{item.title + "[미리보기]"}</Link> : <P>{item.title}</P>}
              </td>
              <td className="py-3 px-4 w-24"><P>{item.playTime}</P></td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
