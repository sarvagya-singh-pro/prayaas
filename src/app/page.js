"use client";
import dynamic from 'next/dynamic'
const Home= dynamic(
  () => import('./components/landing'),
  { ssr: true }
)
const page = () => {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default page;