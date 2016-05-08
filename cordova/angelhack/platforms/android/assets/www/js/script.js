$( document ).ready(function () {
    var delaySplash;
    delaySplash = window.setTimeout(showHome, 1000);
});

function showHome() {
    $('#splash').fadeOut( 500 );
    $('#login').fadeIn( 1000 );
}

function validateForm(){
				var txtUser = $("#txtUser").val();
				var txtPass = $("#txtPass").val();

				if(txtUser == "" || txtPass == ""){
					$("#msg").val("Verifica tu información.");
					$("#login").hide();
					$("#points").show();
				}else{
					$("#msg").val("");
					$("#login").hide();
					$("#points").show();
				}

			}