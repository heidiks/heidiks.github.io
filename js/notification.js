
function notificacao() {

  if (!("Notification" in window)) 
    alert("Oops! Este navegador não suporta notificações");
  else if (Notification.permission === "granted") {
    var notification = createNotification("minina", "18:13:05");
    setTimeout(notification.close.bind(notification), 5000);
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted")  {
        var notification = createNotification("minina", "18:13:05");
        setTimeout(notification.close.bind(notification), 5000);
      }
    });
  }
  setTimeout(notificacao, 60000);
}

function createNotification(label, horario) {
 var options = {
      body: horario,
      icon: 'http://www.db1.com.br/assets/images/logo.png'
  }

  return new Notification("Jornada "+ label +" cumprida!", options);
}