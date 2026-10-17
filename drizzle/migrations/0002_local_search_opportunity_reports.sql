CREATE TABLE public.local_search_reports (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 input jsonb NOT NULL,
 report jsonb NOT NULL
);
GRANT ALL ON public.local_search_reports TO service_role;
REVOKE ALL ON public.local_search_reports FROM anon, authenticated;
ALTER TABLE public.local_search_reports ENABLE ROW LEVEL SECURITY;
CREATE TABLE public.local_search_report_leads (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 report_id uuid NOT NULL REFERENCES public.local_search_reports(id),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL,
 email text NOT NULL,
 follow_up_consent boolean NOT NULL DEFAULT false,
 consent_wording text NOT NULL,
 consent_version text NOT NULL,
 email_status text NOT NULL DEFAULT 'pending'
);
GRANT ALL ON public.local_search_report_leads TO service_role;
REVOKE ALL ON public.local_search_report_leads FROM anon, authenticated;
ALTER TABLE public.local_search_report_leads ENABLE ROW LEVEL SECURITY;