import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Content Marketer",
    content: "CONTENTOR has revolutionized our SEO strategy. The AI-powered tools have saved us countless hours and improved our content quality significantly.",
    avatar: "https://i.pravatar.cc/150?img=1"
  },
  {
    name: "Michael Chen",
    role: "SEO Specialist",
    content: "The keyword research and content cluster features are game-changers. Our organic traffic has increased by 150% since we started using CONTENTOR.",
    avatar: "https://i.pravatar.cc/150?img=2"
  },
  {
    name: "Emily Rodriguez",
    role: "Digital Marketing Manager",
    content: "CONTENTOR's article generator and translator have allowed us to scale our content production across multiple markets. It's an indispensable tool for our team.",
    avatar: "https://i.pravatar.cc/150?img=3"
  }
]

export function Testimonials() {
  return (
    <section className="py-20 bg-bg-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-bg-100">
              <CardHeader>
                <div className="flex items-center space-x-4">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-text-200">{testimonial.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}