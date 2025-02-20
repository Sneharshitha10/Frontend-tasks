function clearBox() 
{
    document.getElementById('box').value = '';
}

function calculate()
{
    try {
        document.getElementById('box').value = eval(document.getElementById('box').value);
    } 
    catch 
    {
        document.getElementById('box').value = 'Error';
    }
}

function appendValue(value) 
{
    document.getElementById('box').value += value;
}

function deleteLast() 
{
    let box = document.getElementById('box');
    box.value = box.value.slice(0, -1); 
}