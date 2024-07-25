function fetchData(callback) {
    setTimeout(() => {
        callback("데이터 로드 완료");
    }, 2000);
}

fetchData((message) => {
    console.log(message); // "데이터 로드 완료" (2초 후 출력)
});

console.log("finished!")