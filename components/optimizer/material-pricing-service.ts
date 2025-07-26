export interface MaterialPrice {
  id: string
  name: string
  basePrice: number
  currency: string
  unit: string
  lastUpdated: Date
  supplier?: string
}

export interface PricingUpdate {
  materialId: string
  newPrice: number
  source: "user" | "api" | "manual"
}

class MaterialPricingService {
  private prices: Map<string, MaterialPrice> = new Map()
  private userOverrides: Map<string, number> = new Map()

  constructor() {
    this.initializeDefaultPrices()
  }

  private initializeDefaultPrices() {
    const defaultPrices: MaterialPrice[] = [
      {
        id: "birch-plywood-18mm",
        name: "18mm Birch Plywood",
        basePrice: 89.99,
        currency: "GBP",
        unit: "per sheet (8x4ft)",
        lastUpdated: new Date(),
        supplier: "Travis Perkins",
      },
      {
        id: "mdf-18mm",
        name: "18mm MDF",
        basePrice: 45.99,
        currency: "GBP",
        unit: "per sheet (8x4ft)",
        lastUpdated: new Date(),
        supplier: "Wickes",
      },
      {
        id: "pine-18mm",
        name: "18mm Pine Board",
        basePrice: 35.99,
        currency: "GBP",
        unit: "per sheet (8x4ft)",
        lastUpdated: new Date(),
        supplier: "B&Q",
      },
      {
        id: "oak-18mm",
        name: "18mm Oak Veneer",
        basePrice: 125.99,
        currency: "GBP",
        unit: "per sheet (8x4ft)",
        lastUpdated: new Date(),
        supplier: "Jewson",
      },
      {
        id: "mdf-6mm",
        name: "6mm MDF",
        basePrice: 25.5,
        currency: "GBP",
        unit: "per sheet (8x4ft)",
        lastUpdated: new Date(),
        supplier: "Wickes",
      },
      {
        id: "plywood-12mm",
        name: "12mm Plywood",
        basePrice: 55.99,
        currency: "GBP",
        unit: "per sheet (8x4ft)",
        lastUpdated: new Date(),
        supplier: "Travis Perkins",
      },
    ]

    defaultPrices.forEach((price) => {
      this.prices.set(price.id, price)
    })
  }

  getPrice(materialId: string): MaterialPrice | null {
    const basePrice = this.prices.get(materialId)
    if (!basePrice) return null

    const userOverride = this.userOverrides.get(materialId)
    if (userOverride !== undefined) {
      return {
        ...basePrice,
        basePrice: userOverride,
        lastUpdated: new Date(),
      }
    }

    return basePrice
  }

  getAllPrices(): MaterialPrice[] {
    return Array.from(this.prices.values()).map((price) => {
      const userOverride = this.userOverrides.get(price.id)
      if (userOverride !== undefined) {
        return {
          ...price,
          basePrice: userOverride,
          lastUpdated: new Date(),
        }
      }
      return price
    })
  }

  updatePrice(update: PricingUpdate): void {
    if (update.source === "user") {
      this.userOverrides.set(update.materialId, update.newPrice)
    } else {
      const existingPrice = this.prices.get(update.materialId)
      if (existingPrice) {
        this.prices.set(update.materialId, {
          ...existingPrice,
          basePrice: update.newPrice,
          lastUpdated: new Date(),
        })
      }
    }
  }

  resetUserOverrides(): void {
    this.userOverrides.clear()
  }

  // Simulate API price updates (in a real app, this would fetch from an external API)
  async fetchLatestPrices(): Promise<void> {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Simulate price fluctuations (±5%)
    this.prices.forEach((price, id) => {
      const fluctuation = (Math.random() - 0.5) * 0.1 // ±5%
      const newPrice = price.basePrice * (1 + fluctuation)
      this.prices.set(id, {
        ...price,
        basePrice: Math.round(newPrice * 100) / 100,
        lastUpdated: new Date(),
      })
    })
  }
}

export const materialPricingService = new MaterialPricingService()
