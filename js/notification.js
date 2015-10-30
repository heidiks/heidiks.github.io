        function notificacao() {
            if (Notification.permission === "granted" && pontoHoje.horaSaida().subtract(10, 'minutes').isAfter(moment())) {
                var notification = createNotification("minina", pontoHoje.horaSaida().subtract(10, 'minutes').format("HH:mm"));
                setTimeout(notification.close.bind(notification), 6000);
                console.log("rodando 1");
            } else if (Notification.permission !== 'denied') {
                Notification.requestPermission(function (permission) {
                    if (permission === "granted" && pontoHoje.horaSaida().subtract(10, 'minutes').isAfter(moment()))  {
                        var notification = createNotification("minina", pontoHoje.horaSaida().subtract(10, 'minutes').format("HH:mm"));
                        setTimeout(notification.close.bind(notification), 6000);
                    }
                });
                console.log("rodando 2");
            } else 
                setTimeout(notificacao, 60000);
                console.log("rodando 3");
        }

        function createNotification(label, horario) {
            var options = {
                body: horario,
                icon: 'http://www.db1.com.br/assets/images/logo.png'
            }

            return new Notification("Jornada "+ label +" cumprida!", options);
        }

        notificacao();

<div align="center">   
  <h5>
    <label>
      <input type="checkbox" >Notificar quando jornada m&iacute;nima atingida
    </label>
  </h5>
</div>