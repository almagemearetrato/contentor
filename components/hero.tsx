import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="py-20 text-center">
      <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
        Boost Your SEO with <span className="text-primary">CONTENTOR</span>
      </h1>
      <p className="mb-8 text-xl text-muted-foreground">
        Unlock the power of AI-driven SEO tools and content creation
      </p>
      <Button size="lg" className="text-lg">
        Get Started for Free
      </Button>
    </section>
  )
}