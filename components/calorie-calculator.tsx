"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calculator, UtensilsCrossed, Scale, Ruler, Activity, UserCheck, Clock } from "lucide-react"

export default function CalorieCalculator() {
  const [gender, setGender] = useState<"male" | "female" | "">("")
  const [age, setAge] = useState<number | "">("")
  const [heightFt, setHeightFt] = useState<number | "">("")
  const [heightIn, setHeightIn] = useState<number | "">("")
  const [weight, setWeight] = useState<number | "">("")
  const [weightUnit, setWeightUnit] = useState<"kg" | "stone">("kg")
  const [activityLevel, setActivityLevel] = useState<string>("")

  const [calories, setCalories] = useState<number | null>(null)
  const [macros, setMacros] = useState<{ protein: number; carbs: number; fat: number } | null>(null)
  const [mealIdeas, setMealIdeas] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  const calculateBMR = (gender: "male" | "female", age: number, heightCm: number, weightKg: number): number => {
    if (gender === "male") {
      return 10 * weightKg + 6.25 * heightCm - 5 * age + 5
    } else {
      return 10 * weightKg + 6.25 * heightCm - 5 * age - 161
    }
  }

  const calculateTDEE = (bmr: number, activity: string): number => {
    const activityFactors: { [key: string]: number } = {
      sedentary: 1.2,
      light: 1.375,
      moderate: 1.55,
      active: 1.725,
      veryActive: 1.9,
    }
    return bmr * (activityFactors[activity] || 1.2)
  }

  const generateMealIdeas = (calories: number): string[] => {
    const ideas = []
    if (calories < 1500) {
      ideas.push("Breakfast: Oatmeal with berries and a scoop of protein powder.")
      ideas.push("Lunch: Large salad with grilled chicken or chickpeas.")
      ideas.push("Dinner: Baked salmon with steamed vegetables.")
      ideas.push("Snack: Greek yogurt or a handful of almonds.")
    } else if (calories >= 1500 && calories < 2000) {
      ideas.push("Breakfast: Scrambled eggs with whole-wheat toast and avocado.")
      ideas.push("Lunch: Turkey and veggie wrap with a side of fruit.")
      ideas.push("Dinner: Lean ground beef stir-fry with brown rice and mixed veggies.")
      ideas.push("Snack: Cottage cheese with sliced peaches or a protein bar.")
    } else {
      ideas.push("Breakfast: Protein pancakes with maple syrup and a side of bacon.")
      ideas.push("Lunch: Quinoa bowl with roasted sweet potatoes, black beans, and chicken/tofu.")
      ideas.push("Dinner: Steak with a large baked potato and green beans.")
      ideas.push("Snack: Smoothie with protein, banana, spinach, and nut butter.")
    }
    ideas.push("Remember to drink plenty of water throughout the day!")
    return ideas
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setCalories(null)
    setMacros(null)
    setMealIdeas([])

    if (!gender || !age || !heightFt || !heightIn || !weight || !activityLevel) {
      setError("Please fill in all fields.")
      return
    }

    const parsedAge = Number(age)
    const parsedHeightFt = Number(heightFt)
    const parsedHeightIn = Number(heightIn)
    const parsedWeight = Number(weight)

    if (
      isNaN(parsedAge) ||
      parsedAge <= 0 ||
      isNaN(parsedHeightFt) ||
      parsedHeightFt < 0 ||
      isNaN(parsedHeightIn) ||
      parsedHeightIn < 0 ||
      parsedHeightIn >= 12 ||
      isNaN(parsedWeight) ||
      parsedWeight <= 0
    ) {
      setError("Please enter valid positive numbers for age, height, and weight.")
      return
    }

    let weightKg = parsedWeight
    if (weightUnit === "stone") {
      weightKg = parsedWeight * 6.35029
    }

    const heightCm = parsedHeightFt * 30.48 + parsedHeightIn * 2.54

    const bmr = calculateBMR(gender as "male" | "female", parsedAge, heightCm, weightKg)
    const tdee = calculateTDEE(bmr, activityLevel)

    setCalories(Math.round(tdee))

    // Macro split: 40% Protein, 30% Carbs, 30% Fat
    const proteinGrams = Math.round((tdee * 0.4) / 4)
    const carbsGrams = Math.round((tdee * 0.3) / 4)
    const fatGrams = Math.round((tdee * 0.3) / 9)
    setMacros({ protein: proteinGrams, carbs: carbsGrams, fat: fatGrams })

    setMealIdeas(generateMealIdeas(tdee))
  }

  return (
    <Card className="w-full max-w-3xl mx-auto shadow-lg border-brand-pink/20">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold text-brand-dark flex items-center justify-center gap-2">
          <Calculator className="w-8 h-8 text-brand-pink" />
          Your Personalized Calorie & Macro Guide
        </CardTitle>
        <p className="text-brand-gray mt-2">
          Calculate your daily calorie needs and get a personalized macro breakdown with meal ideas!
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="gender" className="flex items-center gap-2 text-brand-dark">
              <UserCheck className="w-4 h-4" /> Gender
            </Label>
            <Select onValueChange={(value: "male" | "female") => setGender(value)} value={gender}>
              <SelectTrigger id="gender">
                <SelectValue placeholder="Select Gender" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="male">Male</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="age" className="flex items-center gap-2 text-brand-dark">
              <Clock className="w-4 h-4" /> Age (Years)
            </Label>
            <Input
              id="age"
              type="number"
              placeholder="e.g., 30"
              value={age}
              onChange={(e) => setAge(Number(e.target.value))}
              min="1"
            />
          </div>

          <div className="space-y-2 col-span-full">
            <Label className="flex items-center gap-2 text-brand-dark">
              <Ruler className="w-4 h-4" /> Height
            </Label>
            <div className="grid grid-cols-2 gap-4">
              <Input
                type="number"
                placeholder="Feet (e.g., 5)"
                value={heightFt}
                onChange={(e) => setHeightFt(Number(e.target.value))}
                min="0"
              />
              <Input
                type="number"
                placeholder="Inches (e.g., 6)"
                value={heightIn}
                onChange={(e) => setHeightIn(Number(e.target.value))}
                min="0"
                max="11"
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="weight" className="flex items-center gap-2 text-brand-dark">
              <Scale className="w-4 h-4" /> Weight
            </Label>
            <div className="flex gap-2">
              <Input
                id="weight"
                type="number"
                placeholder="e.g., 60"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                min="1"
              />
              <Select onValueChange={(value: "kg" | "stone") => setWeightUnit(value)} value={weightUnit}>
                <SelectTrigger className="w-[100px]">
                  <SelectValue placeholder="Unit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="kg">kg</SelectItem>
                  <SelectItem value="stone">stone</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="activity" className="flex items-center gap-2 text-brand-dark">
              <Activity className="w-4 h-4" /> Activity Level
            </Label>
            <Select onValueChange={setActivityLevel} value={activityLevel}>
              <SelectTrigger id="activity">
                <SelectValue placeholder="Select Activity Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="sedentary">Sedentary (little or no exercise)</SelectItem>
                <SelectItem value="light">Lightly Active (1-3 days/week)</SelectItem>
                <SelectItem value="moderate">Moderately Active (3-5 days/week)</SelectItem>
                <SelectItem value="active">Very Active (6-7 days/week)</SelectItem>
                <SelectItem value="veryActive">Extra Active (daily intense exercise)</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="submit"
            className="col-span-full bg-gradient-brand text-white font-bold py-3 px-6 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300"
          >
            Calculate My Needs
          </Button>
        </form>

        {error && <div className="mt-6 text-center text-red-500 font-medium">{error}</div>}

        {calories !== null && macros !== null && (
          <div className="mt-8 p-6 bg-brand-bg-pink rounded-lg border border-brand-pink/20 text-center">
            <h3 className="text-2xl font-bold text-brand-dark mb-4">Your Estimated Daily Needs:</h3>
            <div className="flex flex-col sm:flex-row justify-around items-center gap-4 mb-6">
              <div className="text-center">
                <p className="text-5xl font-extrabold text-brand-pink">{calories}</p>
                <p className="text-brand-dark text-lg">Calories</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-dark">{macros.protein}g</p>
                <p className="text-brand-gray">Protein</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-dark">{macros.carbs}g</p>
                <p className="text-brand-gray">Carbs</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-brand-dark">{macros.fat}g</p>
                <p className="text-brand-gray">Fat</p>
              </div>
            </div>

            <h4 className="text-xl font-bold text-brand-dark mb-3 flex items-center justify-center gap-2">
              <UtensilsCrossed className="w-6 h-6 text-brand-pink" />
              Sample Meal Ideas:
            </h4>
            <ul className="list-disc list-inside text-left text-brand-gray space-y-2 max-w-md mx-auto">
              {mealIdeas.map((idea, index) => (
                <li key={index}>{idea}</li>
              ))}
            </ul>
            <p className="text-sm text-brand-gray mt-4">
              This is an estimate. For a truly personalized plan, consider our coaching program!
            </p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
