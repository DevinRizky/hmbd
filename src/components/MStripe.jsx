/**
 * 4px M tricolor divider — DESIGN.md `{component.m-stripe-divider}`
 */
export default function MStripe({ className = "" }) {
  return <div className={`h-1 w-full bg-linear-to-r from-m-blue-light via-m-blue-dark to-m-red ${className}`} aria-hidden="true" />;
}
