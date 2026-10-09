
export default function AuthLayout({ children }: LayoutProps<"/">) {
  return (
      <div className="min-h-screen justify-center items-center flex">
        {children}
        </div>
  );
}
