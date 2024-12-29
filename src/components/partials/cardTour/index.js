import Image from "next/image";

function CardTour({ data }) {
  console.log(data);
  return (
    <div className="w-[278px] h-[277px] rounded-lg shdow-md p-4">
      <Image src={data.image} width={278} height={150} alt={`تصویر ${data.title}`} />
      <h1>{data.title}</h1>
      <p>تور 3 روزه ، هتل،پرواز و...</p>
    <div className="flex justify-between">
        <button>رزرو</button>
        <h1>{data.price}</h1>
    </div>
    </div>
  );
}

export default CardTour;
