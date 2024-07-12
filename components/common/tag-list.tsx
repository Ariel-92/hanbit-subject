import Link from "next/link"

interface TagListProps {
  tags: string[]
}

export default function TagList({ tags }: TagListProps) {
  return (
    <div className="h-8 overflow-hidden flex items-center">
      {tags.map(tag => (
        <Link href="#" className="bg-[#4b8268] text-sm whitespace-nowrap overflow-hidden rounded-full w-fit px-3 py-1 mr-1" key={tag}>{tag}</Link>
      ))}
    </div>
  )
}