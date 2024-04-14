import GlobalNavBar from "../ui/globalnavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalNavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
