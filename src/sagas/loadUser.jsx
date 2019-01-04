import { call, put } from "redux-saga/effects"
import PeopleServiceApi from "../api/peopleServiceApi"

export function* loadUser() {
  try {
    const user = yield call(() => PeopleServiceApi.getUser().then(res => res))
    debugger
    yield put({ type: "FETCH_USER_SUCCESS", payload: user })
  } catch (error) {
    yield put({ type: "FETCH_FAILED", error })
  }
}
