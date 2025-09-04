import { z } from "zod"

// Contact form validation schema
export const contactFormSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters").max(50, "Name must be less than 50 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().optional(),
  service: z.enum(["lessons", "rentals", "partners", "general"], {
    required_error: "Please select a service"
  }),
  lessonLevel: z.enum(["beginner", "intermediate", "advanced"]).optional(),
  rentalType: z.enum(["shortboard", "longboard", "funboard", "softboard"]).optional(),
  message: z.string().min(10, "Message must be at least 10 characters").max(500, "Message must be less than 500 characters"),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
  numberOfPeople: z.number().min(1).max(8).optional()
})

export type ContactFormData = z.infer<typeof contactFormSchema>

// Lesson booking form validation
export const lessonBookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  lessonPackage: z.string().min(1, "Please select a lesson package"),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  preferredDate: z.string().min(1, "Please select a date"),
  preferredTime: z.string().min(1, "Please select a time"),
  numberOfPeople: z.number().min(1, "At least 1 person").max(4, "Maximum 4 people per lesson"),
  specialRequests: z.string().optional(),
  hasExperience: z.boolean().optional(),
  medicalConditions: z.string().optional()
})

export type LessonBookingData = z.infer<typeof lessonBookingSchema>

// Rental booking form validation
export const rentalBookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  boardId: z.string().min(1, "Please select a board"),
  rentalType: z.enum(["hourly", "daily", "weekly"]),
  startDate: z.string().min(1, "Start date required"),
  endDate: z.string().min(1, "End date required"),
  startTime: z.string().optional(),
  endTime: z.string().optional(),
  pickupLocation: z.enum(["my-khe", "bac-my-an", "delivery"]),
  specialRequests: z.string().optional()
})

export type RentalBookingData = z.infer<typeof rentalBookingSchema>

// Partner inquiry form validation
export const partnerInquirySchema = z.object({
  companyName: z.string().min(2, "Company name required"),
  contactName: z.string().min(2, "Contact name required"),
  email: z.string().email("Valid email required"),
  phone: z.string().min(10, "Phone number required"),
  website: z.string().url().optional().or(z.literal("")),
  partnershipType: z.enum(["accommodation", "tour_operator", "equipment_supplier", "surf_school", "other"]),
  description: z.string().min(20, "Please provide more details about your business"),
  proposedBenefits: z.string().min(20, "Please describe proposed partnership benefits"),
  timeline: z.string().optional()
})

export type PartnerInquiryData = z.infer<typeof partnerInquirySchema>