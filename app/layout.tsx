import { auth } from "@clerk/nextjs/server";

export const metadata = {
  title: "Clerk integration test app",
  description: "Clerk integration test app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  auth().protect();
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
