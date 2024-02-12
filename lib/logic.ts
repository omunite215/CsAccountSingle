export const calculateTotalAmount = (totalShares:any, value:any) => {
    if (!totalShares || !value) return; // Handle missing values
    return totalShares * value;
  };