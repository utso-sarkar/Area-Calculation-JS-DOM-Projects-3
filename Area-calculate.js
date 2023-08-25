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
    

}