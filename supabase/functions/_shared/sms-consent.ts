export const SMS_CONSENT_VERSION = "2026-10-17";
export const SMS_CONSENT_TEXT = "I agree to receive appointment confirmations and reminders from YourBestSEO at the phone number provided. Message frequency varies. Message and data rates may apply. Reply STOP to opt out or HELP for help.";

export function readSmsConsent(value: unknown, version: unknown): boolean {
  if (value === undefined || value === false) return false;
  if (value !== true || version !== SMS_CONSENT_VERSION) {
    throw new Error("Please review the text message consent and try again.");
  }
  return true;
}

export function buildSmsConsentEvidence(optedIn: boolean, phone: string, email: string, appointmentAt: string, source: unknown) {
  return {
    phone, email, opted_in: optedIn,
    consent_text: SMS_CONSENT_TEXT,
    consent_version: SMS_CONSENT_VERSION,
    source_url: source === "/free-audit" ? "https://yourbestseo.com/free-audit" : "https://yourbestseo.com/book",
    appointment_at: appointmentAt,
  };
}