import { Route, Routes } from "react-router-dom";
import FooterTop from "./components/FooterBlock_1";
import FooterBottom from "./components/FooterBlock_2";
import Header from "./components/Header";
import * as LayoutPages from "./pages"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<LayoutPages.Main />} />
        <Route path="/catalog/tea" element={<LayoutPages.Catalog />}/>
        <Route path="/magazine" element={<LayoutPages.Magazine />}/>
        <Route path="/magazine/:id" element={<LayoutPages.Magazine />}/>
        <Route path="/quality" element={<LayoutPages.QualityPage />}/>
        <Route path="/about" element={<LayoutPages.About />}/>
        <Route path="/actions" element={<LayoutPages.Actions />}/>
        <Route path="/events" element={<LayoutPages.Events />}/>
        <Route path="/locations" element={<LayoutPages.Locations />}/>
        <Route path="/contacts" element={<LayoutPages.Contacts />}/>
        <Route path="/favorites" element={<LayoutPages.Favorites />}/>
      </Routes>
      <FooterTop />
      <FooterBottom />
    </div>
  );
}

export default App;
