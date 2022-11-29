function raices(){
    var n = parseInt( document.getElementById("n").value);
    var i = 0;
    var a = 0;
    var b = 1;
    var c = 1;
    var x = b;
    var cad;
    var cad2 = "";
    while(i < n){
        i+=1
        //document.write(x+", ");
        x = a;
        a = b;
        b = c;
        c = x + a + b;
        //document.write(x+", ");
        cad = x.toString();
        cad2 = cad2 + cad+", "
    }

    document.getElementById('gato').innerHTML=cad2
    
    //document.write(m);
    //document.write("<h2>"+nw+"</h2>")
    //document.getElementById('gato').innerHTML="No es primo"
    //document.getElementById('raiz').innerHTML=nw

}