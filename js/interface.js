$('form#setTime').on('submit', function() {
	var that = $(this);
		url = that.attr("action"),
		type = that.attr('method'),
		data = {};
		
	that.find('[name]').each(function(indwx, value) {
		var that = $(this),
			name = that.attr('name'),
			value = that.val();
			
		data[name] = value;	
		
	});
	
	$.ajax({
		url: url,
		type: type,
		data: data,
		success: function(response) {
			
				
				
 				var alarmGet = data.time;
				 console.log(alarmGet);
				var alarmSet = 'new Date(' + alarmGet + ')';
	 			alarmTimesSet(alarmSet);
		
	},
});	
	return false; 
	

});
