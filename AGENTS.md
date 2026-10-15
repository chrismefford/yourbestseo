# Architecture rules
- Keep the AI awareness quiz and scoring in a shared pure module, with the checker UI separate from its page, so scoring and lead payloads are testable.
- Keep `/free-audit` as the AI awareness checker entry point so existing inbound links continue to work.
- Send optional AI business review requests through the existing contact email function; report success only after its confirmed response.