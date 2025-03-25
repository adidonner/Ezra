// PageContent.tsx
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Ghana from '../Countries/Ghana/Ghana.tsx';
import Venezuela from '../Countries/Venezuela/Venezuela.tsx';
import Peru from '../Countries/Peru/Peru.tsx';
import Colombia from '../Countries/Colombia/Colombia.tsx';
import Aruba from '../Countries/Aruba/Aruba.tsx';
import Us from '../Countries/Miami/Miami.tsx';
import India from '../Countries/India/India.tsx';

function PageContent() {
  return (
    <Routes>
      <Route path="/ghana" element={<Ghana />} />
      <Route path="/venezuela" element={<Venezuela />} />
      <Route path="/peru" element={<Peru />} />
      <Route path="/colombia" element={<Colombia />} />
      <Route path="/aruba" element={<Aruba />} />
      <Route path="/us" element={<Us />} />
      <Route path="/india" element={<India />} />
    </Routes>
  );
}

export default PageContent;