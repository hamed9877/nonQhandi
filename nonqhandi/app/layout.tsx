"use client";
import { AdminNav } from "@/components/bars/AdminNavBar";
import { GuestNav } from "@/components/bars/guestNav";
import { Layout } from "@/components/layout/Layout";
import { navItems } from "@/data/AdminNavItem";
import { ClientNavItem } from "@/data/ClientNavItem";
import { usePathname } from "next/navigation";

import { QrcFillter } from "@/components/fillters/QrcFilter";
import useDeviceType from "@/hooks/useDeviceType";
import useLocalStorage from "@/hooks/useLocal";
import { LayoutSize } from "@/interface/LayoutSize";
import { Path } from "@/routes/Path";
import "../styles/globals.css";
import { firstData } from "./page";
import StyledComponentsRegistry from "./registry";

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: LayoutSize;
}) {
  const pathname = usePathname();

  const { isMobile } = useDeviceType();

  useLocalStorage("data", firstData);
  return (
    <html lang="en">
      <head>
        <title>QRC | سامانه پایش گردشگری</title>
        <meta name="viewport" content="width=device-width, user-scalable=no" />
      </head>

      <StyledComponentsRegistry>
        <body>
          {/* <Loading isLoading={isLoading} /> */}
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
              padding={
                pathname.includes("landing") ? "0" : isMobile ? "0" : undefined
              }
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
