const express=require('express')
const app=express()

app.set("view engine","ejs")
app.use(express.urlencoded({ extended: true }))
app.use((req,res,next)=>{
    next()
})
let data=[
    {
        id:1,
        name:"Rutul Lathiya",
        mobile:9898098980
    }
]
app.get('/',(req,res)=>{
    res.render("index",{data})
})
app.post('/',(req,res)=>{
    let getReqBodyId=req.body.id
    console.log(getReqBodyId)
    if(getReqBodyId){
            data.filter((val)=>{
                if(val.id==getReqBodyId){
                    val.name=req.body.name;
                    val.mobile=req.body.mobile
                }
            })        
        return res.redirect('/')
    } else {
        let generateId=data.length+1
        data.push({
            id:generateId,
            name:req.body.name,
            mobile:req.body.mobile
        })
    }
    
    return res.redirect('/')
})
app.get('/insert',(req,res)=>{
    let getReqBodyId=req.query.id
    // if(getReqBodyId){
    //     let editData=data.filter((val)=>{
    //         if(val.id==getReqBodyId){
    //             val.name=res.body.name;
    //             val.mobile=res.body.mobile
    //         }
    //     }).then(()=>{
    //         console.log("Updated")
    //     })
    // }
    // data=editData
    console.log(getReqBodyId)
    return res.redirect('/')
})
app.get('/delete',(req,res)=>{
    let getId=req.query.id
    let del=data.filter((val)=> val.id!=getId )
    data=del
    return res.redirect('/')
})


app.listen(5500)