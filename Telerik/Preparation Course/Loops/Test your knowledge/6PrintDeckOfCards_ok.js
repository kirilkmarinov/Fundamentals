let input = [
    'K', 
  
  ];
  
  let print = this.print || console.log;
  let gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);

  let inp = gets().toUpperCase()
  let signs = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
  if (inp === "J"){
    inp = "11"
  } else if(inp === "Q"){
    inp = "12"
  } else if(inp === "K"){
    inp = "13"
  } else if(inp === "A"){
    inp = "14"
  }
  inp = Number(inp)
  for(let i = 0; i <= inp-2; i++)
  {
  print(signs[i] + " of spades, " + signs[i] + " of clubs, " + signs[i] + " of hearts, " + signs[i] + " of diamonds")
  }