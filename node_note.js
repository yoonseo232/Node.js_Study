/*
1. 자료형
1-1. 기본자료형
    - boolean, null, number, string, symbol
1-2. 사용자 정의형
    - object
2. false로 취급되는 것
    - null
    - NaN
    - 0
    - 빈 문자열('',"",``)
    - undefined
3. 
    let
    - block 범위의 지역변수
    const
    - blcok 범위의 상수 (값 수정 불가)
    var

*/


/*
4. 함수(function)
*/
// - 일반적인 함수
function func1(text){
    console.log("출력 : "+text);
}
// - 함수명을 변수처럼 사용(함수의 주소를 넣은 형태)
let func2 = func1;
// - 익명함수 대입
let func3 = function (text){
    console.log("출력 : "+text);
}
func1("TT");
func2("TT");
func3("TT");

/* 5. 화살표함수(arrow function)
- 화살표로 함수를 축약함
- 항상 익명함수로 만들어짐
*/
let func_1 = (text)=>{
    return text;
}
console.log("func() : ", func_1("TT"));

/*
화살표함수가 축약할 수 있는 것
- 매개변수 하나일 때
- 함수코드가 return문 하나일 때
*/
let func_2 = text=>{
    return text;
}
console.log("func() : ", func_2("TT"));

let func_3 = text=>text;
console.log("func() : ", func_3("TT"));


/*
6. object
- property(key) : value
속성(키) : 값 쌍으로 이루어짐
*/
const student = {
    "name":"김윤지",
    "age":19,
    "subject":["국어","수학"]
};
//  - age 에 접근하기
console.log("age : ",student.age);
console.log("age : ",student["age"]);
// - city 추가하기
//student.city = "Seoul";
student["city"] = "Seoul";
console.log("student",student);
// - city 추가하기
delete student.city;
console.log("student",student);



/*
7. JSON (Java Script Object Notation)
- 객체의 내용을기술하는 텍스트 파일
- key  vlaue로 데이터저장
- key는 문자열로 하기로 정해져있음
- 플랫폼에 독립적, 읽기 쉬움, 처리하기 쉬움
*/
// JSON 형태 예시
const jsonData = 
`{
    "korean_dramas": [
        {
            "title": "미스터 션샤인",
            "year": 2018,
            "genre": ["사극", "로맨스", "액션"],
            "director": "김은숙",
            "actors": ["이병헌", "김태리"]
        },
        {
            "title": "응답하라 1988",
            "year": 2015,
            "genre": ["드라마", "코미디"],
            "director": "신원호",
            "actors": ["혜리", "박보검"]
        }
    ]
}`

// JSON 관련 함수
console.log("jsonData : ",jsonData);
const jsonObj = JSON.parse(jsonData);
console.log("jsonObj : ",jsonObj);
const jsonStr = JSON.stringify(jsonObj);
console.log("jsonStr : ",jsonStr);




/* 8. callback
- argument로 넘겨받는 함수
- 외부함수에 의해서 호출되는 함수
- 비동기 처리에 유용
*/
function somefunc(callback){
    console.log("어떤함수 실행");
    callback();
}
function cb(){
    console.log("콜백함수 실행");
}
//실행부
somefunc(cb);

setTimeout(()=>{
    console.log("5초 경과");
},5000);

setTimeout(()=>{
    console.log("2초 경과");
},2000);


/*
9. 동등비교
9-1. == 동등연산자
    - 단순한 값 비교
    - 자료형이 같아지도록 변환한 후에 비교한다
9-2. === 일치연산자
    - 자료형까지 엄격하게 비교한다.
*/
console.log(" 1 == 1 : ", 1 == 1, " ,  1 === 1 ", 1 === 1);
console.log(" 1 == '1' : ", 1 == '1', " , 1 === '1' ", 1 === '1');
console.log(" 0 == false : ", 0 == false, " , 0 === false ", 0 === false);
console.log(" 0 == null : ", 0 == null, " ,  0 === null ", 0 === null);
console.log(" undefined == null : ", undefined == null, " ,  undefined === null ", undefined === null);

/*
10. null 과 undefined
10-1. null
    - 존재하지 않거나 유효지 않은 object 혹은 주소
    - 의도적으로 비어있음을 표현할 때 사용
10.2. undefined
    - 값이 대입되지 않은 변수
*/
const obj = {};
console.log("obj : ",obj);
console.log("obj : ",obj.prop);

let bar = null;
console.log("null : ",bar);
console.log("typeof null : ",typeof null); //typeof null은 object로 출력

// 같은 의미
// 1) input !== null && input !== undefined
// 2) input != null

/*
11. Template Literal
` (백틱 사용)
${변수} 사용가능
*/
let aa = '김윤지';
console.log(`저는 ${aa}입니다.`);

/*
12. Nullish coalescing operator
?? : (null 병합 연산자) 왼쪽 피연산자가 null 또는 undefined일때 오른쪽 반환
|| : (기존 논리 연산자) 왼쪽 피연자가 false이면 오른쪽 값으로 변환

*/

const valueA = 0 ?? 77;
console.log(valueA);
const valueB = 0 || 77;
console.log(valueB);

const valueC = "" ?? "bin";
console.log(valueC); // 빈 문자열 출력
const valueD = "" || "bin";
console.log(valueD); // bin 출력




/*
13.  forEach, for of
*/
const fruits = ['apple','banana','orange','pear'];

console.log("\n기본 For ");
for(let i =0;i<fruits.length;i++){
    console.log(fruits[i]);
}

console.log("\nforEach ");
fruits.forEach(function(f){
    console.log(f);
});

console.log("\nfor of");
for(const f of fruits){
    console.log(f);
}

/*
Node.js
- Ryan Dahl이 2009년에 발표
- 확장성 있는 network application 빌드를 목표로
- 크롬의 V8엔진을 사용
- Node.js 내부는 C/C++로 제작
- 홀수버전과 짝수버전(LTS)

장점
- JavaScript로 서버를 개발(Server Side)
   -- 하나의 언어로 full stack이 가능
   -- 원활한 JSON 지원
    ---> RESTful API빌드에 유용
- 싱글thread로 작성
- 이벤트기반 Non-Blocking 및 비동기 처리
    ---> event loop는 비동기 I/O를 사용하므로 스레드가 block되지 않고 싱글스레드로 다수의 요청 처리 가능
    * I/O : 저장장치(SSD,HDD), 데이터베이스, 네트워크 접근 등
    ---> 멀티스레드보다 자원을 효율적으로 사용
    ---> 경쟁상태(race condition) 이나 교착상태(dead lock), 동기화 문제가 발생하지 않음
    ---> thread safety : 일관성이 있음 
- 간단한 확장모듈 관리(NPM)
- 빠른 개발 속도
- 마이크로 서비스 아키텍쳐에 적합
    ---> 유연성, 비용절감
- 풍부한 생태계(오픈소스)

*/

/*
단점(cons)
- cpu 위주의 복잡한 계산작업에 약함
---> cpu위주의 작업인 경우(I/O 위주여야함)
---> event loop에서 병목현상 발생
-----> 병의 목처럼 한꺼번에 많은 양의 데이터가 유입되어 컴퓨터가 느려지는 현상.
- 미성숙한 생태계
---> 과도하게 남발되는 npm
-----> left-pad,funding,everthing
---> 제대로 문서화, 테스트 되지 않은 도구들 넘침
---> 품질보장 X
---> 다른 기술들(e.g. Spring)에 비해 제공되는 환경부족
- callback 지옥

*/


