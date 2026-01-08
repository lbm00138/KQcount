document.addEventListener('DOMContentLoaded', function() {
    const Result = document.getElementById('result');
    Result.value = '';
    let Prenum = '';
    let Subresult = '';
    let num1 = 0;
    let num2 = 0;
    const One = document.getElementById('one');
    const Two = document.getElementById('two');
    const Three = document.getElementById('three');
    const Four = document.getElementById('four');
    const Five = document.getElementById('five');
    const Six = document.getElementById('six');
    const Seven = document.getElementById('seven');
    const Eight = document.getElementById('eight');
    const Nine = document.getElementById('nine');
    const Zero = document.getElementById('zero');
    const ZeroZero = document.getElementById('zerozero');
    const Decimal = document.getElementById('decimal');
    const Add = document.getElementById('add');
    const Subtract = document.getElementById('subtract');
    const Multiply = document.getElementById('multiply');
    const Divide = document.getElementById('divide');
    const Rev = document.getElementById('rev');
    const Open = document.getElementById('open');
    const Clear = document.getElementById('clear');
    const Left = document.getElementById('left');
    const Right = document.getElementById('right');
    const Sqrt = document.getElementById('sqrt');
    const Equals = document.getElementById('equals');
    const Sine = document.getElementById('sine');
    const Cosin = document.getElementById('cosin');
    const Panel = document.getElementById('panel');
    const Btnpanel = document.getElementById('btnpanel');

    function appendDigit(d) {
        if (Prenum === '0') Prenum = d;
        else Prenum = Prenum + d;
    }

    function appendDot(){
        if (!Prenum.includes('.')){
            if (Prenum === '') Prenum = '0.';
            else Prenum = Prenum + '.';
        }
    }

    function update(){
        Result.value = Subresult + Prenum;
        Result.scrollLeft = Result.scrollWidth;
    }

    function EndWithError(){
        Panel.animate([
            {backgroundColor:'rgb(150,150,150)',offset:0},
            {backgroundColor:'rgb(150,150,150)',offset:0.25},
            {backgroundColor:'rgb(255,0,0)',offset:0.5},
            {backgroundColor:'rgb(150,150,150)',offset:0.8},
            {backgroundColor:'rgb(150,150,150)',offset:1},
        ],{
            duration: 500,
            iterations: 3,
            easing: 'linear'
        });
        Btnpanel.animate([
            {backgroundColor:'rgb(150,150,150)',offset:0},
            {backgroundColor:'rgb(150,150,150)',offset:0.25},
            {backgroundColor:'rgb(255,0,0)',offset:0.5},
            {backgroundColor:'rgb(150,150,150)',offset:0.8},
            {backgroundColor:'rgb(150,150,150)',offset:1},
        ],{
            duration: 500,
            iterations: 3,
            easing: 'linear'
        });
    }

    function EndSuccess(){
        Panel.animate([
            {backgroundColor:'rgb(150,150,150)',offset:0},
            {backgroundColor:'rgb(150,150,150)',offset:0.25},
            {backgroundColor:'rgb(0,255,0)',offset:0.5},
            {backgroundColor:'rgb(150,150,150)',offset:0.8},
            {backgroundColor:'rgb(150,150,150)',offset:1},
        ],{
            duration: 500,
            iterations: 3,
            easing: 'linear'
        });
        Btnpanel.animate([
            {backgroundColor:'rgb(150,150,150)',offset:0},
            {backgroundColor:'rgb(150,150,150)',offset:0.25},
            {backgroundColor:'rgb(0,255,0)',offset:0.5},
            {backgroundColor:'rgb(150,150,150)',offset:0.8},
            {backgroundColor:'rgb(150,150,150)',offset:1},
        ],{
            duration: 500,
            iterations: 3,
            easing: 'linear'
        });
    }

    One.addEventListener('click', () => {
        appendDigit('1');
        update();
    });
    Two.addEventListener('click', () => {
        appendDigit('2');
        update();
    });
    Three.addEventListener('click', () => {
        appendDigit('3');
        update();
    });
    Four.addEventListener('click', () => {
        appendDigit('4');
        update();
    });
    Five.addEventListener('click', () => {
        appendDigit('5');
        update();
    });
    Six.addEventListener('click', () => {
        appendDigit('6');
        update();
    });
    Seven.addEventListener('click', () => {
        appendDigit('7');
        update();
    });
    Eight.addEventListener('click', () => {
        appendDigit('8');
        update();
    });
    Nine.addEventListener('click', () => {
        appendDigit('9');
        update();
    });
    Zero.addEventListener('click', () => {
        appendDigit('0');
        update();
    });
    ZeroZero.addEventListener('click', () => {
        if (Prenum !== '' && Prenum != '0') {
            appendDigit('00');
            update();
        }
        else {
            appendDigit('0');
            update();
        }
    });
    Add.addEventListener('click', () => {
        Subresult = Subresult + Prenum + '+';
        Prenum = '';
        update();
    });
    Subtract.addEventListener('click', () => {
        Subresult = Subresult + Prenum + '-';
        Prenum = '';
        update();
    });
    Multiply.addEventListener('click', () => {
        Subresult = Subresult + Prenum + '*';
        Prenum = '';
        update();
    });
    Divide.addEventListener('click', () => {
        Subresult = Subresult + Prenum + '/';
        Prenum = '';
        update();
    });
    Rev.addEventListener('click', () => {
        if (Prenum !== '' && Prenum.charAt(0) === '-') {
            Prenum = Prenum.slice(1);
        } else if (Prenum !== '' && Prenum !== '0') {
            Prenum = '-' + Prenum;
        }
        update();
    });
    Decimal.addEventListener('click', () => {
        appendDot();
        update();
    });
    Sqrt.addEventListener('click', () => {
        Subresult = Subresult + Prenum + '√(';
        Prenum = '';
        update();
    });
    Left.addEventListener('click', () => {
        Subresult = Subresult + Prenum + '(';
        Prenum = '';
        update();
    });
    Right.addEventListener('click', () => {
        Subresult = Subresult + Prenum + ')';
        Prenum = '';
        update();
    }); 
    Sine.addEventListener('click', () => {
        Subresult = Subresult + Prenum + 'sin(';
        Prenum = '';
        update();
    });
    Cosin.addEventListener('click', () => {
        Subresult = Subresult + Prenum + 'cos(';
        Prenum = '';
        update();
    });
    Open.addEventListener('click', () => {
        Subresult = '';
        Prenum = '';
        update();
    });
    Clear.addEventListener('click', () => {
        Prenum = '';
        update();
    });
    Equals.addEventListener('click', () => {
        try {
            let expression = Subresult + Prenum;
            expression = expression.replace(/√\(/g, 'Math.sqrt(');
            expression = expression.replace(/sin\(/g, 'Math.sin(');
            expression = expression.replace(/cos\(/g, 'Math.cos(');
            let result = eval(expression);
            if (result === Infinity || result === -Infinity) {
                Result.value = 'Ma Error';
                EndWithError();
            }
            else if (isNaN(result)) {
                Result.value = 'Syn Error';
                EndWithError();
            }
            else {
                Result.value = result;
                EndSuccess();
            }
        } 
        catch (error) {
            Result.value = 'Syn Error';
            EndWithError();
        }
    });
});
