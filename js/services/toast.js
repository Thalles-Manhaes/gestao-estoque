// var toast = new bootstrap.Toast(toastEl);

function toastNotification(type, message, placement = 'top-right') {
  const toastContainer = document.createElement('div')
  toastContainer.classList.add('toast-container')
  toastContainer.classList.add('position-fixed')
  toastContainer.classList.add('p-3')
  toastContainer.setAttribute('style', 'z-index: 11')

  const toastPlacement = {
    'top-right': 'top-0 end-0',
    'top-left': 'top-0 start-0',
    'bottom-left': 'bottom-0 end-0',
    'bottom-right': 'bottom-0 start-0',
    'top-center': 'top-0 start-50 translate-middle-x',
    'middle-left' : 'top-50 start-0 translate-middle-y',
    'middle-center' : 'top-50 start-50 translate-middle',
    'middle-right': 'top-50 end-0 translate-middle-y',
    'middle-center': 'bottom-0 start-50 translate-middle-x'

  }

  const toastPlacementSplit = toastPlacement[placement].split(' ')
  
  toastPlacementSplit.forEach((value)=> {
    toastContainer.classList.add(value)
  })
  
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.classList.add('align-items-center')
  toast.classList.add('text-white')
  toast.classList.add(`bg-${type}`)
  toast.classList.add('border-0')
  toast.setAttribute('role', 'alert')
  toast.setAttribute('aria-live', 'assertive')
  toast.setAttribute('aria-atomic', 'true')

  const dFlex = document.createElement('div')
  dFlex.classList.add('d-flex')
  
  const toastBody = document.createElement('div')
  toastBody.classList.add('toast-body')
  toastBody.textContent = message

  const buttonToast = document.createElement('button')
  buttonToast.classList.add('btn-close')
  buttonToast.classList.add('btn-close-white')
  buttonToast.classList.add('me-2')
  buttonToast.classList.add('m-auto')
  buttonToast.setAttribute('data-bs-dismiss', 'toast')
  buttonToast.setAttribute('aria-label', 'Close')



  dFlex.append(toastBody)
  dFlex.append(buttonToast)

  toast.append(dFlex)
  toastContainer.append(toast)
  document.body.append(toastContainer)
  const toastEvent = new bootstrap.Toast(toastContainer)
  toastEvent.show()

}