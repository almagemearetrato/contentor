"use client"

import { useState } from 'react'
import Link from 'next/link'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Lightbulb, Network, FileText, FileEdit, Languages, Settings } from 'lucide-react'

export default function Dashboard() {
  const [activeFeature, setActiveFeature] = useState('Research')

  const menuSections = [
    {
      title: "Research",
      items: [
        { title: "Research", icon: Search, description: "Conduct comprehensive SEO research" },
        { title: "Keyword Ideas", icon: Lightbulb, description: "Generate AI-powered keyword suggestions" },
        { title: "Content Cluster", icon: Network, description: "Organize your content strategy" },
      ]
    },
    {
      title: "Content Creator",
      items: [
        { title: "Blog Content Organizer", icon: FileText, description: "Plan and structure your blog posts" },
        { title: "Outline Generator", icon: FileEdit, description: "Create content outlines with ease" },
        { title: "Article Generator", icon: FileEdit, description: "AI-assisted article creation" },
        { title: "Article Translator", icon: Languages, description: "Translate content to multiple languages" },
      ]
    },
    {
      title: "Configuration",
      items: [
        { title: "Settings", icon: Settings, description: "Customize your CONTENTOR experience" },
      ]
    }
  ]

  return (
    <div className="min-h-screen bg-bg-100">
      <Navbar />
      <div className="container mx-auto px-4 py-8 flex">
        {/* Left sidebar */}
        <aside className="w-64 bg-bg-200 p-4 rounded-lg mr-8">
          <nav>
            {menuSections.map((section, index) => (
              <div key={index} className="mb-6">
                <h3 className="text-lg font-semibold mb-2 text-text-100">{section.title}</h3>
                <ul className="space-y-2">
                  {section.items.map((item) => (
                    <li key={item.title}>
                      <Button
                        variant="ghost"
                        className={`w-full justify-start ${activeFeature === item.title ? 'bg-accent-100 text-bg-100' : 'text-text-200 hover:bg-accent-100 hover:text-bg-100'}`}
                        onClick={() => setActiveFeature(item.title)}
                      >
                        <item.icon className="mr-2 h-4 w-4" />
                        {item.title}
                      </Button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </aside>

        {/* Main content area */}
        <main className="flex-1">
          <h1 className="text-4xl font-bold mb-8 text-text-100">Welcome to Your CONTENTOR Dashboard</h1>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="bg-bg-200 border-primary-200">
              <CardHeader>
                <CardTitle className="text-text-100">Quick Stats</CardTitle>
                <CardDescription className="text-text-200">Overview of your content performance</CardDescription>
              </CardHeader>
              <CardContent className="text-text-200">
                <p>Total Articles: 15</p>
                <p>Keywords Tracked: 100</p>
                <p>Average Position: 12.5</p>
              </CardContent>
            </Card>
            <Card className="bg-bg-200 border-primary-200">
              <CardHeader>
                <CardTitle className="text-text-100">Recent Activity</CardTitle>
                <CardDescription className="text-text-200">Your latest actions and updates</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside text-text-200">
                  <li>Generated new article: "SEO Best Practices 2023"</li>
                  <li>Updated content cluster: "Digital Marketing"</li>
                  <li>Added 10 new keywords to track</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-bg-200 border-primary-200">
            <CardHeader>
              <CardTitle className="text-text-100">{activeFeature}</CardTitle>
              <CardDescription className="text-text-200">
                {menuSections.flatMap(section => section.items).find(item => item.title === activeFeature)?.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-text-200">Content for {activeFeature} will be displayed here.</p>
            </CardContent>
          </Card>
        </main>
      </div>
      <Footer />
    </div>
  )
}