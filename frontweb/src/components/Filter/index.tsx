import './styles.css';

import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Controller } from 'react-hook-form';
import Select from 'react-select';
import axios from 'axios';

import { Store, FilterData } from '../../types';

type Props = {
  onFilterChange: (filterData: FilterData) => void;
};

function Filter(props: Props) {
  //
  const { onFilterChange } = props;

  const [stores, setStores] = useState<Store[]>([]);

  const { setValue, getValues, control } = useForm<FilterData>();

  useEffect(() => {
    axios.get(`http://localhost:8080/stores`).then((response) => {
      setStores(response.data as Store[]);
    });
  }, []);

  const handleChangeStore = function (value: Store) {
    setValue('store', value);
    const filterData: FilterData = {
      store: getValues('store'),
    };
    onFilterChange(filterData);
  };

  return (
    <div className="filter-container">
      <Controller
        name="store"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            classNamePrefix="filter-input"
            options={stores}
            placeholder="Loja"
            getOptionLabel={(store: Store) => store.name}
            getOptionValue={(store: Store) => store.id + ''}
            onChange={(value) => handleChangeStore(value as Store)}
          />
        )}
      />
    </div>
  );
}

export default Filter;
