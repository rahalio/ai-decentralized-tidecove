import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { AppShell } from "@/app/AppShell";
import { LoginPage } from "@/pages/LoginPage";
import { BuyerHomePage, SellerHomePage } from "@/pages/HomePages";
import {
  AssetPublishPage,
  AssetsPage,
  CommonsPage,
  CompliancePage,
  ComputePage,
  DiscoveryPage,
  EntitlementsPage,
  KeepersPage,
  LicencesPage,
  MarketplacePage,
  ParticipantsPage,
  SettlementsPage,
} from "@/pages/DomainPages";

const qc = new QueryClient();

function ShellRoutes() {
  return (
    <AppShell>
      <Routes>
        <Route path="/" element={<SellerHomePage />} />
        <Route path="/buyer" element={<BuyerHomePage />} />
        <Route path="/assets" element={<AssetsPage />} />
        <Route path="/assets/publish" element={<AssetPublishPage />} />
        <Route path="/licences" element={<LicencesPage />} />
        <Route path="/discovery" element={<DiscoveryPage />} />
        <Route path="/entitlements" element={<EntitlementsPage />} />
        <Route path="/compute" element={<ComputePage />} />
        <Route path="/keepers" element={<KeepersPage />} />
        <Route path="/marketplace" element={<MarketplacePage />} />
        <Route path="/settlements" element={<SettlementsPage />} />
        <Route path="/compliance" element={<CompliancePage />} />
        <Route path="/participants" element={<ParticipantsPage />} />
        <Route path="/commons" element={<CommonsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AppShell>
  );
}

export function App() {
  return (
    <QueryClientProvider client={qc}>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/*" element={<ShellRoutes />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}
