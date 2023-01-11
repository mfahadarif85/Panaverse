import "./globals.css";
import Navbar from "./navbar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <title>Next 13 Beta</title>
      </head>
      <body>
        <Navbar />
        <div className='p-3 m-0'>{children}</div>
      </body>
    </html>
  );
}
