export function getFormattedNumber(number) {
   return number.toString().replace(/\B(?=(\d{4})+(?!(\d)))/g, ' ')
  }


export function formatExpiryDate(number) {
   return number.toString().replace(/^(\d{2})(\d{2})$/g, '$1/$2')
}

