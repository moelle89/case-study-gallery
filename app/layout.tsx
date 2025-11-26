export const metadata = { title: "Case Studies" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'Arial, sans-serif', padding: '2rem', background: '#f8f8f8' }}>
        {children}
      </body>
    </html>
  );
}
