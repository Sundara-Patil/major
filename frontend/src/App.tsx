import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BeforeJNV from "./pages/BeforeJNV";
import DuringJNV from "./pages/DuringJNV";
import AfterJNV from "./pages/AfterJNV";
import About from "./pages/About";
import Events from "./pages/Events";
// import SuccessStories from "./pages/SuccessStories";
import Contact from "./pages/Contact";
import Volunteer from "./pages/Volunteer";
import StudentHelp from "./pages/StudentHelp";
import GalleryBeforeJNV from "./pages/GalleryBeforeJNV";
import GalleryDuringJNV from "./pages/GalleryDuringJNV";
import JNVDavanagere from "./pages/JNVDavanagere";
import JNVHassan from "./pages/JNVHassan";
import JNVChitradurga from "./pages/JNVChitradurga";
import NotFound from "./pages/NotFound";
import OurTeam from "@/pages/OurTeam";
import Mission from "@/pages/Mission";
import Vision from "@/pages/Vision";
import Values from "@/pages/Values";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/before-jnv" element={<BeforeJNV />} />
          <Route path="/during-jnv" element={<DuringJNV />} />
          <Route path="/after-jnv" element={<AfterJNV />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/success-stories" element={<SuccessStories />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/student-help" element={<StudentHelp />} />
          <Route path="/gallery/before-jnv" element={<GalleryBeforeJNV />} />
          <Route path="/gallery/during-jnv" element={<GalleryDuringJNV />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/our-team" element={<OurTeam />} />
          <Route path="/jnv-davanagere" element={<JNVDavanagere />} />
          <Route path="/jnv-hassan" element={<JNVHassan />} />
          <Route path="/jnv-chitradurga" element={<JNVChitradurga />} />
          <Route path="/our-mission" element={<Mission />} />
          <Route path="/our-vision" element={<Vision />} />
          <Route path="/our-values" element={<Values/>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
)

export default App;