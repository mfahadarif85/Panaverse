import "./globals.css";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head />
      <body>
        <h1>Todo App</h1>
        <main>{children}</main>
      </body>
    </html>
  );
}
