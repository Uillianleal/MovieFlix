import ButtonIcon from '../ButtonIcon';
import './styles.css';

const ReviewFrom = () => {
  return (
    <div className="review-container base-card">
      <div className='input-container'>
        <input
          type="text"
          className="form-control base-input"
          placeholder="Deixe sua avaliação aqui"
          name="text"
        />
        <div className="button-container">
          <ButtonIcon text="Salvar Avaliação"/>
        </div>
      </div>
    </div>
  );
};

export default ReviewFrom;
