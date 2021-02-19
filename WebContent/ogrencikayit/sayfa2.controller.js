sap.ui.controller("ogrencikayit.sayfa2", {
	//id si girilen öğrenciyi görüntüleme
	clickButton : function() {
		var a = document.getElementsByName("id")[0].value;
		var connection = new ActiveXObject("ADODB.Connection") ;
		var connectionstring="Data Source=TRBZNLUD;Initial Catalog=ogrencikayit;User ID=sqldb;Password=123456;Provider=SQLOLEDB";
		connection.Open(connectionstring);
		var rs = new ActiveXObject("ADODB.Recordset");
		var sql = "SELECT * From ogrenciler where id='"+a+"'";
		rs.Open(sql,connection);
		if(!rs.eof){
			rs.MoveFirst
			document.write("id :"+rs.fields(0)+"</br>"+"Ad Soyad:"+rs.fields(1)+" "+rs.fields(2)+"</br>"+"Sınıfı :"+rs.fields(3)+"</br>");
		}
		else
			{
			alert("Böyle bir ID sahibi öğrencimiz bulunmamaktadır...");
			}
		connection.close;
	}
/**
* Called when a controller is instantiated and its View controls (if available) are already created.
* Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
* @memberOf ogrencikayit.sayfa2
*/
//	onInit: function() {
//
//	},

/**
* Similar to onAfterRendering, but this hook is invoked before the controller's View is re-rendered
* (NOT before the first rendering! onInit() is used for that one!).
* @memberOf ogrencikayit.sayfa2
*/
//	onBeforeRendering: function() {
//
//	},

/**
* Called when the View has been rendered (so its HTML is part of the document). Post-rendering manipulations of the HTML could be done here.
* This hook is the same one that SAPUI5 controls get after being rendered.
* @memberOf ogrencikayit.sayfa2
*/
//	onAfterRendering: function() {
//
//	},

/**
* Called when the Controller is destroyed. Use this one to free resources and finalize activities.
* @memberOf ogrencikayit.sayfa2
*/
//	onExit: function() {
//
//	}

});