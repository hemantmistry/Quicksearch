$(document).ready(function(){
		
		$('#tabs div').hide();
		
		$('#tabs div:first').show();
		
		$('#tabs ul li:first').addClass('active');
		
		$('#tabs ul li a').click(function(){ 
		
			$('#tabs ul li').removeClass('active');
		
			$(this).parent().addClass('active'); 


			var currentTab = $(this).attr('href'); 

			$('#tabs div').hide();
		
			$(currentTab).show();


			return false;
		});
});




			<!--tabs with idea-->
			
								<div id="container">
								  <div id="tabs">
								    <ul>
								      <li><a href="#tab-1">Tab 1</a></li>
								      <li><a href="#tab-2">Tab Two</a></li>
								      <li><a href="#tab-3">Tab Three</a></li>
								    </ul>
								    <div id="tab-1">
								      <h3>Ideas</h3>
								      <p><img src=""/> <br/>
								        <a href=""></a> </p>
								    </div>
								    <div id="tab-2">
								      <h3>Ideas</h3>
								      <p><img src=""/> <br/>
								        <a href=""></a></p>
								    </div>
								    <div id="tab-3">
								      <h3>Ideas</h3>
								      <p><img src=""/><br/>
								        <a href=""></a></p>
								    </div>
								  </div>
								</div>
