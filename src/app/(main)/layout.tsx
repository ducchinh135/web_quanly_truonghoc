import React, { Suspense } from "react";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Suspense>
      <div>{children}</div>
    </Suspense>
  );
}
