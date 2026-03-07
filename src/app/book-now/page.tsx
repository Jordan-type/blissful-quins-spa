import { Suspense } from "react";
import BookNowPage from "./BookNowPage";

export default function BookPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center">Loading...</div>}>
      <BookNowPage />
    </Suspense>
  );
}