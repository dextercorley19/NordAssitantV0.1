import GlobalNavBar from "../landingpage/globalnavbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalNavBar />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
