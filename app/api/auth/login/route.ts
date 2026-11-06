import { NextResponse } from 'next/server';
import { createServerSideClient } from '@/lib/supabase';
import { loginSchema } from '@/lib/validations';

export async function POST(request: Request) {
  const supabase = createServerSideClient();

  try {
    const rawPayload: unknown = await request.json();
    const parsed = loginSchema.safeParse(rawPayload);

    if (!parsed.success) {
      const firstIssue = parsed.error.issues[0]?.message || 'Adresse e-mail et mot de passe requis.';
      return NextResponse.json({ error: firstIssue }, { status: 400 });
    }

    const { email, password } = parsed.data;

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 400 });
    }

    return NextResponse.json({ success: true, user: data.user });
  } catch (error: unknown) {
    console.error('Login route error:', error instanceof Error ? error.message : error);
    return NextResponse.json({ error: 'Une erreur interne est survenue.' }, { status: 500 });
  }
}
