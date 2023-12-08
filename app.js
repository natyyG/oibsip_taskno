degree = document.getElementById('degree')
temp = document.getElementById('temp')
convResult = document.getElementById('result')
convertbtn = document.getElementById('convertbtn')
convertbtn.addEventListener('click', () => {
    if(temp.value == "celsius"){
        result = ((parseInt(degree.value)) - 32) * 5/9;
        convResult.value = result.toFixed(4) + " F";
    }else if(temp.value == "fahrenheit"){
        result = (parseInt(degree.value) * 9/5) + 32;
        convResult.value = result.toFixed(4) + " C";
    }
});
console.log(degree)