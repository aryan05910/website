import { AboutCard } from "@/components/aboutcard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-800 text-black bg-[url('/background.avif')] bg-cover bg-center">
      <AboutCard />
    </main>
  );
}
