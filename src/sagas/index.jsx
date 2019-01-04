import { fork } from "redux-saga/effects"
import { loadUser } from "./loadUser"

function* rootSaga() {
  yield [fork(loadUser)]
}

export default rootSaga
