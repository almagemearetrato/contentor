"use client"

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/mode-toggle"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Globe } from 'lucide-react'

const languages = [
  { code: 'pt-BR', name: 'Português' },
  { code: 'en', name: 'English' },
]

export function Navbar() {
  const pathname = usePathname()
  const [currentLang, setCurrentLang] = useState('pt-BR')

  return (
    <nav className="border-b">
      <div className="container mx-auto flex items-center justify-between p-4">
        <Link href="/" className="text-2xl font-bold text-primary">
          CONTENTOR
        </Link>
        <div className="flex items-center space-x-4">
          <Button variant="ghost" asChild>
            <Link href="/" className={pathname === '/' ? 'text-primary' : ''}>Home</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/pricing" className={pathname === '/pricing' ? 'text-primary' : ''}>Pricing</Link>
          </Button>
          <Button variant="ghost" asChild>
            <Link href="/blog" className={pathname === '/blog' ? 'text-primary' : ''}>Blog</Link>
          </Button>
          <Button variant="default" asChild>
            <Link href="/dashboard" className={pathname === '/dashboard' ? 'bg-primary-200' : ''}>Dashboard</Link>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <Globe className="h-[1.2rem] w-[1.2rem]" />
                <span className="sr-only">Toggle language</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              {languages.map((lang) => (
                <DropdownMenuItem 
                  key={lang.code}
                  onClick={() => setCurrentLang(lang.code)}
                  className={currentLang === lang.code ? 'bg-accent text-accent-foreground' : ''}
                >
                  {lang.name}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
          <ModeToggle />
        </div>
      </div>
    </nav>
  )
}