export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <a href="/">Back to Start</a>
        {children}
      </body>
    </html>
  );
}
