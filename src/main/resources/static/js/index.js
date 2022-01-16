requirejs.config({
    baseURI: 'js'
})

function buildRoute(view) {
    return function () {
        webix.ui({
            id: "root",
            rows: [
                view
            ]
        }, $$("root"))
    }
}



require(['views/main', "views/cars"], function (main, cars) {
    webix.ready(function (){
        webix.ui({
            container: "app",
            rows: [
                {
                  view: "toolbar",
                    cols: [
                        {
                            view:"button",
                            value: "mark",
                            width:100,
                            alert: "center"
                        }
                    ]
                },
                {
                    id: 'root'
                }
            ]

            id: "root"


        })
    })

    routie({
        '': buildRoute(main),
        'cars': buildRoute(cars)
    })
})


