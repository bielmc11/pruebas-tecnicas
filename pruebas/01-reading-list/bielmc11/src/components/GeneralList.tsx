import { GeneralBooks } from './GeneralBooks'

export const GeneralList = ({ inputRef }: any) => {
  return (
    <div className='list bg-gray-200 pt-24' id='listOfBooks' ref={inputRef}>

      <div className='list_wrapper container flex flex-col'>

        <div className='list_header flex flex-col gap-4 justify-center max-w-[570px]'>

          <div className=" rounded-lg self-start bg-green-500  px-3 py-2 text-sm text-gray-50">
            <p>FEATURED BOOKS</p>
          </div>

          <h2 className='font-bold font-[titles] tracking-tighter text-4xl sm:text-4xl xl:text-5xl'>Explore Our Curated Selection</h2>

          <div className='flex justify-between'>

            <p className='text-gray-500 md:text-xl'>Discover our hand-picked collection of the latest and greatest books across a variety of genres.</p>
            <div className="inline-block rounded-lg self-start bg-green-500 px-3 py-1 text-sm text-gray-50 tracking-wider">
                    Filters
            </div>
          </div>

        </div>
        <GeneralBooks />
      </div>
    </div>
  )
}
