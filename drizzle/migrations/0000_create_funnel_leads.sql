CREATE TABLE public.funnel_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  business text NOT NULL,
  location text NOT NULL,
  website text,
  service text,
  score integer,
  answers jsonb,
  appointment_at timestamptz,
  meeting_type text,
  created_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.funnel_leads TO service_role;
ALTER TABLE public.funnel_leads ENABLE ROW LEVEL SECURITY;