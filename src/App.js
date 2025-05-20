import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Layout from './Components/Layout';                // ← new
import Home from './Components/pages/Home';
import About from './Components/pages/About'
import FAQs from './Components/pages/FAQs';
import PrivacyPolicy from './Components/pages/PrivacyPolicy';
import CookiePolicy from './Components/pages/CookiePolicy';
import Careers from './Components/pages/Careers';
import Contact from './Components/pages/Contact';
import PayingForYourself from './Components/pages/Patients/PayingForYourself';
import ServicesTreatments from './Components/pages/Patients/ServicesTreatments';
import MakingPayment from './Components/pages/Patients/MakingPayment';
import BecomingPatient from './Components/pages/Patients/BecomingPatient';
import Management from './Components/pages/Team/Management';
import HealthTeam from './Components/pages/Team/HealthTeam';
import SearchResults from './Components/xtras/SearchResults';
import NotFound from './Components/pages/NotFound';
import Services from './Components/pages/Services';




function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/search" element={<SearchResults />} />
        <Route path="/get-in-touch" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route path="/faqs" element={<FAQs />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/cookie-policy" element={<CookiePolicy />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />

        {/* PATIENTS */}
        <Route path="/patients/payments" element={<PayingForYourself />} />
        <Route
          path="/patients/services-and-treatments"
          element={<ServicesTreatments />}
        />
        <Route
          path="/patients/making-a-payment"
          element={<MakingPayment />}
        />
        <Route
          path="/patients/becoming-a-patient"
          element={<BecomingPatient />}
        />

        {/* TEAM */}
        <Route path="/team/management" element={<Management />} />
        <Route path="/team/health-team" element={<HealthTeam />} />

        {/* catch‑all */}
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;


  
      