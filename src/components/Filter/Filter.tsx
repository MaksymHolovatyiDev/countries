import { useState } from 'react';

import CustomInput from './CustomInput';
import CustomSelect from './CustomSelect';

export default function Filter() {
  return (
    <div className="mb-8 flex lg:flex-col justify-between ">
      <CustomInput />
      <CustomSelect />
    </div>
  );
}
