const propiedad = [
  {
    nombre: "",
    src: "",
    descripcion: "",
    ubicacion: "",
    habitaciones: 0,
    costo: 0,
    smoke: false,
    pets: true,
  },
];

const propiedades_alquiler = [
  {
    nombre: "Departamento en el centro",
    src: "",
    descripcion:
      "Luminoso departamento de 2 habitaciones en el centro de la ciudad.",
    ubicacion: "Ciudad A",
    habitaciones: 2,
    costo: 500,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa con jardín",
    src: "",
    descripcion: "Hermosa casa con amplio jardín y tres habitaciones.",
    ubicacion: "Barrio B",
    habitaciones: 3,
    costo: 750,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Loft moderno",
    src: "",
    descripcion:
      "Moderno loft en zona exclusiva, ideal para parejas o solteros.",
    ubicacion: "Ciudad C",
    habitaciones: 1,
    costo: 600,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Dúplex familiar",
    src: "",
    descripcion: "Espacioso dúplex con 4 habitaciones y terraza.",
    ubicacion: "Ciudad D",
    habitaciones: 4,
    costo: 900,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento pequeño",
    src: "",
    descripcion:
      "Cómodo apartamento de una habitación, ideal para estudiantes.",
    ubicacion: "Ciudad E",
    habitaciones: 1,
    costo: 400,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Casa en la playa",
    src: "",
    descripcion: "Casa frente al mar con vistas increíbles.",
    ubicacion: "Playa F",
    habitaciones: 3,
    costo: 1200,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Penthouse de lujo",
    src: "",
    descripcion: "Penthouse con piscina privada y excelente ubicación.",
    ubicacion: "Ciudad G",
    habitaciones: 5,
    costo: 2000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña en la montaña",
    src: "",
    descripcion: "Encantadora cabaña de madera rodeada de naturaleza.",
    ubicacion: "Montaña H",
    habitaciones: 2,
    costo: 700,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Residencia moderna",
    src: "",
    descripcion: "Residencia de diseño moderno con acabados de lujo.",
    ubicacion: "Ciudad I",
    habitaciones: 4,
    costo: 1500,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Mini estudio",
    src: "",
    descripcion: "Estudio pequeño pero funcional en excelente ubicación.",
    ubicacion: "Ciudad J",
    habitaciones: 1,
    costo: 350,
    smoke: false,
    pets: true,
  },
];

const propiedades_venta = [
  {
    nombre: "Casa en el bosque",
    src: "",
    descripcion: "Hermosa casa de campo rodeada de árboles y naturaleza.",
    ubicacion: "Bosque A",
    habitaciones: 4,
    costo: 250000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Apartamento céntrico",
    src: "",
    descripcion: "Apartamento moderno en pleno centro de la ciudad.",
    ubicacion: "Ciudad B",
    habitaciones: 2,
    costo: 150000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Dúplex con terraza",
    src: "",
    descripcion: "Dúplex espacioso con una gran terraza para reuniones.",
    ubicacion: "Ciudad C",
    habitaciones: 3,
    costo: 200000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Chalet con piscina",
    src: "",
    descripcion: "Chalet de lujo con jardín y piscina privada.",
    ubicacion: "Ciudad D",
    habitaciones: 5,
    costo: 450000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Cabaña acogedora",
    src: "",
    descripcion: "Cabaña rústica ideal para descansar y desconectarse.",
    ubicacion: "Montaña E",
    habitaciones: 2,
    costo: 120000,
    smoke: true,
    pets: false,
  },
  {
    nombre: "Mansión de lujo",
    src: "",
    descripcion: "Mansión con amplios espacios y vista panorámica.",
    ubicacion: "Ciudad F",
    habitaciones: 7,
    costo: 1200000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Casa de playa",
    src: "",
    descripcion: "Casa frente al mar con acceso directo a la playa.",
    ubicacion: "Playa G",
    habitaciones: 4,
    costo: 800000,
    smoke: true,
    pets: true,
  },
  {
    nombre: "Ático con vista",
    src: "",
    descripcion: "Ático de lujo con vistas impresionantes de la ciudad.",
    ubicacion: "Ciudad H",
    habitaciones: 3,
    costo: 300000,
    smoke: false,
    pets: false,
  },
  {
    nombre: "Residencia minimalista",
    src: "",
    descripcion: "Casa moderna con un diseño minimalista y elegante.",
    ubicacion: "Ciudad I",
    habitaciones: 3,
    costo: 350000,
    smoke: false,
    pets: true,
  },
  {
    nombre: "Departamento compacto",
    src: "",
    descripcion: "Departamento pequeño, pero con todas las comodidades.",
    ubicacion: "Ciudad J",
    habitaciones: 1,
    costo: 90000,
    smoke: false,
    pets: true,
  },
];

// console.log(propiedades_alquiler);
// console.log(propiedades_venta);
let elementoscreado;

document.addEventListener("DOMContentLoaded", function () {

    Cargarpagina();

    

});

function Cargarpagina() {
    if(checkVentaSection()){
        for (let index = 0; index < propiedades_venta.length; index++) {
            const element = propiedades_venta[index];
            const div1 = document.createElement("div");
            div1.className = "card";
            const img = document.createElement("img");
            img.src =
              "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg";
            img.className = "card-img-top";
            img.alt = "imagen alquiler ${index} ";
            div1.appendChild(img);
            const div2 = document.createElement("div");
            div2.className = "card-body";
            const h5 = document.createElement("h5");
            h5.innerHTML = element.nombre;
            h5.className = "card-title";
            div2.appendChild(h5);
            let p = document.createElement("p");
          
            p.className = "card-text";
            p.innerHTML = element.descripcion;
            div2.appendChild(p);
            p = document.createElement("p");
            let i = document.createElement("i");
            i.className = "fas fa-map-marker-alt";
            i.innerText = element.ubicacion;
            p.appendChild(i);
            div2.appendChild(p);
          
            p = document.createElement("p");
            i = document.createElement("i");
            i.className = "fas fa-bed";
            i.innerHTML = element.habitaciones;
            p.appendChild(i);
            i = document.createElement("i");
            i.className = "fas fa-bath";
            i.innerHTML = element.habitaciones; //enunciado estupido no venian baños en el documento asi que use habitaciones
            p.appendChild(i);
            div2.appendChild(p);
            p = document.createElement("p");
            i = document.createElement("i");
            i.className = "fas fa-dollar-sign";
            i.innerHTML = element.costo;
            p.appendChild(i);
            div2.appendChild(p);
            p = document.createElement("p");
            i = document.createElement("i");
          
            if (element.smoke) {
              p.className = "text-success";
              i.className = "fas fa-smoking";
              i.innerHTML = "Permitido fumar";
            } else {
              p.className = "text-danger";
              i.className = "fas fa-smoking-ban";
              i.innerHTML = "No se permite fumar";
            }
            p.appendChild(i);
            div2.appendChild(p);
            p = document.createElement("p");
            i = document.createElement("i");
            if (element.pets) {
              p.className = "text-success";
              i.className = "fas fa-paw";
              i.innerHTML = "Mascotas permitidas";
            } else {
              p.className = "text-danger";
              i.className = "fas fa-ban";
              i.innerHTML = "No se permiten mascotas";
            }
            p.appendChild(i);
            div2.appendChild(p);
            div1.appendChild(div2);
          
            const div0 = document.createElement("div");
            const div01 = document.createElement("div");
          
            //   div0.className = "row";
            div01.className = "col-md-4 mb-4";
            div01.appendChild(div1);
            //   div0.appendChild(div01);
            if (index == 0) {
              elementoscreado = div01;
            }
          
            
            const aux = document.getElementById('listado');
            aux.appendChild(div01);
          }
          

    }else{
        for (let index = 0; index < propiedades_alquiler.length; index++) {
            const element = propiedades_alquiler[index];
            const div1 = document.createElement("div");
            div1.className = "card";
            const img = document.createElement("img");
            img.src =
              "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg";
            img.className = "card-img-top";
            img.alt = "imagen alquiler ${index} ";
            div1.appendChild(img);
            const div2 = document.createElement("div");
            div2.className = "card-body";
            const h5 = document.createElement("h5");
            h5.innerHTML = element.nombre;
            h5.className = "card-title";
            div2.appendChild(h5);
            let p = document.createElement("p");
          
            p.className = "card-text";
            p.innerHTML = element.descripcion;
            div2.appendChild(p);
            p = document.createElement("p");
            let i = document.createElement("i");
            i.className = "fas fa-map-marker-alt";
            i.innerText = element.ubicacion;
            p.appendChild(i);
            div2.appendChild(p);
          
            p = document.createElement("p");
            i = document.createElement("i");
            i.className = "fas fa-bed";
            i.innerHTML = element.habitaciones;
            p.appendChild(i);
            i = document.createElement("i");
            i.className = "fas fa-bath";
            i.innerHTML = element.habitaciones; //enunciado estupido no venian baños en el documento asi que use habitaciones
            p.appendChild(i);
            div2.appendChild(p);
            p = document.createElement("p");
            i = document.createElement("i");
            i.className = "fas fa-dollar-sign";
            i.innerHTML = element.costo;
            p.appendChild(i);
            div2.appendChild(p);
            p = document.createElement("p");
            i = document.createElement("i");
          
            if (element.smoke) {
              p.className = "text-success";
              i.className = "fas fa-smoking";
              i.innerHTML = "Permitido fumar";
            } else {
              p.className = "text-danger";
              i.className = "fas fa-smoking-ban";
              i.innerHTML = "No se permite fumar";
            }
            p.appendChild(i);
            div2.appendChild(p);
            p = document.createElement("p");
            i = document.createElement("i");
            if (element.pets) {
              p.className = "text-success";
              i.className = "fas fa-paw";
              i.innerHTML = "Mascotas permitidas";
            } else {
              p.className = "text-danger";
              i.className = "fas fa-ban";
              i.innerHTML = "No se permiten mascotas";
            }
            p.appendChild(i);
            div2.appendChild(p);
            div1.appendChild(div2);
          
            const div0 = document.createElement("div");
            const div01 = document.createElement("div");
          
            //   div0.className = "row";
            div01.className = "col-md-4 mb-4";
            div01.appendChild(div1);
            //   div0.appendChild(div01);
            if (index == 0) {
              elementoscreado = div01;
            }
          
            
            const aux = document.getElementById('listado');
            aux.appendChild(div01);
          }
          

    }
}

function checkVentaSection() {
    const ventaSection = document.getElementById('venta');
    if (ventaSection) {
      return true; 
    } else {
      return false;
    }
  }
  
  
  