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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import "../styles/globals.css";

export default function RootLayout({
  children,
  pageProps,
}: {
  children: React.ReactNode;
  pageProps: LayoutSize;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeComplete = () => {
      setLoading(false);
      window.scrollTo({ top: 0, behavior: "instant" });
    };

    router.events.on("routeChangeStart", handleRouteChangeStart);
    router.events.on("routeChangeComplete", handleRouteChangeComplete);

    return () => {
      router.events.off("routeChangeStart", handleRouteChangeStart);
      router.events.off("routeChangeComplete", handleRouteChangeComplete);
    };
  }, [router.events]);

  console.log("pageProps", loading);
  const pathname = usePathname();
  return (
    <html lang="en">
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
            padding={pathname.includes("landing") ? "0" : undefined}
            {...pageProps}
          >
            {children}
          </Layout>
        )}
      </body>
    </html>
  );
}
