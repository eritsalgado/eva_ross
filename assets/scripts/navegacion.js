$('#galeria').click((e)=> {
    e.preventDefault()
    swal({
        title:"Existen dos variantes de Galeria",
        buttons: {
            instagram: {
                text: "Instagram",
                value: "instagram",
            },
            grid: {
                text: "CSS Grid",
                value: "grid",
            },
        },
    }).then((value) => {
        switch (value) {
        
            case "instagram":
                window.location = "galeria_instagram.html"
            break;
        
            case "grid":
                window.location = "galeria_grid.html"
            break;
        
            default:
                console.log("default")
        }
    });
})