import './styles.css';

import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import { useState } from 'react';
import { Store } from '../../types/store';

type FilterData = {
  store: Store | null;
};

function Filter() {
  //
  const [stores, setStores] = useState<Store[]>([]);

  const { register, handleSubmit, setValue, getValues, control } =
    useForm<FilterData>();

  const options = [
    { value: 1, label: 'Cidade 1' },
    { value: 2, label: 'Cidade 2' },
    { value: 3, label: 'Cidade 3' },
  ];

  return (
    <div className="filter-container">
      <Controller
        name="store"
        control={control}
        render={({ field }) => (
          <Select
            classNamePrefix="filter-input"
            options={options}
            isClearable
          />
        )}
      />
    </div>
  );
}

export default Filter;
