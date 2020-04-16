var currentTextInput;
var puzzelArrayData;
var error = false;



document.addEventListener('DOMContentLoaded', initializeScreen())
document.getElementById('completedGame').addEventListener('click', () => {
	checkClicked()

	var input = document.querySelectorAll('.inputBox');

	var dragElement2MyArray = [];
	for(var i = 0; i < input.length; i++ ){
		dragElement2MyArray.push(input[i])
	}

	checkEveryElement = function(element){
		return element.classList.contains('correct') == true;
	}

	let el = dragElement2MyArray.every(checkEveryElement)

	if(el == true){
		location.href = 'game-success-16.html'
	}
})

document.getElementById('resetBtn').addEventListener('click', () => clearAllClicked())



//Loads the Crossword
function initializeScreen(){
	var puzzelTable = document.getElementById("puzzel");
	puzzelArrayData = preparePuzzelArray();
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var row = puzzelTable.insertRow(-1);
		var rowData = puzzelArrayData[i];

		for(var j = 0 ; j < rowData.length ; j++){
			var cell = row.insertCell(-1);
			if(rowData[j] != 0){
				var txtID = String('txt' + '_' + i + '_' + j);
				cell.innerHTML = '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
			}else{
				cell.style.backgroundColor  = "transparent";
				cell.style.border  = "0";
			}
		}
	}
	addHint();
}
//Adds the hint numbers
function addHint(){
	$('#txt_0_14').parent().append('<span>1</span>')
	$('#txt_2_9').parent().append('<span>2</span>')
	$('#txt_4_4').parent().append('<span>3</span>')
	$('#txt_4_7').parent().append('<span>4</span>')
	$('#txt_4_12').parent().append('<span>5</span>')
	$('#txt_5_4').parent().append('<span>6</span>')
	$('#txt_8_0').parent().append('<span>7</span>')
	$('#txt_14_0').parent().append('<span>8</span>')
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
var items = [	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ც'],

                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 'ხ'],

                [0, 0, 0, 0, 0, 0, 0, 0, 0, 'გ', 0, 0, 0, 0, 'რ'],

                [0, 0, 0, 0, 0, 0, 0, 0, 0, 'ა', 0, 0, 0, 0, 'ი'],

                [0, 0, 0, 0, 'გ', 0, 0, 'დ', 0, 'ნ', 0, 0, 'შ', 0, 'ლ'],

                [0, 0, 0, 0, 'ა', 'პ', 'ლ', 'ი', 'კ', 'ა', 'ც', 'ი', 'ე', 'ბ', 'ი'],

                [0, 0, 0, 0, 'ფ', 0, 0, 'ა', 0, 'ხ', 0, 0, 'ც', 0, 0],

                [0, 0, 0, 0, 'რ', 0, 0, 'გ', 0, 'ლ', 0, 0, 'დ', 0, 0],

                ['ს', 'უ', 'რ', 'ა', 'თ', 'ი', 0, 'რ', 0, 'ე', 0, 0, 'ო', 0, 0],

                [0, 0, 0, 0, 'ხ', 0, 0, 'ა', 0, 'ბ', 0, 0, 'მ', 0, 0],

                [0, 0, 0, 0, 'ი', 0, 0, 'მ', 0, 'ა', 0, 0, 'ა', 0, 0],

                [0, 0, 0, 0, 'ლ', 0, 0, 'ა', 0, 0, 0, 0, 0, 0, 0],

                [0, 0, 0, 0, 'ე', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],

                [0, 0, 0, 0, 'ბ', 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                
			    ['დ', 'ა', 'ხ', 'მ', 'ა', 'რ', 'ე', 'ბ', 'ა', 0, 0, 0, 0, 0, 0]
			];
		return items;
}
//Clear All Button
function clearAllClicked(){
	currentTextInput = '';
	var puzzelTable = document.getElementById("puzzel");
	puzzelTable.innerHTML = '';
    initializeScreen();
}



//Check button
function checkClicked(){
	for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
		var rowData = puzzelArrayData[i];
		for(var j = 0 ; j < rowData.length ; j++){
			if(rowData[j] != 0){
				var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
				if(selectedInputTextElement.value != puzzelArrayData[i][j]){
					selectedInputTextElement.classList.remove('correct')
					selectedInputTextElement.classList.add('error')

				}else{
					selectedInputTextElement.classList.remove('error')
					selectedInputTextElement.classList.add('correct')
					selectedInputTextElement.style.backgroundColor = 'white';
				}
			}
		}
	}
}