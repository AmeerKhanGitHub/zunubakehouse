import { useParams, useNavigate } from "react-router-dom";
import { SITE } from "../constants/values";
import CakesForAllOccasionsPage from "./pages/CakesForAllOccasionsPage";
import PartyFavoritesPage from "./pages/PartyFavoritesPage";
import CustomThemedCakesPage from "./pages/CustomThemedCakesPage";
import BouquetsPage from "./pages/BouquetsPage";

export default function SectionPage() {
  const { sect } = useParams();
  const section = SITE.sections[sect];
  const navigate = useNavigate();

  if (!section) {
    navigate('/');
    return null;
  }

  // Route to appropriate page component
  switch (sect) {
    case 'cakesForAllOccasions':
      return <CakesForAllOccasionsPage />;
    case 'partyFavorites':
      return <PartyFavoritesPage />;
    case 'customThemedCakes':
      return <CustomThemedCakesPage />;
    case 'bouquets':
      return <BouquetsPage />;
    default:
      navigate('/');
      return null;
  }
}
