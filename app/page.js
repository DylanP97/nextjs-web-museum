import ZoomableTimelineChart from "./components/ZoomableTimelineChart";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <h1>Welcome to our Museum!</h1>
      <ZoomableTimelineChart />
    </main>
  );
}
