import { call, put } from 'redux-saga/effects';
import CocktailsActions from '../Redux/HomeRedux';

export function* getAllCocktails(api) {
  // eslint-disable-next-line no-restricted-syntax
  console.log('getAllCocktails ::');
  try {
    const response = yield call(api.getPhotos);

    // eslint-disable-next-line no-restricted-syntax
    console.log('response api ::');
    // eslint-disable-next-line no-restricted-syntax
    console.log(response);

    if (response.ok) {          
      yield put(CocktailsActions.getCocktailsSuccess(response.data));
    } else {
      yield put(CocktailsActions.getCocktailsFailure('Connection problems :('));
    }
  } catch (error) {
    yield put(CocktailsActions.getCocktailsFailure(error.message));
  }
}


