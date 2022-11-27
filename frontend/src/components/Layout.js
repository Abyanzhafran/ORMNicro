export default function Layout({ children, className, id }) {
  return (
    <div className={`${className}`} id={`${id}`}>
      <main className="container mx-auto px-10 pt-10">{children}</main>
    </div>
  );
}
