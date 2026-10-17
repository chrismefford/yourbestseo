CREATE TABLE public.appointment_sms_consents (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  phone text NOT NULL,
  email text NOT NULL,
  opted_in boolean NOT NULL DEFAULT false,
  consent_text text NOT NULL,
  consent_version text NOT NULL,
  source_url text NOT NULL,
  appointment_at timestamptz NOT NULL,
  recorded_at timestamptz NOT NULL DEFAULT now()
);
GRANT ALL ON public.appointment_sms_consents TO service_role;
ALTER TABLE public.appointment_sms_consents ENABLE ROW LEVEL SECURITY;