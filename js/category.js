const formControlcategoryParent = document.querySelector('#formControlcategoryParent')
const checkCategoryPrincipal = document.querySelector('#checkCategoryPrincipal')

function toggleCategoryParent(e){
     const isChecked = e.target.checked
     formControlcategoryParent.style.display = isChecked ? 'none' : 'block'
}
checkCategoryPrincipal.addEventListener('change', toggleCategoryParent)

