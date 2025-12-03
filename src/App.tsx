
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import { TenantProvider } from "@/contexts/TenantContext";

// Main pages
import PartsHome from "./pages/PartsHome";
import PartsExplorer from "./pages/PartsExplorer";
import NotFound from "./pages/NotFound";
import Auth from "./pages/Auth";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";

// Portals
import ManufacturerPortal from "./pages/portals/ManufacturerPortal";
import ConsumerPortal from "./pages/portals/ConsumerPortal";

// Legacy tyre pages (keeping for backward compatibility)
import Index from "./pages/Index";
import TLRS from "./pages/TLRS";
import Onboarding from "./pages/Onboarding";
import TyreManagement from "./pages/TyreManagement";
import PaymentSuccess from "./pages/PaymentSuccess";
import Dashboard from "./pages/Dashboard";
import RetailerPortal from "./pages/RetailerPortal";
import RetailerOnboarding from "./pages/RetailerOnboarding";
import RetailerDashboard from "./pages/dashboards/RetailerDashboard";
import RecyclerDashboard from "./pages/dashboards/RecyclerDashboard";
import GovernmentDashboard from "./pages/dashboards/GovernmentDashboard";
import TyreSearch from "./pages/TyreSearch";
import TyreTrack from "./pages/TyreTrack";
import RequireAuth from "@/components/auth/RequireAuth";
import AdminDemo from "./pages/AdminDemo";
import AdvisoryBoard from "./pages/AdvisoryBoard";
import Demos from "./pages/Demos";

const queryClient = new QueryClient();

const RedirectTyresRegister = () => {
  const location = useLocation();
  const qs = new URLSearchParams(location.search);
  qs.set('tab', 'register');
  return <Navigate to={`/tyres?${qs.toString()}`} replace />;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TenantProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          {/* PartLedger - New Homepage */}
          <Route path="/" element={<PartsHome />} />
          <Route path="/parts/explorer" element={<PartsExplorer />} />
          
          {/* Stakeholder Portals */}
          <Route path="/portal/manufacturer" element={<ManufacturerPortal />} />
          <Route path="/portal/consumer" element={<ConsumerPortal />} />
          <Route path="/portal/distributor" element={<ConsumerPortal />} /> {/* Placeholder */}
          <Route path="/portal/repair" element={<ConsumerPortal />} /> {/* Placeholder */}
          <Route path="/portal/recycler" element={<RecyclerDashboard />} />
          <Route path="/portal/government" element={<GovernmentDashboard />} />
          
          {/* Core pages */}
          <Route path="/auth" element={<Auth />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/terms" element={<Terms />} />
          
          {/* Legacy TyreLedger routes */}
          <Route path="/tyres" element={<PartsHome />} /> {/* Redirect to new home */}
          <Route path="/tyres/legacy" element={<Index />} />
          <Route path="/onboarding" element={<Onboarding />} />
          <Route path="/onboarding/retailer" element={<RetailerOnboarding />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/app" element={<TLRS />} />
          <Route path="/tyres/manage" element={<TyreManagement />} />
          <Route path="/retailer" element={<RetailerPortal />} />
          <Route path="/retailer-dashboard" element={<RetailerDashboard />} />
          <Route path="/recycler-dashboard" element={<RecyclerDashboard />} />
          <Route path="/government-dashboard" element={<GovernmentDashboard />} />
          <Route path="/register/:retailerCode?" element={<Onboarding />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />
          <Route path="/search" element={<TyreSearch />} />
          <Route path="/track/:tyreSerial" element={<TyreTrack />} />
          <Route path="/board" element={<AdvisoryBoard />} />
          <Route path="/demos" element={<Demos />} />
          
          {/* Protected admin routes */}
          <Route element={<RequireAuth />}>
            <Route path="/admin/demo" element={<AdminDemo />} />
          </Route>
          
          {/* Catch-all */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
      </TooltipProvider>
    </TenantProvider>
  </QueryClientProvider>
);

export default App;
