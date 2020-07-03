import Vue from 'vue'
import firebase from 'firebase/app'
import 'firebase/firestore'
import moment from 'moment'

moment.updateLocale('en', {
  relativeTime: {
    future: 'in %s',
    past: '%s ago',
    s: '1s',
    ss: '%ss',
    m: '%dm',
    mm: '%dm',
    h: '%dh',
    hh: '%dh',
    d: '%dd',
    dd: '%dd',
    M: '%dM',
    MM: '%dM',
    y: '%dY',
    yy: '%dY',
  },
})

Vue.filter('dateTime', (val, param) => {
  const timestamp = new firebase.firestore.Timestamp(
    val.seconds,
    val.nanoseconds
  )

  return param === 'human'
    ? moment(timestamp.toDate()).fromNow()
    : moment(timestamp.toDate()).fromNow(true)
})
