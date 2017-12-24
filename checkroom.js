$(function(){
	$('#hide1').hide();
	$('#hide2').hide();
	$('#hide3').hide();
	$('#hide4').hide();
	$('#hide5').hide();

	
	var today = new Date();	
	var datein = new Date();
	var dateout = new Date();
	datein = null;
	dateout = null;

	var chin = $('#chin');
	var chout = $('#chout');

	chin.attr({"min":today.getFullYear()+"-"+(today.getMonth()+1)+"-"+today.getDate()});
	
	chin.change(function(){
		datein = new Date(chin.val());
		$('#chout').attr({"min":datein.getFullYear()+"-"+(datein.getMonth()+1)+"-"+(datein.getDate()+1)});
	});

	chout.change(function(){
		dateout = new Date(chout.val());
		$('#chin').attr({"max":dateout.getFullYear()+"-"+(dateout.getMonth()+1)+"-"+(dateout.getDate()-1),"min":today.getFullYear()+"-"+(today.getMonth()+1)+"-"+(today.getDate()+1)});
	});

	var typeroom = [];
	typeroom.push({name:'SuiteRoom',num: 11 , dialog : 'SuiteRoom ยังว่าง', show : '#hide1' , roomamount : 3}); 
	typeroom.push({name:'JuniorSuite',num: 9 , dialog : 'JuniorSuite ยังว่าง' , show : '#hide2' , roomamount : 4}); 
	typeroom.push({name:'DeluxeRoom',num: 5 , dialog : 'DeluxeRoom ยังว่าง' , show : '#hide3' , roomamount : 5}); 
	typeroom.push({name:'SuperiorRoom',num: 4 , dialog : 'SuperiorRoom ยังว่าง' , show : '#hide4' , roomamount : 5}); 
	typeroom.push({name:'StandardRoom',num: 3 , dialog : 'StandardRoom ยังว่าง' , show : '#hide5' , roomamount : 10}); 

	$('#sentSuiteRoom').click(function(){
		$.ajax({
			url:"book.php",
			type:"POST",
			data:{ "roomname" : "SuiteRoom", "datein" : datein.getFullYear()+"-"+(datein.getMonth()+1)+"-"+datein.getDate() ,"dateout" : dateout.getFullYear()+"-"+(dateout.getMonth()+1)+"-"+dateout.getDate() } ,
			success:function(e){
		  		console.log(e);
		  	}
		});
	});
	$('#sentJuniorSuite').click(function(){
		$.ajax({
			url:"book.php",
			type:"POST",
			data:{ "roomname" : "JuniorSuite", "datein" : datein.getFullYear()+"-"+(datein.getMonth()+1)+"-"+datein.getDate() ,"dateout" : dateout.getFullYear()+"-"+(dateout.getMonth()+1)+"-"+dateout.getDate() } ,
			success:function(e){
		  		console.log(e);
		  	}
		});
	});
	$('#sentDeluxeRoom').click(function(){
		$.ajax({
			url:"book.php",
			type:"POST",
			data:{ "roomname" : "DeluxeRoom", "datein" : datein.getFullYear()+"-"+(datein.getMonth()+1)+"-"+datein.getDate() ,"dateout" : dateout.getFullYear()+"-"+(dateout.getMonth()+1)+"-"+dateout.getDate() } ,
			success:function(e){
		  		console.log(e);
		  	}
		});
	});
	$('#sentSuperiorRoom').click(function(){
		$.ajax({
			url:"book.php",
			type:"POST",
			data:{ "roomname" : "SuperiorRoom", "datein" : datein.getFullYear()+"-"+(datein.getMonth()+1)+"-"+datein.getDate() ,"dateout" : dateout.getFullYear()+"-"+(dateout.getMonth()+1)+"-"+dateout.getDate() } ,
			success:function(e){
		  		console.log(e);
		  	}
		});
	});
	$('#sentStandardRoom').click(function(){
		$.ajax({
			url:"book.php",
			type:"POST",
			data:{ "roomname" : "StandardRoom", "datein" : datein.getFullYear()+"-"+(datein.getMonth()+1)+"-"+datein.getDate() ,"dateout" : dateout.getFullYear()+"-"+(dateout.getMonth()+1)+"-"+dateout.getDate() } ,
			success:function(e){
		  		console.log(e);
		  	}
		});
	});
	

	$("#searchroom").click(function(){
		console.log("ok");
		$('#hide1').hide();
		$('#hide2').hide();
		$('#hide3').hide();
		$('#hide4').hide();
		$('#hide5').hide();
		if (datein == null || dateout == null) {
			$('#hide1').hide();
			$('#hide2').hide();
			$('#hide3').hide();
			$('#hide4').hide();
			$('#hide5').hide();
		}
		else {
		var adult = $('#adult');
		var kids = $('#kids');
		var intadult = parseInt(adult.val());
		var intkids = parseInt(kids.val());

		// $.ajax({
		// 	url:"datamanage.php",
		// 	type: "POST",
		// 	data:{"datein": datein ,"dateout": datein , "intadult" : intadult , "intkids" : intkids},
		// });

		$.ajax({
			url:"datamanage.php",
			type:"POST",
			dataType:"JSON",
			success:function(e){
				var history = e;
				
				for (var j = Object.keys(typeroom).length - 1; j >= 0; j--) {
					if (intadult + (intkids / 2) <= typeroom[j].num) {
						var nothing = 0;
						var checkadd1 = true;
						var checkadd2 = true;

						for (var i = Object.keys(history).length - 1; i >= 0; i--) {
							if(history[i].name == typeroom[j].name){
								if( !(dateout < history[i].checkin) ){
									checkadd1 = false;
								}
								if( !(datein > history[i].checkout) ){
									checkadd2 = false;
								}
								if( ( (dateout >  Date.parse(history[i].checkin)) && (datein <  Date.parse(history[i].checkout)) ) || ( (datein <  Date.parse(history[i].checkout)) && (dateout >  Date.parse(history[i].checkin)) ) ){
							    	nothing += 1;
								}
							}
						}
						if(checkadd1 || checkadd2){
							
							$(typeroom[j].show).show();
						}
						else if(nothing < typeroom[j].roomamount){
							
							$(typeroom[j].show).show();
						}
						else{
							console.log(typeroom[j].name + " fail ห้องเต็ม");
						}
						console.log("ห้อง"+typeroom[j].name+" ยังว่างอีก "+ (typeroom[j].roomamount-nothing) +"ห้อง");
						console.log("ห้อง"+typeroom[j].name+" ถูกใช้อยู่ในช่วงเวลานี้"+nothing);
					}
				}
			}
		});}

		
	});
	
	
});