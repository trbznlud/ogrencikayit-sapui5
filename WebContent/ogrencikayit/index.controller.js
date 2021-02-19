sap.ui.controller("ogrencikayit.index", {

	//kullanıcı girişi
	clickButton : function(){
		
		var a = document.getElementsByName("kAdi")[0].value;
		var b = document.getElementsByName("kSifre")[0].value;
		
		var connection = new ActiveXObject("ADODB.Connection") ;
		var connectionstring=
			"Data Source=TRBZNLUD;Initial Catalog=ogrencikayit;User ID=sqldb;Password=123456;Provider=SQLOLEDB";
		connection.Open(connectionstring);
		var rs = new ActiveXObject("ADODB.Recordset");
		var sql = "SELECT * From kullanici where kullaniciAdi='"+a+"' and sifre='"+b+"'";
		rs.Open(sql,connection);
		if(!rs.eof){
			location.href="anasayfa.html";
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
* @memberOf ogrencikayit.index
*/
//	,

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ogrencikayit.index
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ogrencikayit.index
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ogrencikayit.index
*/
//	onExit: function() {
//
//	}

});
//testi buraya yaz
