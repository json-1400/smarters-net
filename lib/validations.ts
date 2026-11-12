import { z } from 'zod';

export const planTypeSchema = z.enum(['Starter', 'Confort', 'Premium', 'Pack2', 'Pack3', 'Pack4'], {
  message: "Formule d'abonnement invalide sélectionnée.",
});

export const placeOrderSchema = z.object({
  planType: planTypeSchema,
  fullName: z.string().trim().optional(),
  email: z
    .string()
    .trim()
    .email('Veuillez saisir une adresse email valide pour recevoir votre confirmation.')
    .optional()
    .or(z.literal('')),
  phone: z.string().trim().optional().nullable(),
  deviceType: z.string().trim().optional().nullable(),
  deviceApp: z.string().trim().optional().nullable(),
});

export const adminPaymentActionSchema = z.object({
  orderId: z.string().trim().optional(),
  paymentId: z.string().trim().optional(),
  notes: z.string().trim().optional().nullable(),
}).refine((data) => data.orderId || data.paymentId, {
  message: 'Identifiant de commande ou de paiement requis.',
});

export const adminResendInstructionsSchema = z.object({
  orderId: z.string().trim().optional(),
  paymentId: z.string().trim().optional(),
}).refine((data) => data.orderId || data.paymentId, {
  message: 'Identifiant de commande ou de paiement requis.',
});

export const loginSchema = z.object({
  email: z.string().trim().email('Adresse e-mail invalide.'),
  password: z.string().min(1, 'Mot de passe requis.'),
});

export const chatSendSchema = z.object({
  roomId: z.string().trim().min(1, 'Identifiant de salon requis.'),
  message: z.string().trim().min(1, 'Le message ne peut pas être vide.'),
  guestName: z.string().trim().optional().nullable(),
  isFromAdmin: z.boolean().optional().default(false),
});
