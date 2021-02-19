sap.ui.controller("ogrencikayit.sayfa3", {
	// öğrenci ekleme
	clickButton : function(){
		var a = document.getElementsByName("oAdi")[0].value;
		var b = document.getElementsByName("oSoy")[0].value;
		var c = document.getElementsByName("oSinif")[0].value;
		var connection = new ActiveXObject("ADODB.Connection") ;
		var connectionstring="Data Source=TRBZNLUD;Initial Catalog=ogrencikayit;User ID=sqldb;Password=123456;Provider=SQLOLEDB";
		connection.Open(connectionstring);
		var rs = new ActiveXObject("ADODB.Recordset");
		var sql = "SELECT * from ogrenciler";
		rs.Open(sql,connection);
		if(!rs.eof){
			rs.Close();
			rs.Open("INSERT INTO ogrenciler(adi,soyAdi,sinif) VALUES('"+a+"','"+b+"','"+c+"')",connection);
			alert("Başarıyla Eklendi.Anasayfaya yönlendiriliyorsunuz...");
			setTimeout(function(){
				location.href="anasayfa.html";
			}, 2000);
		}
		else
		{
		alert("Başarısız..");
		}
	connection.close;
	}
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ogrencikayit.sayfa3
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ogrencikayit.sayfa3
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ogrencikayit.sayfa3
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ogrencikayit.sayfa3
*/
//	onExit: function() {
//
//	}

});