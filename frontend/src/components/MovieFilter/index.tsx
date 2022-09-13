import './styles.css';
import { Genre } from '../../types/genre';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import Select from 'react-select';
import { requestBackend } from '../../util/requests';
import { AxiosRequestConfig } from 'axios';

export type movieFilterData = {
  genre: Genre | null;
};

type Props = {
  onSubmitFilter: (data: movieFilterData) => void;
};

const MovieFilter = ({ onSubmitFilter }: Props) => {
  const [selectGenre, setSelectGenre] = useState<Genre[]>([]);

  const { handleSubmit, setValue, getValues, control } =
    useForm<movieFilterData>();

  const onSubmit = (formData: movieFilterData) => {
    onSubmit(formData);
  };

  const handleChangeGenre = (value: Genre) => {
    setValue('genre', value);
    const obj: movieFilterData = {
      genre: getValues('genre'),
    };
    onSubmitFilter(obj);
  };

  useEffect(() => {
    const config: AxiosRequestConfig = {
      url: '/genres',
      withCredentials: true,
    };
    requestBackend(config).then((response) => {
      setSelectGenre(response.data);
    });
  }, []);

  return (
    <div className="movie-filter-container">
      <div className="base-card filter-card-container">
        <form onSubmit={handleSubmit(onSubmit)} className="movie-filter-form">
          <div className="movie-filter-genre-container">
            <Controller
              name="genre"
              control={control}
              render={({ field }) => (
                <Select
                  {...field}
                  options={selectGenre}
                  isClearable
                  placeholder="Gênero"
                  classNamePrefix="movie-filter-select"
                  onChange={(value) => handleChangeGenre(value as Genre)}
                  getOptionLabel={(genre: Genre) => genre.name}
                  getOptionValue={(genre: Genre) => String(genre.id)}
                />
              )}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default MovieFilter;
