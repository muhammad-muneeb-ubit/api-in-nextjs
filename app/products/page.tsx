import Card from "../component/Card";
interface Iproduct{
  id: string,
    title: string,
    price: number,
    description: string,
    category: string,
    slug: string,
    image: string,
    rating: { rate: number, count:number }
}
const page = async () => {
const res = await fetch('http://localhost:3000/api/marketdata')
const data:Iproduct[] = await res.json()
  return (
    <div className="bg-red-500 pt-1 pb-10">
        {data.map((item) => {
          return (
            <div key={item.id}>
            <Card name={item.title} descp={item.description} price={item.price} imgSrc={item.image} alt={item.title} slug={item.slug} /> 
            </div>
          )
        })}  
    </div>
  )
}

export default page
