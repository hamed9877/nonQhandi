"use client";
import { AdminNav } from "@/components/bars/AdminNavBar";
import { GuestNav } from "@/components/bars/guestNav";
import { Layout } from "@/components/layout/Layout";
import { navItems } from "@/data/AdminNavItem";
import { ClientNavItem } from "@/data/ClientNavItem";
import { usePathname } from "next/navigation";

import { QrcFillter } from "@/components/fillters/QrcFilter";
import { LayoutSize } from "@/interface/LayoutSize";
import { Path } from "@/routes/Path";
import "../styles/globals.css";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: LayoutSize;
}) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <StyledComponentsRegistry>
        <body>
          {pathname === "/login" || pathname.includes("authy") ? (
            <>{children}</>
          ) : (
            <Layout
              NavBar={
                pathname.includes("authy")
                  ? null
                  : pathname.includes("expert")
                  ? () => <AdminNav data={ClientNavItem} />
                  : pathname.includes("landing")
                  ? GuestNav
                  : () => <AdminNav data={navItems} />
              }
              FilterBar={
                !pathname.includes("landing") &&
                !pathname.includes("expert") &&
                !pathname.includes("authy") &&
                !pathname.includes(Path.dashboard) &&
                QrcFillter
              }
              padding={pathname.includes("landing") ? "0" : "unset"}
              {...pageProps}
            >
              {children}
            </Layout>
          )}
        </body>
      </StyledComponentsRegistry>
    </html>
  );
}
