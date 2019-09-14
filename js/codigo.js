var app = new Vue({
    el: '#app',
    data: {
        lista: [

        ],

        nombre: '',
        descripcion: '',
        precio: '',
        boton:'Añadir',
        titulo: 'Añadir Producto',
        index:0,
        numero: '',
    },
    methods: {
        agregarModificar: function(){
            if(this.boton=="Modificar"){
                if(this.nombre!="" && this.descripcion!="" && this.precio!=""){
                    this.lista[numero].nombre= this.nombre;
                    this.lista[numero].descripcion = this.descripcion;
                    this.lista[numero].precio = this.precio;
                    this.boton = "Añadir";
                    this.titulo = "Añadir Producto";
                    this.nombre = "";
                    this.descripcion = "";
                    this.precio = "";
                    this.numero = "";
                }else{
                    alert("Complete toda la información.");
                } 
            }else{
                if(this.nombre!="" && this.descripcion!="" && this.precio!=""){
                    this.lista.push({nombre:this.nombre,descripcion:this.descripcion,precio:this.precio,index:this.index++});
                    this.nombre = "";
                    this.descripcion = "";
                    this.precio = "";
                }else{
                    alert("Complete toda la información.");
                } 
            }
                       
        },
        modificar: function(indice){
            this.boton = "Modificar";
            this.titulo = "Modificar producto";
            this.nombre = this.lista[indice].nombre;
            this.descripcion = this.lista[indice].descripcion;
            this.precio = this.lista[indice].precio;
            this.enviarIndex(indice);            
        },
        eliminar: function(indice){
            this.lista.splice(indice,1);
            --this.index;
            for(i=indice;i<=this.lista.length;i++){
                this.lista[i].index = this.lista[i].index-1;
            }
        },
        enviarIndex: function(numero1){
            numero = numero1;
        }
    }
});
