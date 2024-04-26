import GlobalNavBar from "../ui/globalnavbar";
import "../ui/globals.css";


export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <GlobalNavBar />
      <main>{children}</main>
    </>
  );
}
