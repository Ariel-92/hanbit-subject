import Link from "next/link"

interface TagListProps {
  tags: string[]
  className?: string
}

export default function TagList({ tags, className }: TagListProps) {
  return (
    <div className={"h-8 overflow-hidden flex items-center " + className}>
      {tags.map((tag) => (
        <Link
          href="#"
          className="bg-[#4b8268] text-sm whitespace-nowrap overflow-hidden rounded-full w-fit px-3 py-1 mr-1 text-white"
          key={tag}
        >
          {tag}
        </Link>
      ))}
    </div>
  )
}