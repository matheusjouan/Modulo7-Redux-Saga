// Método para combinar todos os saga em um só
import { all } from 'redux-saga/effects';

// Importação de todos os sagas
import cart from './Cart/saga';

export default function* rootSaga() {
  return yield all([cart]);
}
