const expresss = require('express');
const app = expresss();
const port = process.env.PORT || 3000;
const router = expresss.Router();

// option + return 키를 통해서 function (err, res)를 Convert to arrow function으로 변환 해줍니다.
// arrow function이 가독성이 좋습니다.
router.get('/', (err, res) => {

    res.send("홈페이지에 방문하신것을 환영합니다.")

});

app.use(router)

app.listen(port, err => {
    if(err) console.log(err)
    else console.log("서버가 가동되었습니다.")
});