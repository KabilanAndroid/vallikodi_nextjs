import CreateProfileCard from "@/src/components/CreateProfileCard";
import { FloatingHeader } from "@/src/components/FloatingHeader";
import { Header } from "@/src/components/Header";


export default function Home() {
  return (
    <div className="w-full h-full bg-brand-secondary">
      <Header/>
      <FloatingHeader/>
      <CreateProfileCard/>
    </div>
  )
}
