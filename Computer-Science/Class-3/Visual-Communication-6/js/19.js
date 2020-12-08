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
		location.href = 'game-success-19.html'
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
			
			} else{
				cell.setAttribute('style', "border: 0 !important; background: transparent");
			}
		}
	}
	addHint();
}
//Adds the hint numbers
function addHint(){
	$('#txt_0_5').parent().append('<span>1</span>')
	$('#txt_2_5').parent().append('<span>2</span>')
	$('#txt_5_3').parent().append('<span>3</span>')
	$('#txt_5_12').parent().append('<span>4</span>')
	$('#txt_6_2').parent().append('<span>5</span>')
	$('#txt_7_7').parent().append('<span>6</span>')
	$('#txt_8_7').parent().append('<span>7</span>')
	$('#txt_9_0').parent().append('<span>8</span>')
	$('#txt_11_4').parent().append('<span>9</span>')
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
	currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
var items = [	[0, 0, 0, 0, 0, 'პ', 0, 0, 0, 0, 0, 0, 0, 0],

                [0, 0, 0, 0, 0, 'ი', 0, 0, 0, 0, 0, 0, 0, 0 ],

                [0, 0, 0, 0, 0, 'ქ', 'ა', 'ნ', 'დ', 'ა', 'კ', 'ე', 'ბ', 'ა'],

                [0, 0, 0, 0, 0, 'ტ', 0, 0, 0, 0, 0, 0, 0, 0],

                [0, 0, 0, 0, 0, 'ო', 0, 0, 0, 0, 0, 0, 0, 0],

                [0, 0, 0, 'ლ', 'ო', 'გ', 'ო', 0, 0, 0, 0, 0, 'ფ', 0],

                [0, 0, 'ს', 0, 0, 'რ', 0, 0, 0, 0, 0, 0, 'ი', 0],

                [0, 0, 'უ', 0, 0, 'ა', 0, 'გ', 0, 0, 0, 0, 'ლ', 0],

                [0, 0, 'რ', 0, 0, 'მ', 0, 'რ', 'ე', 'კ', 'ლ', 'ა', 'მ', 'ა'],

                ['დ', 'ი', 'ა', 'გ', 'რ', 'ა', 'მ', 'ა', 0, 0, 0, 0, 'ი', 0],

                [0, 0, 'თ', 0, 0, 0, 0, 'ფ', 0, 0, 0, 0, 0, 0],

                [0, 0, 'ი', 0, 'ც', 'ხ', 'რ', 'ი', 'ლ', 'ი', 0, 0, 0, 0],

                [0, 0, 0, 0, 0, 0, 0, 'ტ', 0, 0, 0, 0, 0, 0],

			        	[0, 0, 0, 0, 0, 0, 0, 'ი', 0, 0, 0, 0, 0, 0]
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
