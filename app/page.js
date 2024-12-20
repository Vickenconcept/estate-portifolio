"use client"
import Image from "next/image";
import CustomCard from '@/components/CustomCard';
import properties from '@/jsonFiles/properties';

export default function Home() {
  return (
    <>
      <section class="w-full">
        <div class="w-full h-[520px] bg-[url('https://images.unsplash.com/photo-1449844908441-8829872d2607?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxob21lfGVufDB8MHx8fDE3MTA0MDE1NDZ8MA&ixlib=rb-4.0.3&q=80&w=1080')] bg-cover bg-no-repeat bg-center flex flex-col justify-center items-center ">
          <div>
            <h1 class="text-white text-center xl:text-5xl lg:text-4xl md:text-3xl sm:text-2xl xs:text-xl font-semibold bg-gray-800 p-2 bg-opacity-40 rounded-sm">Discover Your New Dream</h1>
          </div>
          <div class="w-full mx-auto">
            <form>
              <div class="xl:w-1/2 lg:w-[60%] md:w-[70%] sm:w-[70%] xs:w-[90%] mx-auto flex gap-2 md:mt-6 xs:mt-4 mx-4">
                <input type="text" class="border border-gray-400 w-full p-2 rounded-md text-xl pl-2"
                  placeholder="" />
                <button type="submit" class="px-[10px] p-[10px] bg-orange-500 text-lg text-white rounded-md font-semibold">Search</button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <div className="flex items-start justify-center min-h-screen bg-gray-900 pt-20">
        <div>

          <h3 class="text-4xl text-white flex space-x-2 items-center my-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="orange" class="size-10">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z" />
            </svg>

            <span>Hot Deal</span>
          </h3>
          <div className="w-full grid md:grid-cols-3 gap-5 md:w-[90%]">
            {properties.map((property) => (
              <CustomCard
                key={property.id}
                slug={property.slug}
                image={property.image}
                title={property.name}
                price={`$${property.currentPrice.toLocaleString()}`}
              />
            ))}

          </div>
        </div>
      </div>
    </>
  );
}
