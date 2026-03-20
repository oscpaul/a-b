export default function Container({children}:{children:React.ReactNode}){

  return(
    <div className="w-full border-2 border-blue-500 p-4">
      {children}
    </div>
  )
}