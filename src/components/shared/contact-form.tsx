"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { MessageSquare, Send, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { contactFormSchema, type ContactFormData } from "@/lib/validations"
import { BUSINESS_INFO } from "@/lib/constants"

interface ContactFormProps {
  defaultService?: "lessons" | "rentals" | "partners" | "general"
  title?: string
  description?: string
}

export function ContactForm({ 
  defaultService = "general",
  title = "Get in Touch",
  description = "Send us a message and we&apos;ll get back to you as soon as possible."
}: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      service: defaultService,
      name: "",
      email: "",
      phone: "",
      message: ""
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the data to your API endpoint
      console.log("Form submission:", data)
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      setIsSubmitted(true)
      form.reset()
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleWhatsApp = () => {
    const message = encodeURIComponent(
      `Hi Surf Feeling! I&apos;m interested in your ${form.watch("service")} service. ${form.watch("message") || "Please contact me for more information."}`
    )
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="mb-4 text-green-500">
              <MessageSquare className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Message Sent!</h3>
            <p className="text-muted-foreground mb-4">
              Thanks for contacting Surf Feeling. We&apos;ll get back to you within 24 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Send Another Message
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MessageSquare className="h-5 w-5 text-blue-500" />
          {title}
        </CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Name *</Label>
            <Input
              id="name"
              {...form.register("name")}
              placeholder="Your full name"
            />
            {form.formState.errors.name && (
              <p className="text-sm text-red-500">{form.formState.errors.name.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email *</Label>
            <Input
              id="email"
              type="email"
              {...form.register("email")}
              placeholder="your@email.com"
            />
            {form.formState.errors.email && (
              <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone</Label>
            <Input
              id="phone"
              {...form.register("phone")}
              placeholder="+84 XXX XXX XXX"
            />
            {form.formState.errors.phone && (
              <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="service">Service *</Label>
            <Select 
              value={form.watch("service")}
              onValueChange={(value) => form.setValue("service", value as "lessons" | "rentals" | "partners" | "general")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="lessons">Surf Lessons</SelectItem>
                <SelectItem value="rentals">Board Rentals</SelectItem>
                <SelectItem value="partners">Partner Inquiry</SelectItem>
                <SelectItem value="general">General Question</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.service && (
              <p className="text-sm text-red-500">{form.formState.errors.service.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Message *</Label>
            <Textarea
              id="message"
              {...form.register("message")}
              placeholder="Tell us about what you&apos;re looking for..."
              rows={4}
            />
            {form.formState.errors.message && (
              <p className="text-sm text-red-500">{form.formState.errors.message.message}</p>
            )}
          </div>

          <div className="flex gap-2">
            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="flex-1"
            >
              {isSubmitting ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4 mr-2" />
                  Send Message
                </>
              )}
            </Button>
            <Button 
              type="button"
              variant="outline"
              onClick={handleWhatsApp}
              className="flex-shrink-0"
            >
              <Phone className="h-4 w-4" />
            </Button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t text-center text-sm text-muted-foreground">
          <p>Or contact us directly:</p>
          <p className="font-medium">{BUSINESS_INFO.phone}</p>
          <p className="text-blue-600">{BUSINESS_INFO.email}</p>
        </div>
      </CardContent>
    </Card>
  )
}