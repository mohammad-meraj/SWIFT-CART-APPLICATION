1) What is the difference between null and undefined?<br>
উত্তরঃ Code লিখার সময় যদি  Variable লিখা হই,কিন্তু তাতে কোন মান(value) রাখা না হয়- তখন Java Script একে undefined  দরে নেই।<br><br>
     উদাহরনঃ <br>

                      let x;
            console.log(x);
                 {output:undefined}
     <br>   'যেহেতু x এর কোন মান দেয়া হইনি,তাই Java Script একে undefined  দরে নেই'
<br>
<br>   আবার, Code লিখার সময় যদি  Variable লিখা হই, তাতে মান(value= null) রাখা  হয়- তখন Java Script একে null  দরে নেই।
<br>          null মানে হলো ইচ্ছাকৃতভাবে খালি রাখা 
<br>     উদাহরণ:

                 let x= null ;
                 
                        console.log(x);        {output= null}
<br>         . Value null হলে, পরবরতেতা যে কোন মান রাখা যাই।
<br>         . undefined JavaScript নিজে সেট করে, আর null ডেভেলপার সেট করে।
<br>        . undefined type হল undefined ।
<br>        . null type হল object।

2) What is the use of the map() function in JavaScript? How is it different from forEach()?
<br>উত্তরঃ map():" map() হল এমন একটি ফাংশন যা একটা নতুন array তৈরি করে, যেখানে মূল array-এর প্রতিটি উপাদানকে পরিবর্তন করে
<br> নতুন মান রাখা হয়।"
<br>   . map() function, Array এর প্রতিটি element এর উপর কাজ করে। প্রতিটি element পরিবর্তন করে নতুন Array return করে।
<br>
   <br>উদাহরনঃ <br>
   
              const num = [3,12,4,6,32,2];
   
          const newArray = numbers.map(a => a + 5);

                console.log(newArray);
          {output:  [8,17,9,11,37,7]}
    
<br>      forEach():"forEach() হল এমন একটি ফাংশন যা প্রতিটি উপাদানের জন্য একটা কাজ করে — কিন্তু কোনো নতুন array ফেরত
 <br>                          দেয়না। এটা undefined রিটার্ন করে।"

উদাহরণ:

               const numbers = [1, 2, 3, 4];

                   numbers.forEach(num => {
                             console.log(num * 2);
                                           });
                  {output: 2
                           4
                           6
                           8
                              }

3) What is the difference between == and ===?

<br> উত্তরঃ "  JavaScript-এ == এবং === দুটোই comparison operator, মান ও টাইপ চেক করতে বা তুলনা করতে এ অপারেটর গুলো  
<br>         ব্যবহার করা হয়।"
<br>      . (==) Loose Equality: মান মিললে true → টাইপ মিল না থাকলেও ture  ,শুধু মান মিললেই হলো
<br>       . (===) Strict Equality: মান + টাইপ দুটোই একই হতে হবে । মান এবং টাইপ দুটোই একই হলে মান true ,না হয় false।

  উদাহরণ:
  
          console.log(5 == "5");       {true   → "5" কে number-এ পরিবর্তন করে 5 এর সাথে মিলিয়েছে}
          console.log(5 === "5");      { false  → টাইপ আলাদা (number vs string)}

4) What is the significance of async/await in fetching API data?
<br>উত্তরঃ " async/await API থেকে asynchronous ডাটা fetch করার সময় কোডকে সহজ, পরিষ্কার ও readable করে তোলে।
<br>        এটি Promise handle করার একটি সহজ পদ্ধতি এবং error handle করাও সহজ।
<br>
 <br>     !! async/await হলো JavaScript-এর একটি feature যা, Asynchronous কোডকে সহজভাবে লিখতে সাহায্য করে,Promise কে 
 <br>      সহজভাবে handle করতে সাহায্য করে কোডকে synchronous এর মতো দেখায়।
 <br>     !! যখন আমরা API থেকে ডাটা fetch করি, তখন সেটা সময় নেয়। কারণ সার্ভার থেকে ডাটা আসতে কিছু সময় লাগে। এতে
 <br>        data load হয় randomly.কিন্ত async/await data দরে রাখে. কোডকে লাইন বাই লাইন এর মতো দেখায়।
<br>
   <br> উদাহরণ:
   
          const loadData = async () => {
          const res = await fetch(url);
          const data = await res.json();
          console.log(data);
                                };
6) Explain the concept of Scope in JavaScript (Global, Function, Block).
<br>উত্তরঃ"  Scope নির্ধারণ করে একটি ভ্যারিয়েবল কোথায় থেকে ব্যবহার করা যাবে। 
<br>        Global Scope পুরো প্রোগ্রামে ব্যবহারযোগ্য।Function Scope শুধু ফাংশনের ভিতরে সীমাবদ্ধ।
 <br>       Block Scope {} এর ভিতরে সীমাবদ্ধ এবং এটি সাধারণত let ও const দিয়ে তৈরি হয়। "
<br>
<br>   ** Global Scope:
 <br>            যে ভ্যারিয়েবল ফাংশনের বাইরে declare করা হয়, তাকে Global Scope বলে। এটি পুরো প্রোগ্রাম থেকে ব্যবহার করা যায়।
<br>
  <br> উদাহরণ:

          let name = "Meraj";  // Global variable

               function valu() {
                  console.log(name);
                             }

                          valu();

                { এখানে name সব জায়গা থেকে access করা যাচ্ছে।}

<br>
    <br>** Function Scope:
    <br>          যে ভ্যারিয়েবল কোনো function এর ভিতরে declare করা হয়, তাকে Function Scope বলে। এটি শুধু ওই function 
    <br>          এর ভিতরেই ব্যবহার করা যাবে।
<br>
    <br> উদাহরণ:
    
        function greet() {
           let message = "Hello Teachers";
           console.log(message);
                         }

                  greet();
                 console.log(message); // Error
     
         { message শুধু function এর ভিতরে valid। বাইরে থেকে কল করলে unvalid}



  <br>**Block Scope:
 <br>let এবং const দিয়ে declare করা ভ্যারিয়েবল { } এর ভিতরে থাকলে তা Block Scope হয়। এটি শুধু ওই block
 <br>       এর ভিতরেই কাজ করবে।
<br>
    <br> উদাহরণ:
    
              {
                let age = 25;
                      console.log(age);
                         }

                        console.log(age); // Error


                       { কারণ age block এর বাইরে access করা যাবে না।}


