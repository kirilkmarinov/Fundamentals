function paintMatrix(n) {

    for (var i = 1; i <= n; i++) {
      var result = "";
      for (var j = 1; j <= n; j++) {
        result = result + (i + j - 1);
      }
      console.log(result);
    }
}

paintMatrix(3);