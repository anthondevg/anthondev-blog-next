export const metadata = {
  title: "Post",
  description: "a simple blog to share my toughts made with Nextjs...",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="px-24 flex justify-center">{children}</div>;
}
