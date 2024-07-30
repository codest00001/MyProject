try {
    let result = 10 / 0;
    console.log(result); 
    throw new Error("임의의 에러 발생");
} catch (error) {
    console.error(error.message);
} finally {
    console.log("이 블록은 항상 실행됩니다.");
}