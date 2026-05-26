import { Button, Button2 } from "@/components/button";
import Card from "@/components/card";

export default function Home() {
  return (
    <div
      style={{
        backgroundImage:
          "radial-gradient(circle at 0.5px 0.5px, var(--color-neutral-800) 0.5px, transparent 0)",
        backgroundSize: "8px 8px",
        backgroundRepeat: "repeat"
      }}
      className="flex flex-col gap-14 perspective-[1000px] preserve-3d flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <Button /> 
      <Button2 /> 
      <Card /> 
    </div>
  );
}
