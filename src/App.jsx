import { Routes, Route } from "react-router-dom";
import { Layout } from "layout/Layout";
import { Contacts } from "pages/Contacts";
import { NewContact } from "pages/NewContact/NewContact";
import { Trash } from "pages/Trash/Trash";

export const App = () => {
  return (
      <Routes>
        <Route path='/' element={<Layout />}>          
          <Route index element={<Contacts />} />
          <Route path='trash' element={<Trash />} />
          <Route path='newcontact' element={<NewContact />} />
        </Route>
      </Routes>
  )
}