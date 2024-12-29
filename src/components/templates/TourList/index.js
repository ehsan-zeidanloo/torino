import Link from 'next/link';
import React from 'react'
import CardTour from '../../partials/cardTour';

function TourList({toursData}) {
    // console.log(toursData);
    if(!toursData.length) return <p>نتیجه ای یافت نشد!</p>
  return (
    <main className="w-[1440px] mx-auto p-3.5 flex flex-wrap">
      {toursData?.map((tour) => (
        <CardTour data={tour} key={tour.id} />
      ))}
    </main>
  )
}

export default TourList