import { Counter } from '../counter/Counter';
import { useReducer } from 'react';
import styles from './ReviewForm.module.css';
import { Button } from '../Button/Button';
import { addReview } from '../../redux/reviews/get-reviews';
import { useDispatch } from 'react-redux';

const INITIAL_FORM = {
  userName: '',
  text: '',
  rating: 0,
};

const SET_USER_NAME_ACTION = 'setUserNameAction';
const SET_REVIEW_TEXT_ACTION = 'setReviewTextAction';
const SET_MARK_ACTION = 'setMarkAction';
const CLEAR_FORM_ACTION = 'clearFormAction';

const reducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_USER_NAME_ACTION:
      return { ...state, userName: payload };
    case SET_REVIEW_TEXT_ACTION:
      return { ...state, text: payload };
    case SET_MARK_ACTION:
      if (payload === 'increment') {
        if (state.rating >= 5) {
          return state;
        }
        return { ...state, rating: state.rating + 1 };
      }

      if (payload === 'decrement') {
        if (state.rating <= 0) {
          return state;
        }
        return { ...state, rating: state.rating - 1 };
      }

      return state;

    case CLEAR_FORM_ACTION:
    default:
      return INITIAL_FORM;
  }
};

export const ReviewForm = ({ restaurantId }) => {
  const [form, dispatchForm] = useReducer(reducer, INITIAL_FORM);
  const reduxDispatch = useDispatch();

  const { userName, text, rating } = form;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!userName || !text || rating === 0) {
      alert('Заполните все поля и поставьте оценку!');
      return;
    }

    reduxDispatch(
      addReview({
        restaurantId: restaurantId,
        formData: form,
      })
    );

    dispatchForm({ type: CLEAR_FORM_ACTION });
  };

  return (
    <form onSubmit={handleSubmit} className={styles.reviewForm}>
      <label htmlFor="userName">Имя</label>
      <input
        id="userName"
        value={userName}
        onChange={(event) => {
          dispatchForm({
            type: SET_USER_NAME_ACTION,
            payload: event.target.value,
          });
        }}
      />
      <label htmlFor="reviewText">Текст отзыва</label>
      <textarea
        id="reviewText"
        value={text}
        onChange={(event) => {
          dispatchForm({
            type: SET_REVIEW_TEXT_ACTION,
            payload: event.target.value,
          });
        }}
      />
      <p>Оцените от 1 до 5</p>
      <Counter
        value={rating}
        increment={() => {
          dispatchForm({ type: SET_MARK_ACTION, payload: 'increment' });
        }}
        decrement={() => {
          dispatchForm({ type: SET_MARK_ACTION, payload: 'decrement' });
        }}
      />

      <Button
        onClick={(event) => {
          dispatchForm({
            type: CLEAR_FORM_ACTION,
            payload: event.target.value,
          });
        }}
      >
        Сбросить
      </Button>
      <Button type="submit">Отправить</Button>
    </form>
  );
};
