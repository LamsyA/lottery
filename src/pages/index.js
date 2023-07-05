import Hero from "@/components/Hero";
import Jackpots from "@/components/Jackpots";
import Navbar from "@/components/Navbar";


const data = [
  {
    id: 1,
    prize: 11.90,
    title: "First attempt",
    description: "this is the first attempt description",
    image: 'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png',
    ticketPize: 0.05
  },
  {
    id: 1,
    prize: 11.90,
    title: "First attempt",
    description: "this is the first attempt description",
    image: 'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png',
    ticketPize: 0.05
  },
  {
    id: 1,
    prize: 11.90,
    title: "First attempt",
    description: "this is the first attempt description",
    image: 'https://www.freepnglogos.com/uploads/youtube-logo-hd-8.png',
    ticketPize: 0.05
  }
]
export default function Home() {
  const jackpots = data;
  return (
    <main
      className="min-h-screen"
    >
    <div>
     <Navbar/>
     <Hero />
     <Jackpots jackpots={jackpots}/>
     
     
    </div>
    </main>
  )
}
