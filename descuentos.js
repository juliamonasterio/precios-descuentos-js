
const cupones = [
    "cupon1",
    "cupon2",
    "cupon3"
]

function calcularPrecioConDescuento(precioOriginal, descuento){
    return precioOriginal-(precioOriginal*descuento)/100;
}

function cacularPrecio(){
    const precio= document.getElementById("inputPrecio");
    const valuePrecio= precio.value;
    const cupon = document.getElementById("inputCupon");
    const valueCupon= cupon.value;


    let descuento;

    if(!cupones.includes(valueCupon)){
        alert("Cupon invalido")

    }
    else{

    switch(valueCupon){
        case cupones[0]:
            descuento=15;
            break;
        case cupones[1]:
            descuento=30;
            break;
        case cupones[2]:
            descuento=25;
            break;
    }
    const precioConDescuento = valuePrecio-(valuePrecio*descuento/100);


    const resultado= document.getElementById("resultado")
    resultado.innerText ="Tu precio con descuento es " +  precioConDescuento;
}


}