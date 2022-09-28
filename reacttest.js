// 라이브러리 vs 프레임워크
// 라이브러리(공구) : 개발 편의를 위한 도구의 모음
// 프레임워크(공장) : 기반 구조까지 잡혀있음ㅓ

// 생태계가 좋다 > 구글링하기 좋다

// 구글 익스텐션 > Wappalyzer 
// 열어 놓은 웹사이트에서 어떤 기술을 사용하고 있는지 알 수 있음

// CDN > unpkg

// JSX(확장문법) 와 Babel 
// jsx : react.createElement 표현식
// babel : jsx를 자바스크립트가 이해할 수 있는 표현으로 바꿔주는 컴파일러
// spread 연산자 : ... (요소를 분해해서 보여줌)

// 멀티 Element 생성하기 
// Fragment : React.Fragment or <></>

// 프론트엔드 개발의 장점? 
// 눈에 보인다, 바로 확인할 수 있다.


// 리액트와 리랜더링 
// 바닐라 JS : 변경으로 인해 Element를 다시 그림
// React : 변경된 부분만 다시 그림

// React 앨리먼트는 불변객체(immutable) : 변하지 않는 객체.
// 앨리먼트 타입이 바뀌면 이전 앨리먼트는 버리고 새로 그림
// 앨리먼트 타입이 같다면 1. key 비교, 2. pros 비교하여 변경사항 반영


// 이벤트
// 바닐라JS : onclick ~ / addEventListener
// React : onClick ~ (카멜 케이스)

// Object.assign : 객체 내용 복사
// 전역 변수 변경 : ReactDOM.render


// DOM : 논리 트리
// 컴포넌트 : 앨리먼트의 집합
// 앨리먼트 : 요소
// useState : 상태값을 관리해주는 훅 


// 사이트 이펙트 = 부작용
// 의도하지 않은 효과 vs 부수 효과
// useState : lasy initialize
// useEffect : dependency array


// 커스텀 훅 만들기
// 반복 : 함수로
// 훅들이 반복 : custom Hook으로


// hook flow 훅의 호출 타이밍
// useState : setState 시 prev 주입됨 setShow((prev) => !prev);
// useEffect : render가 끝난 뒤
// update 시 : useEffect clean up / useEffect
// dependency array : 전달받은 값의 변화 있는 경우에만


// Ref로 Dom 다루기
// Vanilla JS : document.get~ / document.query~
// React : useRef / ref 


// Form 다루기
// onSubmit : event.preventDefault()
// event.target.elements : console.dir(element)

// validatioin : onChange
// controlled : input의 value를 직접 관리


// Error 다루기
// Error Boundary : Catch Error 해서 보여주기
// Fallback : Errror가 났을 때 보여줄 컴포넌트

