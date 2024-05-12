"use client";
import dynamic from 'next/dynamic'
const Home= dynamic(
  () => import('./components/landing'),
  { ssr: false }
)
const page = () => {
  return (
    <div>
      <Home/>
    </div>
  );
}

export default page;