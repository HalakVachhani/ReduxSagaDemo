import { call, put } from 'redux-saga/effects';
import PostActions from '../Redux/PostRedux';

export function* getAllPosts(api) {
  // eslint-disable-next-line no-restricted-syntax
  console.log('getAllPosts ::');
  try {
    const response = yield call(api.getPosts);

    // eslint-disable-next-line no-restricted-syntax
    console.log('response api ::');
    // eslint-disable-next-line no-restricted-syntax
    console.log(response.data);

    if (response.ok) {          
      yield put(PostActions.getPostSuccess(response.data));
    } else {
      yield put(PostActions.getPostFailure('Connection problems :('));
    }
  } catch (error) {
    yield put(PostActions.getPostFailure(error.message));
  }
}


