// Example helper: calculate total price from a list of items
export function calculateTotal(items) {
  if (!Array.isArray(items)) return 0;

  return items.reduce((total, item) => {
    const price = item.price || 0;
    const quantity = item.quantity || 1;
    return total + price * quantity;
  }, 0);
}

export function calculatePersonalStylesScore(scores) {
    const groupStyles = { "D":0 , "I":0 , "S":0 , "A":0 }
    console.log(scores)
   
    Object.entries(scores).forEach(([key, value]) => {
        if (key === "1") {
            groupStyles.D += value
        } else if (key === "2") {
            groupStyles.I += value
        } else if (key === "3") {
            groupStyles.S += value
        } else if (key === "4") {
            groupStyles.A += value
        }
    })
    
    return groupStyles
}