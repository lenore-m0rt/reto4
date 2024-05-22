// These styles apply to every route in the application
import './globals.css'
import Header from '../app/dashboard/header.jsx';
 
export default function RootLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <html lang="es" data-theme="retro">
      <head>
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <link rel='icon' href='/favicon.ico' />
      </head>
      <body>
          {/* Layout UI */}
          <main className="bg-base-200 " >
          <Header />
          {children} 
          </main>
    </body>
    </html>
    )
  }
