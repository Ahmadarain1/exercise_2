if(data2.style.display = 'block' && data3.style.display != 'none' && data4.style.display != 'none')
{
    data2.style.display = 'none';
    data3.style.display = 'none';
    data4.style.display = 'none';
}
function next(){
    let btn2= document.getElementById('btn2')
    let data1= document.getElementById('data1')
    let data2= document.getElementById('data2')
    let data3= document.getElementById('data3')
    let data4= document.getElementById('data4')
 
    if(data2.style.display = 'none' && data1.style.display != 'none' ){
        data2.style.display = 'block';
        data1.style.display = 'none'; 
    }else if(data3.style.display = 'none' && data2.style.display != 'none' ){
        data3.style.display = 'block';
        data2.style.display = 'none';
    }else if(data4.style.display = 'none' && data3.style.display != 'none'){
        data4.style.display = 'block';
        data3.style.display = 'none';
    }else{
        console.log('error');
    }
}

function back(){
    let btn2= document.getElementById('btn2')
    let data1= document.getElementById('data1')
    let data2= document.getElementById('data2')
    let data3= document.getElementById('data3')
    let data4= document.getElementById('data4')
 
    if(data3.style.display = 'none' && data4.style.display != 'none' ){
        data3.style.display = 'block';
        data4.style.display = 'none'; 
    }else if(data2.style.display = 'none' && data3.style.display != 'none' ){
        data2.style.display = 'block';
        data3.style.display = 'none';
    }else if(data1.style.display = 'none' && data2.style.display != 'none'){
        data1.style.display = 'block';
        data2.style.display = 'none';
    }else{
        console.log('error');
    }
}

function random(){
    let btn3= document.getElementById('btn3')
    let data1= document.getElementById('data1')
    let data2= document.getElementById('data2')
    let data3= document.getElementById('data3')
    let data4= document.getElementById('data4')
 
    if(data2.style.display = 'none' && data4.style.display != 'none' ){
        data2.style.display = 'block';
        data4.style.display = 'none'; 
    }else if(data1.style.display = 'none' && data2.style.display != 'none' ){
        data1.style.display = 'block';
        data2.style.display = 'none';
    }else if(data3.style.display = 'none' && data1.style.display != 'none' ){
        data3.style.display = 'block';
        data1.style.display = 'none';
    }else if(data2.style.display = 'none' && data3.style.display != 'none'){
        data2.style.display = 'block';
        data3.style.display = 'none';
    }else if(data4.style.display = 'none' && data2.style.display != 'none'){
        data4.style.display = 'block';
        data2.style.display = 'none';
    }else if(data3.style.display = 'none' && data4.style.display != 'none'){
        data3.style.display = 'block';
        data4.style.display = 'none';
    }else{
        console.log('error');
    }
}
