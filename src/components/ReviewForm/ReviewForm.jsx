import { Counter } from '../counter/Counter';
import { useReducer } from 'react';
import styles from './ReviewForm.module.css';

const INITIAL_FORM = {
  userName: '',
  reviewText: '',
  mark: 0,
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
      return { ...state, reviewText: payload };
    case SET_MARK_ACTION:
      if (payload === 'increment') {
        if (state.mark >= 5) {
          return state;
        }
        return { ...state, mark: state.mark + 1 };
      }

      if (payload === 'decrement') {
        if (state.mark <= 0) {
          return state;
        }
        return { ...state, mark: state.mark - 1 };
      }

      return state;

    case CLEAR_FORM_ACTION:
    default:
      return INITIAL_FORM;
  }
};

export const ReviewForm = () => {
  const [form, dispatch] = useReducer(reducer, INITIAL_FORM);

  const { userName, reviewText, mark } = form;

  return (
    <form onSubmit={(e) => e.preventDefault()} className={styles['reviewForm']}>
      <label htmlFor="userName">Имя</label>
      <input
        id="userName"
        value={userName}
        onChange={(event) => {
          dispatch({
            type: SET_USER_NAME_ACTION,
            payload: event.target.value,
          });
        }}
      />
      <label htmlFor="reviewText">Текст отзыва</label>
      <textarea
        id="reviewText"
        value={reviewText}
        onChange={(event) => {
          dispatch({
            type: SET_REVIEW_TEXT_ACTION,
            payload: event.target.value,
          });
        }}
      />
      <p>Оцените от 1 до 5</p>
      <Counter
        value={mark}
        increment={() => {
          dispatch({ type: SET_MARK_ACTION, payload: 'increment' });
        }}
        decrement={() => {
          dispatch({ type: SET_MARK_ACTION, payload: 'decrement' });
        }}
      />

      <button
        onClick={(event) => {
          dispatch({ type: CLEAR_FORM_ACTION, payload: event.target.value });
        }}
      >
        Сбросить
      </button>
    </form>
  );
};
