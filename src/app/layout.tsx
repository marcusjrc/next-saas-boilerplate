import './globals.css'
import type { Metadata } from 'next'
import { getServerSession } from "next-auth/next"
import { ClientProvider } from './context/client-provider'
import { handler } from './api/auth/[...nextauth]/route'



export const metadata: Metadata = {
  title: 'saas App',
  description: '',
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getServerSession(handler);
  return (
    <html lang="en">
        <body>
          <ClientProvider session={session}>
            {children}
          </ClientProvider>
        </body>
    </html>
  )
}
