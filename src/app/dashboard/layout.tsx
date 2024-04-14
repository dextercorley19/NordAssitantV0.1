import DashboardNav from "../ui/dashboard/nav/sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <DashboardNav />
      <main className="m-auto max-w-7xl p-4">{children}</main>
    </>
  );
}
