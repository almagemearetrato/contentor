import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Lightbulb, Network, FileText, FileEdit, Languages, Settings } from 'lucide-react'

const features = [
  {
    title: "Research",
    description: "Comprehensive SEO research tools",
    icon: Search,
  },
  {
    title: "Keyword Ideas",
    description: "AI-powered keyword suggestions",
    icon: Lightbulb,
  },
  {
    title: "Content Cluster",
    description: "Organize your content strategy",
    icon: Network,
  },
  {
    title: "Blog Content Organizer",
    description: "Plan and structure your blog posts",
    icon: FileText,
  },
  {
    title: "Outline Generator",
    description: "Create content outlines with ease",
    icon: FileEdit,
  },
  {
    title: "Article Generator",
    description: "AI-assisted article creation",
    icon: FileEdit,
  },
  {
    title: "Article Translator",
    description: "Translate content to multiple languages",
    icon: Languages,
  },
  {
    title: "Settings",
    description: "Customize your CONTENTOR experience",
    icon: Settings,
  },
]

export function Features() {
  return (
    <section className="py-20">
      <h2 className="mb-12 text-center text-3xl font-bold">Our Features</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => (
          <Card key={index}>
            <CardHeader>
              <feature.icon className="h-10 w-10 text-primary" />
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </section>
  )
}