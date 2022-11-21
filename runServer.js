const {app}=require('./server')
const connectDB =require('./db/connect.js')


const port = process.env.PORT || 8000;

app.listen(port, async() => {
    try{
        await connectDB()
        console.log(`Server is running on port: ${port}`);
    }catch(e){
        console.log(e)
    }
    
});
