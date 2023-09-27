const Event2=require("events"); // yismae capital E likhna hai
const event1= new Event2(); // ye as a  class kaam karta hai;
event1.on('saymyname',(src,msg,detail)=>{
    console.log(` my page number is ${src} and msg is ${msg} and it is about ${detail}`);
});

event1.emit("saymyname",200,"ok","what the fuck");
//event.emit
