export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <div style = {{border: '1px solid #000'}}>
          {children}
        </div>
      </body>
    </html>
  );
}
