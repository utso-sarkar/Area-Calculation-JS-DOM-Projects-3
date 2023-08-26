function triangleAreaCalcute(){
    const baseField =document.getElementById('traingle-base');
    const baseFieldText =baseField.value;
    const base = parseFloat(baseFieldText);
    console.log(base);

    // get triengle height
    const heightField =document.getElementById('traingle-height');
    const heightFieldText =heightField.value;
    const height =parseFloat(heightFieldText);
    console.log(height);

    const area = 0.5 * base * height;
    console.log(area);

    // area span calculation
    const areaSpan=document.getElementById("area-span");
    areaSpan.innerText=area;
    

}

// rectangle-calculation 
function rectangleArea(){
    const rectWidth=document.getElementById('rectangle-width');
    const reactValue =rectWidth.value;
    const width=parseFloat( reactValue);
    console.log(width);


    // react length
    const rectLength=document.getElementById('rectangle-length');
    const reactValueLength =rectLength.value;
    const length=parseFloat( reactValueLength);
    console.log(length);

    // area calculation 
const rectArea =width * length;
console.log(rectArea);

// show area 
const areaSpanRect =document.getElementById('area-RectSpan');
areaSpanRect.innerText=rectArea;
}

// para field calculation
function paraCalculationArea (){
    const base =getInputValue('para-width');
    console.log(base);
    const height =getInputValue('para-length')
    const area =base* height;
    const areaPara =document.getElementById('area-peraSpan');
    areaPara.innerText=area;
}

// reuseable section for all 
function getInputValue(fieldId){
    const inputField =document.getElementById(fieldId);
    const inputText =inputField.value;
    const value=parseFloat(inputText);
    return value;
}

