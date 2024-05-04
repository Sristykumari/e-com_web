export const getSortedData = (prodArr, sortBy) => {
    switch (sortBy) {
      case "PRICE_LOW_TO_HIGH":
        return prodArr.sort((a, b) => a.new_price - b.new_price);
  
      case "PRICE_HIGH_TO_LOW":
        return prodArr.sort((a, b) => b.new_price - a.new_price);
  
      case "CATEGORY_HIGH_TO_LOW":
        return prodArr.sort((a, b) => b.category - a.category);
  
      case "none":
        return prodArr;
  
      default:
        console.log("something is wrong with getSortedData...");
        return prodArr;
    }
  };
  