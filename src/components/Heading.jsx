
export default function Heading({title, subtile}) {
  return (
    <div className="flex flex-col justify-center items-center text-center space-y-4">
        <h1 className="text-3xl font-bold md:text-5xl">{title}</h1>
        <p>{subtile}</p>
    </div>
  )
}
