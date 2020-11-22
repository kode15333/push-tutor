importScripts('/__/firebase/8.0.1/firebase-app.js');
importScripts('/__/firebase/8.0.1/firebase-messaging.js');
importScripts('/__/firebase/init.js');

const messaging = firebase.messaging();

/**
 fireBase cli 사용안하고 cdn으로 받아서 할 경
 importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js');
 importScripts('https://www.gstatic.com/firebasejs/8.0.1/firebase-messaging.js');

 fireBase 초기화 등록한 앱
 firebase.initializeApp({
   apiKey: 'api-key',
   authDomain: 'project-id.firebaseapp.com',
   databaseURL: 'https://project-id.firebaseio.com',
   projectId: 'project-id',
   storageBucket: 'project-id.appspot.com',
   messagingSenderId: 'sender-id',
   appId: 'app-id',
   measurementId: 'G-measurement-id',
 });

 const messaging = firebase.messaging();
 **/


// Focus 유지 안될 떄(다른 탭이거나, 최소환 일때 이벤트 발생)
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // 크롬 알림탭 관련 커스터마이징
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});
