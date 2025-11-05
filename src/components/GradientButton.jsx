export default function GradientButton({ children, href, onClick }) {
  const cls = "inline-flex items-center gap-2 px-5 py-2 rounded-full font-medium transition transform hover:-translate-y-0.5 active:translate-y-0 shadow-sm";
  const grad = "bg-gradient-to-r from-[var(--accent-from)] to-[var(--accent-to)] text-black";
  if (href) return <a href={href} download className={`${cls} ${grad}`}>{children}</a>;
  return <button onClick={onClick} className={`${cls} ${grad}`}>{children}</button>;
}
