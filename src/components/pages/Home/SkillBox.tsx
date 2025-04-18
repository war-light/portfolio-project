interface SkillBoxProps {
  iconName: string
}

export default function SkillBox({ iconName }: SkillBoxProps) {
  const iconSource = "https://skillicons.dev/icons?i="
  // js,css,tailwind,postgres,react,python,ts,nodejs,wordpress,html,expressjs,bash,flask,vim,vscode,git,github,zustand
  return (
    <div className="w-20 h-fit bg-neutral-800 rounded-lg hover:bg-neutral-700 transition duration-300 ease-in-out">
      <div className="border h-full justify-center flex border-yellow-400 p-2 rounded-t-lg">
        <img src={`${iconSource}${iconName}`} alt="" />
      </div>
      <div className="border justify-center flex border-yellow-400 border-t-0 p-2 rounded-b-lg">
        <p className="text-neutral-400">{iconName}</p>
      </div>
    </div>
  )
}
