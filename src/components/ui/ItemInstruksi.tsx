import Image from "next/image"

interface InstructionItemProps {
  text: string
}

export default function InstructionItem({ text }: InstructionItemProps) {
  return (
    <div className="flex gap-3 items-center text-xs lg:text-base">
      <div className="flex items-center justify-center">
        <Image src="/assets/next.svg" width={20} height={20} alt="next" />
      </div>
      <p className="w-[90%] text-gray-800">{text}</p>
    </div>
  )
}
