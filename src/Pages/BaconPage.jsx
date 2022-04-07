import { lazy, Suspense } from "react";
const LazyBaconPage = lazy(() => import('./BaconModule'));

export default function BaconPage() {
  return <div>
    <h1>Bacon page</h1>
    <Suspense fallback={<div>Bacon module is loading...</div>}>
      <LazyBaconPage />
    </Suspense>
  </div>
}