var App=(function(){
	function rw_val(){
		$('#input-taskName').val('');
		$('#input-taskDesc').val('');
	}
	function del_item(){
		$(this).parents('.taskItem').remove();
		
	}
	function add_item(){
		
		$('#taskContainer').append(`
				<div class="col col-md-12">
				<div id="taskContainer"  class="row">
					 <div class="col-sm-4 taskItem">
						<div class="card">
							<div class="card-block">
								<button type="button" class="close btn-delTask" aria-label="Close">
									<span aria-hidden="true">&times;</span>
								</button>
								<h3 class="card-title">`+$('#input-taskName').val()+`</h3>
								<p class="card-text">`+$('#input-taskDesc').val()+`</p>
							</div>
						</div>
					</div> 
				</div>
			</div> `
		
		);
		rw_val();
	}
	function button_click(){
		$('#btn-addTask').on('click',add_item);
		
		$('#taskContainer').on('click','.taskItem .btn-delTask',del_item);
	}
	function init(){
		
		button_click()
		
		
	}
	
	return {
		init
    }
	
})();