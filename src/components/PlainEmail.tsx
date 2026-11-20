interface PlainEmailProps {
  email: string;
  /** Render as a mailto: link (default) or as plain text */
  link?: boolean;
  className?: string;
}

/**
 * An email address wrapped in Cloudflare's <!--email_off--> markers, so the edge does not rewrite it into a
 * "/cdn-cgi/l/email-protection" link (which search engines crawl as a broken internal URL).
 */
export function PlainEmail({ email, link = true, className = "" }: PlainEmailProps) {
  const inner = link ? `<a href="mailto:${email}" class="${className}">${email}</a>` : email;
  return <span dangerouslySetInnerHTML={{ __html: `<!--email_off-->${inner}<!--/email_off-->` }} />;
}
