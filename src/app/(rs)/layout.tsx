export default async function RSLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full ">
      {/* Header */}
      <div>{children}</div>
    </div>
  );
}
