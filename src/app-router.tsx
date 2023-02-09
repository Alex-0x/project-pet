import { Route, Routes } from "react-router-dom";
import { Homepage } from "./pages/hompage/hompage";
import { NotFound } from "./pages/not-found/not-found";
import { Pets } from "./pages/pets/pets";
import { PetCardEdit } from "./pages/pets/pets-card-edit";
import { PetsDetail } from "./pages/pets/pets-details/pets-details";
import { PetsForm } from "./pages/pets/pets-form/pets-form";
import { defaultPet } from "./utils/pet.utils";


export const AppRoutes = () => {
    return (
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pets">
          <Route index element={<Pets />} />
          <Route path=":id" element={<PetsDetail />} />
          
          <Route path="new" element={<PetsForm defaultValues={defaultPet} />} />
          <Route path="edit/:id" element={<PetCardEdit  />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    );
  };