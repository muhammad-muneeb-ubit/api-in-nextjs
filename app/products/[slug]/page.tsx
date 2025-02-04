import Card from "@/app/component/Card";

interface IParams {
  params: {
    slug: string;
  };
}
interface Iproduct {
  filteredData: [
    {
      category: string;
      description: string;
      id: number;
      image: string;
      price: number;
      rating: { rate: number; count: number };
      slug: string;
      title: string;
    }
  ];
}
const page = async ({ params }: IParams) => {
  let param = await params;
  const res = await fetch(`http://localhost:3000/api/marketdata/${param.slug}`);
  const data: Iproduct = await res.json();
  let productData = data.filteredData;
  return (
    <div className="bg-red-500 pt-1 pb-10">
      {productData.map((item) => {
        return (
            <div key={item.id}>
              <Card name={item.title} descp={item.description} price={item.price} imgSrc={item.image} alt={item.title} slug={item.slug}/>
            </div>
        );
      })}
    </div>
  );
};
export default page;
