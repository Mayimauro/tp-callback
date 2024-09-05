//punto 1
function mostrarMensaje(mensaje1,mensaje2,callback)
{
    let mensajes=mensaje1+" "+mensaje2;
    callback(mensajes);
}


mostrarMensaje("hola","soy mati",mostrarMensajeAnidado=>{console.log(mostrarMensajeAnidado)});

//punto 2
function sumarAsync(num1, num2,callback)
{
    let resultado = num1 + num2;
    callback(resultado);
}

sumarAsync(1,2,mostrarResultado => {console.log(mostrarResultado)});

//punto 3

function retrasarEjecucion(retraso,callback)
{
    setTimeout(
        function (){
            let mensaje = "hola apareci despues de "+retraso +" segundo/s"
            callback(mensaje)
        },retraso);
}

retrasarEjecucion(1000,mostrarRetraso=>{console.log(mostrarRetraso)});
//punto 4

const empleados = [
    { id: 1, nombre: 'Maria' },
    { id: 2, nombre: 'Carla' },
    { id: 3, nombre: 'Fernando' }
];

function obtenerDatosUsuarios(id,callback){
    const empleado = empleados.find((e) => e.id === id);
    if(empleado){
        callback(null,empleado);
    }else
    {
        callback("empleado no existe",null)
    }
}
obtenerDatosUsuarios(1,function (fallo,encontro) {
    if(fallo) {console.log(fallo);}
    else {console.log("El empelado es: ",encontro);}}
);
//punto 5

function obtenerDatosUsuariosPromise(id)
{
    return new Promise((resolve,reject) => {
        const empleado = empleados.find((e) => e.id === id);

        if(empleado){
            resolve(empleado);
        }else
        {
            reject("no se encontro el empleado");
        }
    })
}

obtenerDatosUsuariosPromise(2).then(empleado => {
    console.log(empleado);
}).catch(error => {
    console.log("error",error);
})