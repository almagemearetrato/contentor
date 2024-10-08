"use client"

import { useState } from 'react'
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PricingCard } from "@/components/pricing-card"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false)
  const monthlyPrice = 97
  const annualPrice = monthlyPrice * 12 * 0.8 // 20% discount

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="container mx-auto px-4 py-20">
        <h1 className="text-4xl font-bold text-center mb-8">Simple, Transparent Pricing</h1>
        <p className="text-xl text-center text-muted-foreground mb-12">
          Choose the plan that's right for you and start optimizing your content today.
        </p>
        
        <div className="flex items-center justify-center space-x-4 mb-12">
          <Label htmlFor="annual-switch" className={isAnnual ? "text-muted-foreground" : ""}>Monthly</Label>
          <Switch
            id="annual-switch"
            checked={isAnnual}
            onCheckedChange={setIsAnnual}
          />
          <Label htmlFor="annual-switch" className={!isAnnual ? "text-muted-foreground" : ""}>
            Annual <span className="text-sm text-primary">(Save 20%)</span>
          </Label>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <PricingCard
            title="Standard Plan"
            price={isAnnual ? (annualPrice / 12).toFixed(2) : monthlyPrice}
            period={isAnnual ? "/mo (billed annually)" : "/mo"}
            features={[
              "Keyword Research",
              "Content Cluster",
              "Blog Content Organizer",
              "Outline Generator",
              "Article Generator (up to 10/mo)",
              "Basic Support"
            ]}
            ctaText="Get Started"
          />
          <PricingCard
            title="Pro Plan"
            price={isAnnual ? ((annualPrice * 2) / 12).toFixed(2) : (monthlyPrice * 2)}
            period={isAnnual ? "/mo (billed annually)" : "/mo"}
            features={[
              "Everything in Standard",
              "Advanced SERP Analysis",
              "Entity Recognition",
              "Schema Suggestions",
              "Unlimited Article Generation",
              "Article Translator",
              "Priority Support"
            ]}
            ctaText="Go Pro"
            highlighted={true}
          />
        </div>
      </main>
      <Footer />
    </div>
  )
}