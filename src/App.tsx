import { lazy, Suspense } from 'react'
import HeroImage from "@components/HeroImage"
import Footer from "@components/Footer"
import Loader from '@components/Loader'
const WhoAmI = lazy(() => import("@components/WhoAmI"))
function App() {
  return (
    <Suspense fallback={<Loader />}>
      <HeroImage />
      <WhoAmI />
      <Footer />
    </Suspense>
  )
}

export default App
