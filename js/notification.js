var timer = window.setTimeout(notificacao, milliseconds);

//desativar

clearTimeout(timer);


function notificacao() {
  if (!("Notification" in window)) 
    alert("Oops! Este navegador não suporta notificações");
  else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there!");
	setTimeout(notification.close.bind(notification), 4000);
  }

  else if (Notification.permission !== 'denied') {
    Notification.requestPermission(function (permission) {
      if (permission === "granted" && timenow > tempoSaida) {
        var notification = new Notification("Hi there!");
		setTimeout(notification.close.bind(notification), 4000);
      }
    });
  }

}