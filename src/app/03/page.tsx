import { FrameButton } from "@/components/bracket-button";

export default function page() {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center gap-7">
      <FrameButton variant="default">Get Started</FrameButton>
      <FrameButton variant="secondary">Get Started</FrameButton>
      <FrameButton
        variant="outline"
        className="text-violet-500"
        as="link"
        href={"/02"}
      >
        Get Started
      </FrameButton>
      
    </div>
  );
}
