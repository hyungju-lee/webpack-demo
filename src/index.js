// 모듈화
// require : CommonJS 스팩의 모듈 가져오기
// CommonJS : js는 브라우저에서만 쓰이는 한정된 언어였는데, 이걸 서버언어로도 사용되게하게끔 만들어준 것 (node)
// stackoverflow - js 1위
// 아직 브라우저가 require 스펙 이해못함. 그래서 실행 안됨

var _ = require('lodash');
// import _ from 'lodash'; < require를 es6로 바꾸면 이렇게 된다.
// named import 규칙 : {} 안에 동일한 이름을 명시
import {area, circurference} from './js/circle';
// default import 규칙 : {} 가 없음. 이름을 자기마음대로 바꿀 수 있음
// cube라고 cube로 똑같이 하는게 아니라 마음대로 바꿀 수 있음
import cube1 from './js/cube';

// es6 명령어 사용해보기 css파일 불러오기
import './style.css';
import './hello.scss';

function component() {
	let element = document.createElement('div');

	// Lodash, currently included via a script, is required for this line to work
	element.innerHTML = _.join(['Hello', 'webpack!!'], ' ');

	return element;
}

console.log(area(5), circurference(5));
console.log(cube1.volume(5));

document.body.appendChild(component());