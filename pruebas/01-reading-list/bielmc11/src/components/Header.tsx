import { Button } from './ui/button'

export const Header = () => {
  return (
    <div id='header' className="min-w-screen min-h-screen flex bg-gray-100 text-gray-900 justify-center items-center box-border font-serif">
        <div className='header_wrapper container p-0 px-6 2xl:px-0 flex flex-col-reverse lg:flex-row justify-between gap-2 xl:gap-8'>

          <div className="header_info border-6 grow flex flex-col lg:justify-center gap-2 md:gap-6">

            <h1 className="font-bold font-[titles] tracking-tighter sm:text-5xl xl:text-6xl">Discover Your Next Great Read</h1>
            <p className="text-gray-500 md:text-xl max-w-[600px]">Explore our curated collection of books across a wide range of genres and find your perfect read.</p>
            <Button className='bg-green-600 hover:bg-green-700 flex justify-center items-center gap-2'>
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="white"><path d="M480-80 200-360l56-56 184 183v-647h80v647l184-184 56 57L480-80Z"/></svg>
              <div>find out mafic Books</div>
            </Button>

          </div>

          <div className="header_img flex items-center  max-h-[750px] justify-center lg:justify-end overflow-hidden">
            <img className="object-cover rounded-md w-full lg:max-w-[600px] md:max-h-[80%]" src="/src/assets/mint-green-mug-full-of-black-coffee-on-top-of-books.jpg" alt="logo" />
          </div>

        </div>
    </div>
  )
}
