var nonChar = "" 
window.onload=init;         
function init()   {
    var char = "0123456789";
    keyValue = ""; 
    for (i=0 ;  keyValue.length < 10; i++){
        rand = Math.round(Math.random()*10);
        if(keyValue.indexOf(rand)>-1) continue;
        keyValue += char.substring(rand, rand+1);
        }
      console.log(keyValue);
    counter = -1;
    while(counter < 9){
    counter++
    document.querySelector("#num"+counter).value = keyValue[counter]; 
    
    }
    
 }   
          
 
 
var encodeXor = false;
 
$(function() {
	 
	$('.postClavier').val('');
	
	if(typeof(flag) == "undefined" || (typeof(flag) != "undefined" && flag == false)) {
		flag = true;
		 
		$(".btn").on("click", function(){ 
			var touche = this.value;
			
			var divParent = $(".pwdFields", $(this).parent().parent().parent()); 
			var password = $(divParent).children(".password");
			var code = $(password).val(); 
			var postClavier = $(divParent).children(".postClavier");
			var num = $(postClavier).val();
			
			if(code.length <6){
				num = num +''+ touche;
				$(postClavier).val(num);
				code = code + '' + "*";
				$(password).val(code);
				encodeXor = false;
			}
		});
		 
		$(".vide").on("click", function(){
			if(this.id.indexOf('clr', 0) != -1){ 
				var divParent = $(".pwdFields", $(this).parent().parent().parent()); 
				$(divParent).children(".password").val('');
				$(divParent).children(".postClavier").val('');
				encodeXor = false;
			}
		});
	}
	 
});


