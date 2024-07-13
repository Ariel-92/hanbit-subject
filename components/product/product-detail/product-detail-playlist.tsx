import { PlayList } from "@/types/product/product-type"

interface ProductDetailPlaylistProps {
  playlist: PlayList[]
}

export default function ProductDetailPlaylist({ playlist }: ProductDetailPlaylistProps) {
  return (
    <div>
      <h2 className="text-2xl mb-5">목차</h2>
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
                {item.hasPreview ? <a href={item.url}>{item.title + "[미리보기]"}</a> : <span>{item.title}</span>}
              </td>
              <td className="py-3 px-4 w-24">{item.playTime}</td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
