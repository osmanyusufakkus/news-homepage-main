import MostViewedContainer from "@/components/MostViewedContainer";
import MostViewedNews from "@/components/MostViewedNews";
import NewsContainer from "@/components/NewsContainer";
import WebHeader from "@/components/WebHeader";


export default function Home() {
  return (
    <main className="mx-auto p-4 max-w-[480px] mb:max-w-[1440px] ">
      
      <WebHeader/>
      <div className='grid grid-cols-12 gap-4 my-4'>
        <div className='col-span-12 mb:col-span-8 h-[420px] bg-slate-500'></div>
        <NewsContainer/>
      </div>
        <MostViewedContainer/>
    </main>
  )
}
