function calculateTriangleArea() {
      const triangleBaseInput = document.getElementById('triangle-base');
      const triangleBaseText = triangleBaseInput.value;
      const base =parseFloat(triangleBaseText)
      console.log(base);

      const triangleHeightInput =document.getElementById('triangle-height');
      const triangleHeighValue = triangleHeightInput.value;
      const height =parseFloat(triangleHeighValue);
      console.log(height);

      const area1 =0.5 * base *height ;
      console.log('Area of the triangle is:' ,area1) ;

      const triangleAreaSpan = document.getElementById('triangle-area');
      triangleAreaSpan.innerText=area1;

}

function calculateRectangleArea (){
     const rectangleWidthInput = document.getElementById('rectangle-width');  
     const rectangleWidthText =rectangleWidthInput.value;
     const width = parseFloat(rectangleWidthText) ;    
     console.log(width)  ;

     const rectangleLengthInput=document.getElementById('rectangle-length');
     const rectangleLengthText=rectangleLengthInput.value;
     const length =parseFloat(rectangleLengthText);
     console.log(length);

     const area2 = width * length ;
     console.log('Area of the triangle is:',area2);

     const rectangleAreaSpan = document.getElementById('rectangle-area');
     rectangleAreaSpan.innerText=area2;
}



