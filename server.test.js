const request=require('supertest')
//const app=require('./routes/User')
const {app,connectToDB}=require('./server')


describe("Test the root path",()=>{
    beforeAll(() => {
        //jest.setTimeout(90 * 1000)
        connectToDB();
    });

    test("Ite should response the POST method",async()=>{
        const response=await request(app).post("http://localhost:8000/User/add").send({
            "Name":"Zeeshan",
            "Email":"zeeahn@gmail.com",
            "Age":12,
            "Contact":123
        })
        console.log(response);
        expect(response.statusCode).toBe(200)
    })
    test("Ite should response the GET method",async()=>{
        const response=await request(app).get("http://localhost:8000/get").send({
            "Name":"Zeeshan",
            "Email":"zeeahn@gmail.com",
            "Age":12,
            "Contact":123
        })
        console.log(response);
        expect(response.statusCode).toBe(200)
    })


    describe("Test delete method",()=>{
        //beforeAll(() => jest.setTimeout(90 * 1000))
        beforeAll(() => {
            //jest.setTimeout(90 * 1000)
            connectToDB();
        });
        test("should return 200 status code", async()=>{
            //id of HR
            const response=await request(app).delete('http://localhost:8000/User//634efa2747cb968eb564ed2c')
            expect(response.status).toBe(200)
        })
    })

})

































