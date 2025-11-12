        let displayValue ='0';
        let rotation = 0;
        let scale = 1;

        //CALCULATOR FUNCTIONS
        function press(value){
            if (displayValue==='0' && value !=='.'){
                displayValue = value;
            } else {
                displayValue += value;
            }
            document.getElementById('display').textContent = displayValue;
        }
        function clearDisplay() {
            displayValue = '0';
            document.getElementById('display').textContent = displayValue;
        }
        function calculate(){
            try{
                displayValue = eval(displayValue).toString();
                document.getElementById('display').textContent = displayValue;
            }catch (error){
                displayValue = "Error";
                document.getElementById('display').textContent = displayValue;
                setTimeOut(() =>clearDisplay(),1500);
            }
        }

//INTERACTIVE DEMO FUNCTIONS
        function rotateShape(){
            rotation += 45;
            updateTransform();
        }

        function scaleShape(){
            scale = scale === 1 ? 1.3 : 1;
            updateTransform();
        }
        function resetShape(){
            rotation = 0;
            scale = 1;
            updateTransform();
        }

        function updateTransform(){
            const box =document.getElementById('shapeBox');
            box.style.transform = `rotate(${rotation}deg) scale(${scale})`;
        }

        function changeColor(color){
            document.getElementById('shapeBox').style.background = color;
        }

        function changeBorder(radius){
            document.getElementById('shapeBox').style.borderRadius = radius;
        }