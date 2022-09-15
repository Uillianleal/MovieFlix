import { AxiosRequestConfig } from 'axios';
import { useForm } from 'react-hook-form';
import { Review } from '../../types/review';
import { requestBackend } from '../../util/requests';
import ButtonIcon from '../ButtonIcon';
import { toast } from 'react-toastify';
import './styles.css';

type Props = {
  movieId: string;
  onInsertReview: (review: Review) => void;
};

type FormData = {
  movieId: number;
  text: string;
};

const ReviewForm = ({ movieId, onInsertReview }: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    formData.movieId = parseInt(movieId);

   if (formData.text.trim().length === 0) {
      toast.dark('Campo texto não pode estar vazio!');
      return;
    }

    const config: AxiosRequestConfig = {
      method: 'POST',
      url: '/reviews',
      data: formData,
      withCredentials: true,
    };

    requestBackend(config)
      .then((response) => {
        setValue('text', '');
        onInsertReview(response.data);
        toast.success('Avaliação cadastrada com sucesso!');
      })
      .catch((error) => {
        toast.error('Erro ao cadastrar a avaliação');
      });
  };

  return (
    <div className="review-container base-card">
      <div className="input-container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            {...register('text', {
              required: 'Campo Obrigatorio',
            })}
            type="text"
            className="form-control base-input"
            placeholder="Deixe sua avaliação aqui"
            name="text"
          />
          <div>{errors.text?.message}</div>
          <div className="button-container">
            <ButtonIcon text="Salvar Avaliação" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReviewForm;
