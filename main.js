// let ab = ['sun','mon','tues','wed','thus','fri','sat']
// let m = Math.floor(Math.random() * 7)
// let ran_val = ab[m]
// console.log(ran_val);

// switch (ran_val) {
//     case 'sun':
//         console.log('Today is ' + ran_val);
//         break;
//     case 'mon':
//         console.log('Today is ' + ran_val);
//         break;
//     case 'tues':
//         console.log('Today is ' + ran_val);
//         break;
//     case 'wed':
//         console.log('Today is ' + ran_val);
//         break;
//     case 'thus':
//         console.log('Today is ' + ran_val);
//         break;
//     case 'fri':
//         console.log('Today is ' + ran_val);
//         break;
//     case 'sat':
//         console.log('Today is ' + ran_val);
//         break;
//     default:
//         break;
// }
// let all_val = ''
// for(let a = 0 ; a <= 10; a++){
//     document.write('I love You' + '<>')
//   all_val += a  
// }
// console.log(all_val);

// let arr = [3,4,6,7]
// for(let a of arr){
//    document.write(a) 
// }
// let obj = {
//     'name' : 'Rupom',
//     'age' : 23
// }
// console.log(obj['age']);
// for(let oo in obj){
//     console.log(obj[oo]);
// }

// try {
//     alerts('hello alert')
// } catch (err) {
//     document.write(err);
// }

// json

// let jsn = '{"name":"rupom","age": "23"}'
// let json_obj = JSON.parse(jsn)
// console.log(json_obj);
// let obj_json = JSON.stringify(json_obj)
// console.log(obj_json);



// let a_prom = new Promise(function(reject,resolve){
//     let sum = 5+5;
//     if(sum == 10){
//         resolve('this value is 10')
//     }else{
//         reject('this is not 10')
//     }
// })
// a_prom.then(
//     function(value){
//         console.log(value);
//     },
//     function(error){
//         console.log(error);
//     }
// )
// async function n_pormise(){
//     let na_promise = new Promise(function(resolve,reject){
//         let s = 12
//         if(s == 12){
//             resolve('its 12')
//         }else{
//             reject('its not 12')
//         }
//     })
//     let a_val = await na_promise;
//     console.log(a_val);
// }
// n_pormise();

// async function s_promise(){
//     let m_prom = new Promise(function(resolve,reject){
//         let h = 10;
//         let myhttp = new XMLHttpRequest();
//         myhttp.open('GET','text.txt');
//         myhttp.onload = function(){
//             if(this.status == 200){
//                 resolve(this.response)
//             }else{
//                 reject('NO data found')
//             }
//         }
//         myhttp.send();
//     })
//     let my_data = await m_prom;
//     console.log(my_data);
// }
// s_promise();

// document.getElementById('test').addEventListener('click',function(){
//     this.innerHTML = 'working with dom'
// })
// let a_promise = new Promise(function(resolve,reject){
//     let a_data = 12
//     if(a_data == 12){
//         resolve('This data is 12')
//     }else{
//         reject('This is not 12')
//     }
// })
// a_promise.then(
//     function(value){
//         console.log(value);
//         document.getElementById('all_data').innerHTML = value
//     },
//     function(error){
//         document.getElementById('all_data').innerHTML = error
//         console.log(error);
//     }
// )

// async function my_async(){
//     let my_prom = new Promise(function(resolve,reject){
//         let my_xml = new XMLHttpRequest();
//         my_xml.open("GET",'text.txt');
//         my_xml.onload = function(){
//             if(this.status == 200){
//                 resolve(this.response)
//             }else{
//                 reject('No data found')
//             }
//         }
//         my_xml.send()
//     })
//     document.getElementById('all_data').innerHTML = await my_prom
// }
// my_async()

// document.getElementById('c_1').addEventListener('click',function(){
    // console.log(screen.width );
    // console.log(screen.height );
    // window.location.href = 'https://www.w3schools.com/'
    // window.location.assign('https://www.w3schools.com/')
    // window.open('https://www.w3schools.com/','w3','width=300px,height=500px')
    // confirm("is it write")
    // if(confirm("is it write")){
    //     console.log("You pressed ok");
    // }else{
    //     console.log("You pressed cancel");
    // }
//     let my_name = prompt('What is your name')
//     if(my_name !== false && my_name !== null ){
//         console.log(my_name);
//     }else{
//         console.log("this field id empty");
//     }
// })

// let intv = setInterval(() => {
//     console.log("hello interval");
// }, 1000);
// let tmout = setTimeout(() => {
//     alert("hello timeout")
// }, 2000);
// clearInterval(intv);
// clearInterval(tmout);

