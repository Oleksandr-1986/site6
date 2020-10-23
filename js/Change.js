const bigTitle = document.querySelector('.video__big_title')
const bigLabel = document.querySelector('.video__big_label')
const item = document.querySelectorAll('.video__column_item')
const litleTitle = document.querySelectorAll('.video__column_title')
const litleLable = document.querySelectorAll('.video__column_label')

function changeText(){
	for (let i = 0 ; i < item.length; i++) {
		item[i].addEventListener('click', function(){
			bigTitle.textContent = litleTitle[i].textContent
			bigLabel.textContent = litleLable[i].textContent
		})
	}		
}
changeText()