BX.addCustomEvent("onTimeManWindowOpen", function (event) {
    let statusDay = event.DATA.STATE;
    event.POPUP.close();
    var popup = BX.PopupWindowManager.create("popup-message", BX('element'), {
        content: 'Какой-то произвольный текст для модального окна',
        width: 800, // ширина окна
        height: 400, // высота окна
        zIndex: 100, // z-index
        closeIcon: {
            // объект со стилями для иконки закрытия, при null - иконки не будет
            opacity: 1
        },
        titleBar: 'Заголовок окна',
        closeByEsc: true, // закрытие окна по esc
        darkMode: false, // окно будет светлым или темным
        autoHide: false, // закрытие при клике вне окна
        draggable: true, // можно двигать или нет
        resizable: false, // можно ресайзить
        min_height: 100, // минимальная высота окна
        min_width: 100, // минимальная ширина окна
        lightShadow: true, // использовать светлую тень у окна
        angle: true, // появится уголок
        overlay: {
            // объект со стилями фона
            backgroundColor: 'black',
            opacity: 500
        },
        buttons: [
            new BX.PopupWindowButton({
                text: 'Начать рабочий день',
                id: 'start-day-btn',
                className: 'ui-btn ui-btn-success',
                events: {
                    click: function() {
                        BX.rest.callMethod("timeman.open");
                        popup.destroy();
                        setTimeout(function (){
                            window.location.reload();
                        }, 300)
                    }
                }
            }),
            new BX.PopupWindowButton({
                text: 'Завершить рабочий день',
                id: 'end-day-btn',
                className: 'ui-btn ui-btn-primary',
                events: {
                    click: function() {
                        BX.rest.callMethod("timeman.close",);
                        popup.destroy();
                        setTimeout(function (){
                            window.location.reload();
                        }, 300)

                    }
                }
            })
        ],
        events: {
            onPopupClose: function() {
                popup.destroy();
            }
        }
    });
    popup.show();

    if(statusDay === 'OPENED') {
        let btn = document.querySelector('#start-day-btn');
        if(btn) {
            btn.style.display = 'none';
        }
    }else if(statusDay === "CLOSED") {
        let btn = document.querySelector('#end-day-btn');
        if(btn) {
            btn.style.display = 'none';
        }
    }
});