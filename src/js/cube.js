// 전체 모듈화 => ex6 default export
const cube = {
	volume: x => x * x * x,
	b: (r) => r*r
};

// const volume = x => x*x*x;
// 전체 모듈화기 때문에 하나밖에 못옴 아래처럼 cube
export default cube;