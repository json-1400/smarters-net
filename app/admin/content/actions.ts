'use server';

import { createServerSideClient } from '@/lib/supabase';
import { revalidatePath } from 'next/cache';

export async function savePaymentInstruction(data: {
  plan_type: string;
  instruction_text: string;
  bank_details: string;
  whatsapp_number: string;
}) {
  const supabase = createServerSideClient();

  // Validate admin access (since Server Actions can be called by anyone technically)
  const { data: { user } } = await supabase.auth.getUser();
  if (!user) {
    return { error: 'Unauthorized' };
  }

  // Check if admin
  const { data: profile } = await supabase
    .from('profiles')
    .select('is_admin')
    .eq('id', user.id)
    .single();

  if (!profile?.is_admin) {
    return { error: 'Unauthorized. Admin access required.' };
  }

  // Check if exists
  const { data: existing } = await supabase
    .from('payment_instructions')
    .select('id')
    .eq('plan_type', data.plan_type)
    .single();

  let error;
  if (existing) {
    const { error: updateError } = await supabase
      .from('payment_instructions')
      .update({
        instruction_text: data.instruction_text,
        bank_details: data.bank_details,
        whatsapp_number: data.whatsapp_number,
        updated_at: new Date().toISOString()
      })
      .eq('id', existing.id);
    error = updateError;
  } else {
    const { error: insertError } = await supabase
      .from('payment_instructions')
      .insert({
        plan_type: data.plan_type,
        instruction_text: data.instruction_text,
        bank_details: data.bank_details,
        whatsapp_number: data.whatsapp_number,
      });
    error = insertError;
  }

  if (error) {
    console.error('Error saving instruction:', error);
    return { error: error.message };
  }

  revalidatePath('/admin/content');
  return { success: true };
}
