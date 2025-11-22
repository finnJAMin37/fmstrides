export default function Page({ label = 'Page', link = '/' }: PageProps) {
  return (
    <a
      href={link}
      className="text-[var(--color-link)] hover:underline font-medium transition"
    >
      {label}
    </a>
  );
}
type PageProps = {
  label?: string
  link?: string
}