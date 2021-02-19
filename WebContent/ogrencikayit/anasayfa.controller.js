sap.ui.controller("ogrencikayit.anasayfa", {
		//tüm öğrencileri görüntüleme
	tGörüntüle : function(){
		var connection = new ActiveXObject("ADODB.Connection") ;
		var connectionstring="Data Source=TRBZNLUD;Initial Catalog=ogrencikayit;User ID=sqldb;Password=123456;Provider=SQLOLEDB";
		connection.Open(connectionstring);
		var rs = new ActiveXObject("ADODB.Recordset");
		rs.Open("SELECT * FROM ogrenciler", connection);
		rs.MoveFirst
		document.write("id "+"isim "+"soyisim "+"sinif "+"</br>");
		while(!rs.eof)
		{
		 document.write(rs.fields(0)+" "+rs.fields(1)+" "+rs.fields(2)+" "+rs.fields(3)+"</br>");
		 rs.movenext;
		}
		connection.close;
	},
	idGörüntüle : function(){
		location.href="sayfa2.html";
	},
	add : function(){
		location.href="sayfa3.html";
	},
	update : function(){
		location.href="sayfa4.html";
	},
	deletee : function(){
		location.href="sayfa5.html";
	},
	
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ogrencikayit.anasayfa
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ogrencikayit.anasayfa
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ogrencikayit.anasayfa
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ogrencikayit.anasayfa
*/
//	onExit: function() {
//
//	}

});