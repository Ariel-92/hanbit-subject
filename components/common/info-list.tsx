interface InfoListProps {
  info: string[]
}

export default function InfoList({ info }: InfoListProps) {
  return (
    <ul>
      {info.map((info) => (
        <li key={info}>
          <span className="flex items-center before:mr-1 before:bg-[url('/icons/icon_check_green.svg')] before:box-border before:block before:bg-cover before:w-4 before:h-4">
            {info}
          </span>
        </li>
      ))}
    </ul>
  )
}
