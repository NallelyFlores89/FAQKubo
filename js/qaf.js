$(document).ready(function(){
	
	$("#bloque2, #bloque3, #bloque4").hide();

	$("#seccion1").click( function() {
		$("#bloque2, #bloque3, #bloque4").hide("slow");
		$("#bloque1").show();
		$("#seccion1").addClass("clickeado");
		$("#seccion2").removeClass("clickeado");
		$("#seccion3").removeClass("clickeado");
		$("#seccion4").removeClass("clickeado");
	 });
	 
	 $("#seccion2").click( function() {
		$("#bloque1, #bloque3, #bloque4").hide("slow");
		$("#bloque2").show();
		$("#seccion2").addClass("clickeado");
		$("#seccion1").removeClass("clickeado");
		$("#seccion3").removeClass("clickeado");
		$("#seccion4").removeClass("clickeado");
		
	 });
	 
	 $("#seccion3").click( function() {
	 	$("#bloque1, #bloque2, #bloque4").hide("slow");
		$("#bloque3").show();
		$("#seccion3").addClass("clickeado");
		$("#seccion1").removeClass("clickeado");
		$("#seccion2").removeClass("clickeado");
		$("#seccion4").removeClass("clickeado");		
	 });
	 
	 $("#seccion4").click( function() 
	 {
		$("#bloque1, #bloque2, #bloque3").hide("slow");
		$("#bloque4").show();
		$("#seccion4").addClass("clickeado");
		$("#seccion1").removeClass("clickeado");
		$("#seccion2").removeClass("clickeado");
		$("#seccion3").removeClass("clickeado");		
	 });
	 
});
