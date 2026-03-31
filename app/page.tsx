import CountView from "@/src/components/countView";
import CreateProfileCard from "@/src/components/CreateProfileCard";
import { FloatingHeader } from "@/src/components/FloatingHeader";
import { Header } from "@/src/components/Header";
import LookingForComp from "@/src/components/lookingForComp";


export default function Home() {
  return (
    <div >
      <div className="w-full h-full bg-brand-secondary">
        <Header />
        <FloatingHeader />
        <CreateProfileCard />
      </div>

      <CountView />
      <LookingForComp />
    </div>

  )
}
