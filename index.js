document.getElementById("check-btn").addEventListener("click", ()=> {
    const textInput = document.getElementById("text-input").value;
    const reversedText = textInput.split("").reverse().join("");
    const result = document.getElementById("result");

    if (textInput === "") {
        alert("Please input a value");
        return;
    }
    if (textInput.length==1){
        result.innerText=`${textInput} is a palindrome`;
        result.style.display="block";
    }
    if (
      textInput.replace(/[^a-zA-Z0-9]/g, "").toUpperCase() ===reversedText.replace(/[^a-zA-Z0-9]/g, "").toUpperCase()
    ){
      result.innerText = `${textInput} is a palindrome`;
      result.style.display = "block";
    }
    else {
      result.innerText = `${textInput} is not a palindrome`;
      result.style.display = "block";
    }
});
