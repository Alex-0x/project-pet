import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/hompage/hompage";
import { NotFound } from "./pages/not-found/not-found";
import { Pets } from "./pages/pets/pets";
import { PetCardEdit } from "./pages/pets/pets-card-edit";
import { PetsDetail } from "./pages/pets/pets-details/pets-details";
import { PetsForm } from "./pages/pets/pets-form/pets-form";


export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pets">
          <Route path="/pets" index element={<Pets />} />
          <Route path="/pets/:id" element={<PetCardEdit />} />
          
          <Route path="new" element={<PetsForm />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };