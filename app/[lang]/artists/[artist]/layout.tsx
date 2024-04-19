export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <a href="/">Back to Start</a>
      <body>{children}</body>
    </html>
  );
}
