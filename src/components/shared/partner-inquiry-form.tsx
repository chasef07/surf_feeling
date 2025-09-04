"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Building, Send, Phone } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { partnerInquirySchema, type PartnerInquiryData } from "@/lib/validations"
import { BUSINESS_INFO } from "@/lib/constants"

export function PartnerInquiryForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const form = useForm<PartnerInquiryData>({
    resolver: zodResolver(partnerInquirySchema),
    defaultValues: {
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      website: "",
      partnershipType: "accommodation",
      description: "",
      proposedBenefits: "",
      timeline: ""
    }
  })

  const onSubmit = async (data: PartnerInquiryData) => {
    setIsSubmitting(true)
    
    try {
      // Here you would typically send the data to your API endpoint
      console.log("Partner inquiry:", data)
      
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
      `Hi Surf Feeling! I&apos;m interested in a partnership opportunity. Company: ${form.watch("companyName")}, Type: ${form.watch("partnershipType")}. ${form.watch("description") || "Please contact me to discuss partnership opportunities."}`
    )
    window.open(`https://wa.me/${BUSINESS_INFO.whatsapp.replace(/[^0-9]/g, "")}?text=${message}`, "_blank")
  }

  if (isSubmitted) {
    return (
      <Card className="w-full max-w-md mx-auto">
        <CardContent className="pt-6">
          <div className="text-center">
            <div className="mb-4 text-green-500">
              <Building className="h-12 w-12 mx-auto" />
            </div>
            <h3 className="text-lg font-semibold mb-2">Partnership Inquiry Sent!</h3>
            <p className="text-muted-foreground mb-4">
              Thank you for your interest in partnering with Surf Feeling. We&apos;ll review your inquiry and get back to you within 48 hours.
            </p>
            <Button 
              onClick={() => setIsSubmitted(false)}
              variant="outline"
              className="w-full"
            >
              Send Another Inquiry
            </Button>
          </div>
        </CardContent>
      </Card>
    )
  }

  return (
    <Card className="w-full max-w-lg mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Building className="h-5 w-5 text-green-500" />
          Partnership Inquiry
        </CardTitle>
        <CardDescription>Tell us about your business and partnership ideas</CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="companyName">Company Name *</Label>
              <Input
                id="companyName"
                {...form.register("companyName")}
                placeholder="Your company name"
              />
              {form.formState.errors.companyName && (
                <p className="text-sm text-red-500">{form.formState.errors.companyName.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="contactName">Contact Name *</Label>
              <Input
                id="contactName"
                {...form.register("contactName")}
                placeholder="Your full name"
              />
              {form.formState.errors.contactName && (
                <p className="text-sm text-red-500">{form.formState.errors.contactName.message}</p>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                placeholder="business@email.com"
              />
              {form.formState.errors.email && (
                <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone *</Label>
              <Input
                id="phone"
                {...form.register("phone")}
                placeholder="+84 XXX XXX XXX"
              />
              {form.formState.errors.phone && (
                <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="website">Website</Label>
            <Input
              id="website"
              {...form.register("website")}
              placeholder="https://yourwebsite.com"
            />
            {form.formState.errors.website && (
              <p className="text-sm text-red-500">{form.formState.errors.website.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="partnershipType">Partnership Type *</Label>
            <Select 
              value={form.watch("partnershipType")}
              onValueChange={(value) => form.setValue("partnershipType", value as "accommodation" | "tour_operator" | "equipment_supplier" | "surf_school" | "other")}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select partnership type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="accommodation">Accommodation (Hotel, Resort, Hostel)</SelectItem>
                <SelectItem value="tour_operator">Tour Operator</SelectItem>
                <SelectItem value="equipment_supplier">Equipment Supplier</SelectItem>
                <SelectItem value="surf_school">Surf School</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
            {form.formState.errors.partnershipType && (
              <p className="text-sm text-red-500">{form.formState.errors.partnershipType.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="description">Business Description *</Label>
            <Textarea
              id="description"
              {...form.register("description")}
              placeholder="Tell us about your business, services, target customers, etc."
              rows={3}
            />
            {form.formState.errors.description && (
              <p className="text-sm text-red-500">{form.formState.errors.description.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="proposedBenefits">Proposed Partnership Benefits *</Label>
            <Textarea
              id="proposedBenefits"
              {...form.register("proposedBenefits")}
              placeholder="What benefits can we offer each other? How would this partnership work?"
              rows={3}
            />
            {form.formState.errors.proposedBenefits && (
              <p className="text-sm text-red-500">{form.formState.errors.proposedBenefits.message}</p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="timeline">Preferred Timeline</Label>
            <Textarea
              id="timeline"
              {...form.register("timeline")}
              placeholder="When would you like to start this partnership? Any specific deadlines?"
              rows={2}
            />
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
                  Send Inquiry
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
          <p>Partnership inquiries are typically reviewed within 48 hours</p>
          <p className="font-medium">{BUSINESS_INFO.phone} • {BUSINESS_INFO.email}</p>
        </div>
      </CardContent>
    </Card>
  )
}