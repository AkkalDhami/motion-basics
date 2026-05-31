import Navbar from "@/components/navbar";
import Tabs from "@/components/tabs";

export default function page() {
  return (
    <div className="flex gap-12 flex-col py-20 items-center justify-center bg-neutral-950">
      <Navbar />
      <Tabs />
    </div>
  );
}
