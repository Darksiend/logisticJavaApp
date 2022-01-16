define(function (cars) {
    return {
        type:"line",
        height: 400,
        rows:[
            {
                view: 'button',
                label: 'Cars',
                click: function () {
                    routie('cars')
                }

            },
            {template: "Row1"},
            {template: "Row2"},
            {
                cols: [
                    {template: "col1"},
                    {template: "col2"}
                ]
            }
        ]
    }
})